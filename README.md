This is an example of Google Apps Script and [openapi-generator-gas](https://github.com/mahaker/openapi-generator-gas).

### Technology Stack

- frontend
   - React
   - Vite + vite-plugin-singlefile
   - TypeScript
   - openapi-generator-gas
- backend
   - TypeScript
   - esbuild + esbuild-gas-plugin
   - openapi-generator-gas

### Development

1. Clone this repository
2. Create .clasp.json
   - `cp .clasp.json.example .clasp.json`
3. Update .clasp.json(Embed your GAS project ID)
4. Run `npm run bootstrap`
5. Run `npm run build`
6. Run `npm run push`
7. Create new deploy for your GAS project
