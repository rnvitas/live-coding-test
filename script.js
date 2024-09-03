//Mencari data array
//harus number
//validasi value

function cariArray(arry, number) {
  //   const number = "";
  //   const arry = [];
  //   const start = arry[0];

  if (typeof number !== "number") {
    console.log("Data yang dicari harus berupa number");
    return;
  }

  for (let i = 0; i < arry.length; i++) {
    if (typeof arry[i] !== "number") {
      console.log(`Elemen pada index ${i} bukan number`);
      return;
    }
    if (arry[i] === number) {
      return numberToFind;
    }
  }
  return "Data tidak ada";
}

const Mynumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const datanya = 8;
const result = cariArray(Mynumber, datanya);

console.log(result);
