let age = 21
const gravity = 9.81;

// Math Object

const PI = Math.PI
console.log(PI) // output: 3.141592653589793


// En yakın sayıya yuvarlama, .5'in altındaysa aşağıya, üstündeyse yukarıya yuvarlar

console.log(Math.round(PI)) // output: 3

console.log(Math.round(gravity)) // output: 10


//Aşağıya yuvarlama

console.log(Math.floor(gravity)) // output: 9

// Yukarıya yuvarlama

console.log(Math.ceil(PI)) // output: 4


//En küçük sayıyı bulma

console.log(Math.min(8,1,4,9,3,7)) // output: 1

//En büyük sayıyı bulma

console.log(Math.max(4,6,1,9,3,8)) // output: 9


// Rastgele sayı üretme

const rnd = Math.random() // 0 - 1 arasında bir sayı üretir
console.log(rnd)

const num = Math.floor(Math.random() * 100) // 0 - 100 arasında bir sayı üretir
console.log(num)


// Mutlak Değer
console.log(Math.abs(-10)) // output: 10


//Karekök
console.log(Math.sqrt(9))  // output: 3


// Üs Alma
console.log(Math.pow(3,2)) // output: 9


// e tabanında logaritma
console.log(Math.log(2))  //output: 0.6931471805599453
