# Learning typescript

## basic
- install typescript
```bash
npm init -y
npm install -g typescript --save-dev
npx tsc --init
```
-- cek version
```shell
tsc -v
```
- instal library
```bash
npm i nodemon ts-node @types/node
```

- Configuration
-- settings configuration tsconfig.json
you can set it according to your wishes
```json
{
  "compilerOptions": {
    "target": "ES6",                     // versi JS output
    "module": "commonjs",                // sistem module
    "rootDir": "./src",                  // semua source TS di src/
    "outDir": "./dist",                  // hasil compile masuk ke dist/
    "strict": true,                      // mode strict (lebih aman)
    "esModuleInterop": true,             // import/export support
    "forceConsistentCasingInFileNames": true,
    "skipLibCheck": true
  },
  "include": ["src/**/*"],               // hanya compile ts di src/
  "exclude": ["node_modules", "dist"]
}
```
-- on package.json
```json
"scripts": {
    "dev": "ts-node src/index.ts",
    "build": "tsc",
    "start": "node dist/index.js"
}
```

- structur directory
project/
 ├─ src/
 │   └─ index.ts
 ├─ dist/
 ├─ tsconfig.json
 └─ package.json

