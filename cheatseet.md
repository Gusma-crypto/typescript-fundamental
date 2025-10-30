# CheatSheet Typescript

## basic
### variable
let umur:number =20; //bisa diubah
const name:string="agus" //tidak bisa dirubah

### array
array<T> : T ibarat kotak kosong
number[]:array 

### filter & map
data.filter((variable: typedata)=> nilai filter);
ex: 
```typescript
users.filter((u: User)=> u >=18);
```
data.map((variable: typedata)=> variable.properties);
ex: 
```typescript
users.map((u: User)=>u.name)
```
Catatan: contoh diatas untuk TypeData Users adalah sudah di declarasikan di types.ts
