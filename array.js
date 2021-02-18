let numbers =[20,30,40,50,60,70];

//Carilah element array terkecil dan terbesar
const maximal = Math.max(...numbers);
let minimum = numbers.reduce(function(a,b){
    return Math.min(a,b);
}) 
console.log(`element array terbesar ${maximal}`);
console.log(`element array terkecil ${minimum} \n`);

//Urutkan array secara descending
 let urutdescending = numbers.sort(function(a,b){
     return b - a;
 });

 console.log(`Urutkan Array Secara descending ${urutdescending} \n`)

 //Cari tanggal hari ini,tanggal kemarin dan tanggal besok dengan format (D-M-YYYY)

 const today = new Date();

 const yesterday = new Date(today);
 yesterday.setDate(yesterday.getDate() - 1);
 
 const tomorrow = new Date(today);
 tomorrow.setDate(tomorrow.getDate() + 1);
 
 console.log('kemarin: ', yesterday.toDateString());
 // => Yesterday:  Tue May 26 2020
 
 console.log('hari Ini: ', today.toDateString());
 // => Today:  Wed May 27 2020
 
 console.log('Besok: ', tomorrow.toDateString());
 // => Tomorrow:  Thu May 28 2020

 //Array Numbers ubah menjadi format String
 let ubahstring = numbers.toString();

 console.log(`\nUbah menjadi format string ${ubahstring}`);
