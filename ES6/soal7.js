// function sum (...args) {
//     let total = 0;
//     for (let i = 0; i < args.length; i++) {
//         total += args[i];
//         /* total = 0 + 0
//         total = 0 + 1 = 1
//         total = 1 + 2 = 3
//         total = 3  + 3 = 6
//          */
//     }
//     return total;
// }
// console.log(sum(1,2,3,4));

const sum = (...args) => {
    let total = 0;
    for (let i = 0; i < args.length; i++) {
        total += args[i];
    }
    return total;
}
console.log(sum(1,2,3,4));