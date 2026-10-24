let arr: number[] = [1, 2, 2, 3, 3, 4];
let updated_array = arr.filter((num, index) => arr.indexOf(num) === index);

console.log(updated_array);