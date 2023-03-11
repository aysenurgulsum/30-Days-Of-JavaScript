let space = " "
let city = "Balıkesir"
let country = "Türkiye"

console.log(city + space + country)

const paragraph = "Lorem ipsum dolor sit.\
Aliquam expedita voluptatum beatae.\
Quam eaque ipsa magnam?\
Dignissimos nobis quas iure.\
Laudantium mollitia dolorum sed!"

// String'in bir sonraki satırda devam edeceğini bildirmek için ters eğik çizgi (\) kullanılır.

/*
    \n: yeni satır
    \t: tab kadar boşluk
    \\: ters eğik çizgi yazmak için
    \': tek tırnak yazmak için
    \": çift tırnak yazmak içiçn
*/ 

// kodları console kısmına yazarak denerseniz daha iyi anlarsınız.
console.log('I hope everyone is enjoying the 30 Days Of JavaScript challenge.\nDo you ?') //  Buradakı \n satır sonu anlamına gelir sonrası aşağı iner
console.log('Days\tTopics\tExercises') // Burada her kelimeden sonra bir tab (\t) tuşuna basılmış etkisi verir
console.log('Day 1\t3\t5') // \t bir başka örnek
console.log('Day 2\t3\t5') // \t bir başka örnek
console.log('Day 3\t3\t5') // \t bir başka örnek
console.log('Day 4\t3\t5') // \t bir başka örnek
console.log('This is a backslash  symbol (\\)') // Ters eğik çizgi yazmak için \\ kullanılıyor
console.log('In every programming language it starts with \"Hello, World!\"') // Hello World'ü çift tırnak içine almak için \" Hello World \" kullanılıyor.
console.log("In every programming language it starts with \'Hello, World!\'") // Hello World'ü tek tırnak içine almak için \' Hello World \' kullanılıyor.
console.log('The saying \'Seeing is Believing\' isn\'t correct in 2020') // Bu kısımdada alıntıları kullanmak için \ kullanımı gösterilmiş.



// Template Literals (Şablon Değişmezleri)

let a = 2
let b = 3

console.log(`The sum of ${a} and ${b} is ${a + b}`)  // ters tırnak işareti ile yazılmalı


// İnterpolasyon Metodu

console.log(`${a} is greater than ${b}: ${a > b}`)  // output: 2 is greater than 3: false