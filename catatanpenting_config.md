# Catatan Penting

## jika pakai commonjs
- agar dapat menggunakan module export import buat false:
 ```json
 "target":"es2019",
 "module":"commonjs",
 "verbatimModuleSyntax": false,
 ```

 ## jika pakai esm
 - tambahkan pada package.json 
 ```json
 "type":"module"
 ```
 - pada tsconfig.json
 ```json
  "target":"esnext",
  "module":"esnext",
  "verbatimModuleSyntax": true,
 ```

