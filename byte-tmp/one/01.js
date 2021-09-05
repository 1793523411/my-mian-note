//!找出数组中重复的数字
// 输入：
// [2, 3, 1, 0, 2, 5, 3]
// 输出：2 或 3

const work = arr => {
	const sortedArr = arr.sort((a, b) => a - b)
	for (let i = 0; i < sortedArr.length-1; i++){
		if(sortedArr[i] === sortedArr[i+1]) return sortedArr[i]
	}
	return false
};
const work2 = arr => {
	const bubbleArr = Array(arr.length).fill(0);
	for (let i = 0; i < arr.length; i++){
		if(++bubbleArr[arr[i]] >= 2) return arr[i]
	}
	return false
};

const work3 = (arr) => {
	const arrSet = new Set()
	for (let i = 0; i < arr.length; i++){
		let originLength = arrSet.size;
		arrSet.add(arr[i])
		if (originLength === arrSet.size) return arr[i]
	}
	return false
}
const work4 = (arr) => {
	const arrMap = new Map();
	for (let i = 0; i < arr.length; i++){
		if (arrMap.has(arr[i])) {
			return arr[i]
		}else{
			arrMap.set(arr[i],arr[i])
		}
	}
	return false
}

const work5 = (arr) => {
	for (let i = 0; i < arr.length; i++){
		let index = arr.findIndex(item => {
			item === arr[i]
		})
		arr.splice(index, 1)
		if(arr.findIndex(item => item === arr[i]) !== -1) return arr[i]
	}
	return false
}

console.log(work([2, 3, 1, 0, 2, 5, 3]));
console.log(work2([2, 3, 1, 0, 2, 5, 3]));
console.log(work3([2, 3, 1, 0, 2, 5, 3]));
console.log(work4([2, 3, 1, 0, 2, 5, 3]));
console.log(work5([2, 3, 1, 0, 2, 5, 3]));
