const math = require('./math');
const string = require('./string');
const date = require('./date');
const utility = require('./utility');

console.log('=== Aplikasi Node.js dengan Modularisasi ===');

const sum = math.add(10, 5);
const difference = math.subtract(10, 5);
console.log(`Penjumlahan 10 + 5 = ${sum}`);
console.log(`Pengurangan 10 - 5 = ${difference}`);


const reversed = string.reverse('Hello World');
const upper = string.toUpperCase('hello world');
console.log(`String dibalik: ${reversed}`);
console.log(`String uppercase: ${upper}`);

const currentDate = date.getCurrentDate();
const dayOfWeek = date.getDayOfWeek();
console.log(`Tanggal hari ini: ${currentDate}`);
console.log(`Hari ini adalah: ${dayOfWeek}`);

const randomNum = utility.randomNumber();
const isEvenCheck = utility.isEven(randomNum);
console.log(`Angka acak: ${randomNum}`);
console.log(`Apakah genap? ${isEvenCheck ? 'Ya' : 'Tidak'}`);

console.log('=== Aplikasi selesai ===');