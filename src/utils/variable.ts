let umur: number[] =[20,30,40, 35];
const names: Array<string> = ["eko", "budi"];

export function getDataUmur(){
 console.log(umur);
 console.log(names);
}

export function addUmur(){
    let umur1 = umur.push(10);
    console.log(umur1); 
}