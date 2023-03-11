let cumle = 'Aşk bu dünyadaki en iyi şeydir. Bazıları aşkını buldu ve bazıları hala aşkını arıyor.'
console.log(cumle.match(/aşk/gi).length)

console.log('Bir cümleyi çünkü ile bitiremezsiniz çünkü çünkü bir bağlaçtır'.match(/çünkü/gi).length)

let sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

sentence = sentence.replace(/%/gi,"")
sentence = sentence.replace(/@/gi,"")
sentence = sentence.replace(/#/gi,"")
sentence = sentence.replace(/$/gi,"")
sentence = sentence.replace(/&/gi,"")
sentence = sentence.replace(/;/gi,"")
sentence = sentence.replace(/!/gi,"")
sentence = sentence.replace(/$/gi,"")
console.log(sentence)

let maas = 'Aylık maaşından 5000 euro, yıllık 10000 euro ikramiye, ayda 15000 euro online kurstan kazanıyor.'.match(/\d+/g)
let gelir = parseInt(maas[0]) * 12 + parseInt(maas[1]) + parseInt(maas[2]) * 12
console.log("Yıllık gelir: " + gelir)