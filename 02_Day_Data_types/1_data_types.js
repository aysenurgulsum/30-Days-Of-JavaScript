let word = "JavaScript"
word[0] = "Y"
console.log(word)  // output: JavaScript, değer bu şekilde değiştirilemez

let nums = [1,2,3]
nums[0] = 10
console.log(nums) // output: [10,2,3], non-primitive (ilkel olmayan) veri türleri değişitirilebilir.

let numss = [1,2,3]
let numbers = [1,2,3]
console.log(numss == numbers) // output: false, non-primitive türler aynı özellik ve değerlere sahip olsalar bile kesinlikle eşit değildirler.

let userOne = {
    name: 'Aysenur',
    role: 'student',
    country: 'Türkiye'
}

let userTwo = {
    name: 'Aysenur',
    role: 'student',
    country: 'Türkiye'
}

console.log(userOne == userTwo) // output: false, object de non-primitive türünde

// Diziler, nesneler ve fonksiyonlar karşılaştırılmaz. Non-primitive türler, değerler yerine referanslarla karşılaştırıldıklarından referans türleri olarak bilinir. İki nesne yalnızca aynı temel nesneye atıfta bulunuyorsa kesinlikle eşittir.

let sayilar1 = [1,2,3]
let sayilar2 = sayilar1

console.log(sayilar1 == sayilar2) // output: true, aynı referansı işaret ediyorlar