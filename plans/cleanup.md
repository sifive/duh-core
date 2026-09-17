# Cleanup plan

## Dead code — done

### `lib/Expr-parser.js` — deleted

- Required `../src/ExprLexer.js`, `../src/ExprParser.js`, `../lib/custom-expr-visitor.js` — none exist
- `src/` deleted deliberately in `08f703d read HTML formated DUH` ("left overs"), `lib/Expr-parser.js` was the overlooked leftover (added in `f017eb6 expression parser`)
- Depended on `antlr4` — not in package.json
- `files: ["lib"]` was shipping the broken file to npm

### `lib/expand-port-maps.js` — deleted

- Valid code, but only referenced from commented-out block in `lib/expand-all.js`
- Not exported, not tested; feature (portMaps expansion) was disabled
- Conservative choice: delete (recovery via git history if the feature is ever wanted)

### `lib/expand-all.js` — cleaned

- Removed commented-out `expandPortMaps` require + block; file now only expands ports
- `npm test` green (8 passing, eslint clean)

## README — done

- Rewritten: concepts (VLNV, catalog, shorthand ports), full API ref for all 11 exports, worked example, node >= 22 note

## Remaining (optional)

- Coverage gaps: `expand-ports` 21%, `name-fix` 17%, `validate.js` 33% (register collision path untested), `uniquify-names` 47% — add tests
- Bump `package.json` version / publish after cleanup commit