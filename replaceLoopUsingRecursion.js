 function multiply(arr, n) {
    if (n <= 0) {
      return 1;
    } else {
      return multiply(arr, n - 1) * arr[n - 1];
    /*    multiply([2,2,3], 2)
      return multiply([2,2,3], 1)  * arr[1]
      return multiply([2,2,3], 0)  * arr[0]
      */
    }
  }
console.log(multiply([2,2,3], 2));
// console.log(multiply([2,2,3], 1))
// console.log(multiply([2,2,3], 0))

/* output dari multiply([2,2,3], 2) adalah return multiply([2,2,3], 1) * arr[1]
    output dari multiply([2,2,3], 1) adalah return multiply([2,2,3], 0) * arr[0]
    output dari multiply([2,2,3], 0) adalah 1
*/  


function sum (arr, n) {
  if (n <= 0) {
    return 0;
  } else {
    return sum(arr, n-1) + arr[n-1]
  }
}

// output dari sum([2, 3, 4, 5], 3) = return sum([2, 3, 4], 2) + arr[2] -> 9
// output dari sum([2, 3, 4], 2) =  return sum([2, 3, 4], 1) + arr[1] -> 5
// output dari sum([2,3,4], 1) = return sum([2, 3, 4], 0) + arr[0] -> 2
// output dari sum([2,3,4], 0) = 0
