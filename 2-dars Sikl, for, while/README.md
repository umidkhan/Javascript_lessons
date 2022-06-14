```js

Biz tez-tez harakatlarni takrorlashimiz kerak.

Masalan, royxatdagi tovarlarni ketma-ket chiqarish yoki 1 dan 10 gacha bolgan har bir raqam uchun bir xil kodni ishlatish.

Looplar bir xil kodni bir necha marta takrorlash usulidir.

while sintaksisi
Loop quyidagi while sintaksisga ega:

while (condition) {
  // code
  // "halqa tanasi" deb ataladi
}
Shart true bolsa-da, loop tanasidan kod bajariladi

Masalan, pastdagi sikl iwhile ni chiqaradi i < 3:

let i = 0;
while (i < 3) { // 0, 
  alert( i );
  i++;
}

Loop tanasining bitta bajarilishi iteratsiya deb ataladi . Yuqoridagi misoldagi halqa uchta takrorlashni amalga oshiradi.

Agar i++yuqoridagi misolda etishmayotgan bolsa, loop (nazariy jihatdan) abadiy takrorlanadi. Amalda, brauzer bunday looplarni toxtatish usullarini taqdim etadi va server tomonidagi JavaScript-da biz jarayonni oldirishimiz mumkin.

Har qanday ifoda yoki ozgaruvchi shunchaki taqqoslash emas, balki loop sharti bolishi mumkin: shart baholanadi va tomonidan mantiqiy qiymatga aylantiriladi while.

Masalan, yozishning qisqaroq while (i != 0)usuli while (i):

let i = 3;
while (i) { // i 0 bo'lganda, shart noto'g'ri bo'ladi va loop to'xtaydi
  alert( i );
  i--;
}

Bir chiziqli tana uchun jingalak qavslar kerak emas
Agar pastadir tanasi bitta bayonotga ega bolsa, biz jingalak qavslarni otkazib yuborishimiz mumkin {…}:

let i = 3;
while (i) alert(i--);

do...while sintaksisi
Shartni tekshirish sintaksisi yordamida pastadir tanasi ostiga otkazilishi mumkin: do...while

do {
  // loop tanasi
} while (condition);
Loop avval tanani bajaradi, songra holatni tekshiradi va haqiqat bolsa ham, uni qayta-qayta bajaradi.

Masalan:

let i = 0;
do {
  alert( i );
  i++;
} while (i < 3);
Sintaksisning ushbu shakli faqat shartning to'g'ri bolishidan qatiy nazar, loop tanasi kamida bir marta bajarilishini xohlaganingizda ishlatilishi kerak. Odatda, boshqa shakl afzal: while(…) {…}.

for sintaksisi
forLoop murakkabroq, lekin ayni paytda eng kop ishlatiladigan halqadir .

Bu shunday korinadi:

for (begin; condition; step) {
  // ... loop tanasi ...
}
Keling, ushbu qismlarning manosini misol orqali bilib olaylik. Quyidagi loop dan gacha (lekin shu jumladan emas) alert(i)uchun ishlaydi : i 0 3

for (let i = 0; i < 3; i++) { // 0, keyin 1, keyin 2 ni ko'rsatadi
  alert(i);
}

Keling, forbayonotni qisman korib chiqamiz:

qismi		
boshlanishi	let i = 0	Loopga kirgandan keyin bir marta bajariladi.
holat	i < 3	Har bir sikl iteratsiyasidan oldin tekshiriladi. Agar noto'g'ri bolsa, loop toxtaydi.
tanasi	alert(i)	Vaziyat haqiqat bolganda qayta-qayta ishlaydi.
qadam	i++	Har bir iteratsiyada tanadan keyin bajariladi.
Umumiy loop algoritmi quyidagicha ishlaydi:

Run begin
→ (agar vaziyat → tanani yugurish va qadamni yugurish)
→ (agar vaziyat → tanani yugurish va qadamni yugurish)
→ (agar vaziyat → tanani yugurish va qadamni yugurish)
→ ...
Yani, beginbir marta bajariladi va keyin takrorlanadi: har bir conditionsinovdan keyin bodyva stepbajariladi.

Agar siz halqalarni yangi bolsangiz, bu misolga qaytish va qog'oz varag'ida bosqichma-bosqich qanday ishlashini ko'rsatishga yordam beradi.

Bizning holatimizda aynan nima sodir bo'ladi:

// for (let i = 0; i < 3; i++) alert(i)

// ishga tushirish
let i = 0
// agar shart → tanani ishga tushiring va qadamni bajaring
if (i < 3) { alert(i); i++ }
// agar shart → tanani ishga tushiring va qadamni bajaring
if (i < 3) { alert(i); i++ }
// agar shart → tanani ishga tushiring va qadamni bajaring
if (i < 3) { alert(i); i++ }
// ...tugatish kerak, chunki endi i == 3

Inline o'zgaruvchilar deklaratsiyasi
Bu erda "hisoblagich" o'zgaruvchisi ito'g'ridan-to'g'ri loopda e'lon qilinadi. Bu "inline" o'zgaruvchilar deklaratsiyasi deb ataladi. Bunday o'zgaruvchilar faqat loop ichida ko'rinadi.

for (let i = 0; i < 3; i++) {
  alert(i); // 0, 1, 2
}
alert(i); // xato, bunday o'zgaruvchi yo'q
O'zgaruvchini aniqlash o'rniga biz mavjudidan foydalanishimiz mumkin:

let i = 0;

for (i = 0; i < 3; i++) { //mavjud o'zgaruvchidan foydalaning
  alert(i); // 0, 1, 2
}

alert(i); // 3, ko'rinadigan, chunki loopdan tashqarida elon qilingan
Qismlarni o'tkazib yuborish
Har qanday qismini foro'tkazib yuborish mumkin.

Misol uchun, beginagar loop boshlanishida hech narsa qilish kerak bo'lmasa, o'tkazib yuborishimiz mumkin.

Bu yerdagi kabi:

let i = 0; // biz allaqachon elon qildik va tayinladik

for (; i < 3; i++) { // "boshlash" kerak emas
  alert( i ); // 0, 1, 2
}
Shuningdek, biz qismni olib tashlashimiz mumkin step:

let i = 0;

for (; i < 3;) {
  alert( i++ );
}
Bu pastadirni bilan bir xil qiladi while (i < 3).

Biz cheksiz pastadir yaratib, aslida hamma narsani olib tashlashimiz mumkin:

for (;;) {
  // cheksiz takrorlanadi
}
E'tibor bering, ikkita nuqta- forvergul ;bo'lishi kerak. Aks holda, sintaksis xatosi bo'ladi.

                      Breaking the loop (loopni to'xtatish)
Odatda, loop noto'g'ri holatga kelganda chiqadi.

Lekin biz istalgan vaqtda maxsus breakdirektiva yordamida chiqishni majburlashimiz mumkin.

Misol uchun, quyidagi loop foydalanuvchidan raqamlar qatorini so'raydi, hech qanday raqam kiritilmaganda "buziladi":

let sum = 0;

while (true) {

  let value = +prompt("Enter a number", '');

  if (!value) break; // (*)

  sum += value;

}
alert( 'Sum: ' + sum );
Agar foydalanuvchi bo'sh qatorga kirsa yoki kiritishni bekor qilsa, breakdirektiv satrda faollashadi . (*)U loopni zudlik bilan to'xtatadi, boshqaruvni loopdan keyingi birinchi qatorga o'tkazadi. Ya'ni, alert.

"Cheksiz halqa + break kerak bo'lganda" kombinatsiyasi pastadir holatini halqaning boshida yoki oxirida emas, balki uning o'rtasida yoki hatto tanasining bir nechta joylarida tekshirish kerak bo'lgan holatlar uchun juda mos keladi.

                  Keyingi iteretsiyaga o'ting

Direktiv ning continue"engilroq versiyasi" dir break. Bu butun loop to'xtatmaydi. Buning o'rniga, u joriy iteratsiyani to'xtatadi va loop yangisini boshlashga majbur qiladi (agar shart imkon bersa).

Agar joriy iteratsiyani tugatib, keyingisiga o‘tmoqchi bo‘lsak, undan foydalanishimiz mumkin.

Quyidagi loop continuefaqat toq qiymatlarni chiqarish uchun ishlatiladi:

for (let i = 0; i < 10; i++) {

  // if true, skip the remaining part of the body
  if (i % 2 == 0) continue;

  alert(i); // 1, then 3, 5, 7, 9
}
ning juft qiymatlari iuchun continuedirektiv tanani bajarishni to'xtatadi va boshqaruvni keyingi iteratsiyaga o'tkazadi for(keyingi raqam bilan). Shunday qilib alert, faqat g'alati qiymatlar uchun chaqiriladi.
```