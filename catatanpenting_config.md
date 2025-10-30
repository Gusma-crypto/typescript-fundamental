# Catatan Penting

## INSTALL DAN CONFIG TYPESCRIPT
### jika pakai commonjs
- agar dapat menggunakan module export import buat false:
 ```json
 "target":"es2019",
 "module":"commonjs",
 "verbatimModuleSyntax": false,
 ```

 ### jika pakai esm
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

## 1. materi tentang array
catatan saya:
ada dua jenis array pertama penggunaan secara simple dan singkat dan kedua generic, generic ini yang sering digunakan contoh penggunaan array:
```typescript
//array simple
let umur:number = [40, 20, 30, 60];

//arra generic
const user: array<string> =["dani", "rohman", "vina"];

```
