// STRİNG METOTLARI

// length
let js = 'Javascript'
console.log(js.length) // output: 10

console.log(js[0])  // output:J, string içindeki karakterlere indeks ile erişilebilir ama değişitirilemez

// toUpperCase()
console.log(js.toUpperCase()) // output: JAVASCRİPT

//toLowerCase()
console.log(js.toLowerCase()) // output: javascript

//substring(), 2 parametre alır: başlama indeksi, bitme indeksi
console.log(js.substring(4,10)) // output: script

// split(), paramtre olarak girilen değere göre stringi ayırıp dizi haline getiriyor
let countries = "Finland, Sweden, Norway, Denmark, and Iceland"

console.log(countries.split(",")) // output: ["Finland" , " Sweden" , " Norway" , " Denmark" , " and Iceland"] --- yalnızca virgülden ayırdı
console.log(countries.split(", ")) // output: ["Finland" , "Sweden" , "Norway" , "Denmark" , "and Iceland"] --- virgül + boşluktan ayırdı

//trim(), stringin başındaki ve sonundaki boşlukları silmeye yarar

let string = "     30 Days Of JavaScript      "
console.log(string)
console.log(string.trim())  // output: 30 Days Of JavaScript

// includes() string içinde değeri bulursa true, bulamazsa false döndürür.

console.log(string.includes("days"))  // output: false
console.log(string.includes("Days"))  // output: true


// replace(), eski ve yeni olmak üzere 2 parametre alır
console.log(string.replace('JavaScript' , 'Python'))  //output: 30 Days Of Python


//charAt(), belirtilen indexteki değeri yazar
console.log(string.charAt(17)) // output: a

//charCodeAt(), belirtilen indeksteki değerin ASCII numarasını döndürür
console.log(string.charCodeAt(17))  //output: 97


//indexOf(), belirtilen değerin indeksini verir, değer yoksa -1 döndürür
console.log(string.indexOf('a')) //output: 9

//lastIndexOf(), belirtilen değerin son değer indeksini verir, değer bulamazsa -1 döndürür
console.log(string.lastIndexOf('a')) //output: 19