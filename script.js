//Mencari data array
//harus number
//validasi value

function cariArray() {
  //   const number = "";
  const arry = [];
  //   const start = arry[0];

  for (let i = 0; i < arry.length; i++) {
    if (isNumber(number)) {
      if (arry[i] == number) {
        return number;
      } else if (arry[i] !== number) {
        return "data tidak ada";
      }
    } else {
      console.log("data harus number");
    }
  }
  return number;
}

const arry = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = cariArray();

console.log(result);
