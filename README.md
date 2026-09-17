# duh-core

[![NPM version](https://img.shields.io/npm/v/duh-core.svg)](https://www.npmjs.org/package/duh-core)
[![Actions Status](https://github.com/sifive/duh-core/workflows/Tests/badge.svg)](https://github.com/sifive/duh-core/actions)

Core library for **DUH** — a JSON/JSON5 document format describing hardware IP
(components, bus interfaces, ports, register maps, designs). Roughly a compact,
JSON-native alternative to IP-XACT.

`duh-core` provides the primitives used by DUH tooling:

- read DUH documents with `$ref` resolution (JSON, JSON5, HTML-embedded)
- validate against [`duh-schema`](https://www.npmjs.com/package/duh-schema) plus
  semantic checks (e.g. overlapping address blocks)
- expand shorthand notation into canonical form
- look up / normalize VLNV references
- flatten a design into a component

## Install

```sh
npm i duh-core
```

Requires Node >= 22. CommonJS.

```js
const duhCore = require('duh-core');
```

## Concepts

**VLNV** — identity tuple `{vendor, library, name, version}` used to reference
components, bus definitions and designs.

**Document** — top-level DUH object, typically `{component: {...}}` or
`{design: {...}}`. A *catalog* is `{components: [...], designs: [...]}`.

**Shorthand ports** — ports may be written as a map of name → width, where a
negative width means `out`:

```json5
{ports: {clk: 1, rst: 1, data: -32, cfg: 'CFG_W'}}
```

`expandAll` rewrites that into explicit `[{name, wire: {direction, width}}]`.

## API

```js
const {
  readDuh, expandAll, validate, validateSchema,
  findVLNV, aVLNV, getGetBusDef,
  nameFix, uniquifyNames, designComponent, interfaceMode
} = require('duh-core');
```

### `readDuh(argv) → Promise<object>`

Reads and dereferences a DUH document.

| option | meaning |
| --- | --- |
| `filename` | path to read; defaults to `<cwd-basename>.json5` |
| `verbose` | log progress to stdout |

All `$ref`s are resolved via [`json-refs`](https://www.npmjs.com/package/json-refs);
content is parsed with [JSON5](https://json5.org). If the extension is `.html`,
leading/trailing blank lines are chopped before parsing (DUH-in-HTML style).
Rejects if the root ref fails to resolve.

```js
const duh = await readDuh({filename: 'my-ip.json5'});
```

### `expandAll(duh) → Promise<object>`

Normalizes `duh.component.model.ports` from shorthand to canonical array form.
Mutates and resolves with the same object.

### `validateSchema(duh) → Promise<object>`

Validates against `duh-schema` root schema using Ajv (`allErrors: true`,
`uniqueItemProperties` keyword enabled). Resolves with `duh`, or rejects with a
pre-formatted, colorized error table (data path / schema path / message).

### `validate(duh) → Promise<void>`

`validateSchema` plus semantic checks. Currently verifies address blocks inside
each memory map are ordered and non-overlapping; throws on collision.

### `findVLNV(arr, kind, vlnv) → object`

Finds an entry in a catalog array and returns its inner object.

```js
const comp = findVLNV(catalog.components, 'component', {
  vendor: 'ven', library: 'l1', name: 'c1', version: 'v1'
});
```

`vlnv` may be partial — only the supplied keys are matched.

### `aVLNV(obj) → [vendor, library, name, version]`

VLNV as an array, handy for path joins and sorting keys.

### `getGetBusDef(def) → (vlnv) => busDef`

Curried lookup into a nested `vendor → library → name → version` bus definition
tree.

```js
const getBusDef = getGetBusDef(busDefs);
const bd = getBusDef({vendor: 'v', library: 'l', name: 'axi4', version: '1.0'});
```

### `interfaceMode`

Helpers that accept both legacy and current terminology:

| fn | true / returns for |
| --- | --- |
| `isInitiator(e)` | `interfaceMode` is `initiator` or `master` |
| `isTarget(e)` | `interfaceMode` is `target` or `slave` |
| `onInitiator(e)` | `e.onInitiator \|\| e.onMaster` |
| `onTarget(e)` | `e.onTarget \|\| e.onSlave` |

### `nameFix(arr) → arr`

In-place fixup of `name` fields to XML `xs:Name` rules: `[`/`]`/`(`/`)` → `_`,
leading digit/`-`/`.` gets an `_` prefix, duplicates get a numeric suffix.
Reports each change on stdout, unfixable names on stderr.

### `uniquifyNames(duh)`

Applies `nameFix` recursively over `component.memoryMaps` → `addressBlocks` →
`registerFiles` / `registers` → `fields`.

### `designComponent(catalog, design) → {component}`

Flattens a design into a single component: resolves each instance ref in the
catalog, lifts `import`/`export` connections into the new component's
`busInterfaces`, renames their port maps to `<ifaceName>_<logicalPort>`, copies
matching ports into `model.ports`, and merges instance `fileSets.Hdl` plus
`./<design-name>.v`.

```js
const {component} = designComponent(catalog, catalog.designs[0].design);
```

## Example

```js
const {readDuh, expandAll, validate, designComponent} = require('duh-core');

const duh = await readDuh({filename: 'soc.json5'});
await validate(duh);
await expandAll(duh);

if (duh.design) {
  const {component} = designComponent(duh, duh.design);
  console.log(component.busInterfaces.map(bi => bi.name));
}
```

## Testing

```sh
npm test        # eslint + mocha + c8 coverage
```

## License

Apache 2.0 — see [LICENSE](https://github.com/sifive/duh-core/blob/master/LICENSE).
