// src/services.ts
import { User } from "./types";

export const users: User[] = [
  { name: "Agus", umur: 20, email: "agus@mail.com" },
  { name: "Budi", umur: 16, email: "budi@mail.com" },
  { name: "Fajar", umur: 30, email: "fajar@mail.com" },
];
// contoh looping pakai for of
export function printAllUsers(): void {
  for (const u of users) {
    console.log(`Nama: ${u.name}, Umur: ${u.umur}, Email: ${u.email}`);
  }
}

// Filter user yang umur >= 18
export function getDewasa(): User[] {
  return users.filter((u: User) => u.umur >= 18);
}


// Map untuk mengambil hanya nama
export function getUserNames(): string[] {
  return users.map((u: User) => u.name);
}
