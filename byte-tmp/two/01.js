//二分查找

const branchSearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;
  arr = arr.sort((a, b) => a - b);
  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);
    if (arr[mid] > target) right = mid - 1;
    else if (arr[mid] < target) left = mid + 1;
    else if (arr[mid] === target) return arr[mid];
  }
  return -1;
};

 const branchSearch2 = (arr, target) => {
  let left = 0;
  let right = arr.length;
  arr = arr.sort((a, b) => a - b);
  while (left < right) {
    let mid = Math.floor(left + (right - left) / 2);
    if (arr[mid] > target) right = mid;
    else if (arr[mid] < target) left = mid + 1;
    else if (arr[mid] === target) return arr[mid];
  }
  return -1;
};

const arr = [3, 5, 7, 1, 2, 9, 23, 65, 24];
const target = 20;

// console.log(branchSearch(arr, target));
// console.log(branchSearch2(arr, target));

module.exports = {
	branchSearch
}