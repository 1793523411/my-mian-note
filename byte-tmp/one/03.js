// 输入：s = "We are happy."
// 输出："We%20are%20happy."

const work = (str) => {
	return str.replace(/\s/g,'%20')
}

const work2 = (str) => {
	if(str === '%20') return '%20'
	return encodeURI(str)
}

const work3 = (str) => {
	return str.split(' ').join('%20')
}

let str = " We are happy. "

console.log(work(str))
console.log(work2(str))
console.log(work3(str))
console.log(work(' '))
console.log(work2(' '))
console.log(work3(' '))
console.log(work('%20'))
console.log(work2('%20'))
console.log(work3('%20'))

