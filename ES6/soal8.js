// const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
// let arr2;
// arr2 = [...arr1];
// arr2[2] = "testing";
// console.log(arr2);

const arr1 = [{name:'A'}, {name:'B'}];
let arr2 = [...arr1];
arr2[0] = {
    name: "Basir",
};
console.log(arr2[0].name); // 'Z'  <-- objeknya sama, jadi terpengaruh