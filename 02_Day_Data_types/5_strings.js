//concat(), birleştirme işlemi sağlar
let sentence = '30 Days'
console.log(sentence.concat(" Of", " JavaScript"))


// startsWith(), beliritlen değer ile başlıyorsa true, başlamıyorsa false döndürür
console.log(sentence.startsWith('JavaScript'))  // output: false
console.log(sentence.startsWith("30"))  // output: true

// endsWith(), beliritlen değer ile bitiyorsa true, bitmiyorsa false döndürür
console.log(sentence.endsWith('Days'))  // output: true
console.log(sentence.endsWith("30"))  // output: false


// search(), ilk eşleşmenin indeksini döndürür
let z = "30 Days Of JavaScript"
console.log(z.search("JavaScript")) // output: 11

// match(), eşleşme varsa bir dizi döndürür, yoksa null döndürür

let s = "I love JavaScript"
console.log(s.match('love')) // output: [ 'love', index: 2, input: 'I love JavaScript', groups: undefined ]

//  /gi:  g, globalde ara; i, büyük-küçük harf duyarsız

let txt = "In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge"
let regEx =/\d+/

//kaçış karakterli d, d'nin normal olmadığı anlamına gelir, d bunun yerine bir rakam gibi davranır
// + bir veya daha fazla basamaklı sayı anlamına gelir
// sonrasında g varsa global demek, her yerde ara

console.log(txt.match(regEx))
 /*
    output: 
    [
    '2019',
    index: 3,
    input: 'In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge',
    groups: undefined
  ] 
*/
console.log(txt.match(/\d+/g)) // output: [ '2019', '30', '2020' ]



// repeat(), parametre olarak aldığı sayı kadar string döndürür
let y = "love"
console.log(y.repeat(10)) // output: lovelovelovelovelovelovelovelovelovelove