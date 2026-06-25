let arr = [1,2,3, "JS", "python", true, 34.78]
console.log(arr)//(7) [1, 2, 3, 'JS', 'python', true, 34.78]

console.log(arr[4])
console.log(arr.at[-3])
console.log(arr.at[3])

console.log(arr.length)
let subarr = arr.slice(2, 4)
console.log(subarr);

arr.unshift(100, 200, "false")
console.log(arr)

arr.push(100, "true")
console.log(arr)

arr.pop()
arr.shift()
console.log(arr)

arr.splice(4,50,"two","mike","Beth")
console.log(arr)

arr.splice(8,2,"Java", "C++")
console.log(arr)

arr.splice(4,2)
console.log(arr)

console.log(arr.includes("java"))//false

let reversed = arr.reverse()
console.log(reversed)