let challenge = '30 Days Of JavaScript'
console.log(challenge)
console.log(challenge.length)
console.log(challenge.toUpperCase())
console.log(challenge.toLowerCase())
console.log(challenge.substring(3,challenge.length))
console.log(challenge.includes('Script'))
console.log(challenge.split())
console.log(challenge.split(" "))

let arr = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
arr = arr.split(',')
console.log(arr)

console.log(challenge.replace('JavaScript', 'Python'))

console.log(challenge.charAt(15))
console.log(challenge.charCodeAt('J'))
console.log(challenge.indexOf('a'))
console.log(challenge.lastIndexOf('a'))

let cumle = 'Bir cümleyi çünkü ile bitiremezsiniz çünkü çünkü bir bağlaçtır'
console.log(cumle.indexOf('çünkü'))
console.log(cumle.lastIndexOf('çünkü'))
console.log(cumle.search('çünkü'))

console.log(challenge.startsWith('30'))
console.log(challenge.endsWith('JavaScript'))
console.log(challenge.match(/a/g))

console.log('30 Days of'.concat('JavaScript'))
console.log(challenge.repeat(2))