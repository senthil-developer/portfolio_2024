function palindrome(word) {
  let reverse = word.toString().split("").reverse().join("");
  return (reverse = parseInt(reverse) * Math.sign(word));
}

console.log(palindrome(-59));

function sumArray(arr) {
  let left = 0;
  let right = arr.length - 1;
  let total = 0;

  while (left < right) {
    total += arr[left] + arr[right];
    left++;
    right--;
  }
  // If the array length is odd, add the middle element
  if (arr.length % 2 !== 0) {
    total += arr[left];
  }

  return total;
}

console.log(sumArray([5, 5, 5]));
