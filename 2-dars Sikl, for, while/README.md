```js

Biz tez-tez harakatlarni takrorlashimiz kerak.

Masalan, royxatdagi tovarlarni ketma-ket chiqarish yoki 1 dan 10 gacha bolgan har bir raqam uchun bir xil kodni ishlatish.

Looplar bir xil kodni bir necha marta takrorlash usulidir.

while sintaksisi
Loop quyidagi while sintaksisga ega:

while (condition) {
  // code
  // so-called "loop body"
}
Shart true bolsa-da, loop tanasidan kod bajariladi

Masalan, pastdagi sikl iwhile ni chiqaradi i < 3:

let i = 0;
while (i < 3) { // shows 0, then 1, then 2
  alert( i );
  i++;
}

Loop tanasining bitta bajarilishi iteratsiya deb ataladi . Yuqoridagi misoldagi halqa uchta takrorlashni amalga oshiradi.

Agar i++yuqoridagi misolda etishmayotgan bolsa, loop (nazariy jihatdan) abadiy takrorlanadi. Amalda, brauzer bunday looplarni toxtatish usullarini taqdim etadi va server tomonidagi JavaScript-da biz jarayonni oldirishimiz mumkin.

Har qanday ifoda yoki ozgaruvchi shunchaki taqqoslash emas, balki loop sharti bolishi mumkin: shart baholanadi va tomonidan mantiqiy qiymatga aylantiriladi while.

Masalan, yozishning qisqaroq while (i != 0)usuli while (i):

let i = 3;
while (i) { // when i becomes 0, the condition becomes falsy, and the loop stops
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
  // loop body
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
  // ... loop body ...
}
Keling, ushbu qismlarning manosini misol orqali bilib olaylik. Quyidagi tsikl dan gacha (lekin shu jumladan emas) alert(i)uchun ishlaydi : i 0 3

for (let i = 0; i < 3; i++) { // shows 0, then 1, then 2
  alert(i);
}

Keling, forbayonotni qisman korib chiqamiz:

qismi		
boshlanishi	let i = 0	Loopga kirgandan keyin bir marta bajariladi.
holat	i < 3	Har bir sikl iteratsiyasidan oldin tekshiriladi. Agar noto'g'ri bolsa, tsikl toxtaydi.
tanasi	alert(i)	Vaziyat haqiqat bolganda qayta-qayta ishlaydi.
qadam	i++	Har bir iteratsiyada tanadan keyin bajariladi.
Umumiy tsikl algoritmi quyidagicha ishlaydi:

Run begin
→ (if condition → run body and run step)
→ (if condition → run body and run step)
→ (if condition → run body and run step)
→ ...
Yani, beginbir marta bajariladi va keyin takrorlanadi: har bir conditionsinovdan keyin bodyva stepbajariladi.

Agar siz halqalarni yangi bolsangiz, bu misolga qaytish va qog'oz varag'ida bosqichma-bosqich qanday ishlashini ko'rsatishga yordam beradi.

Bizning holatimizda aynan nima sodir bo'ladi:

// for (let i = 0; i < 3; i++) alert(i)

// run begin
let i = 0
// if condition → run body and run step
if (i < 3) { alert(i); i++ }
// if condition → run body and run step
if (i < 3) { alert(i); i++ }
// if condition → run body and run step
if (i < 3) { alert(i); i++ }
// ...finish, because now i == 3

Inline o'zgaruvchilar deklaratsiyasi
Bu erda "hisoblagich" o'zgaruvchisi ito'g'ridan-to'g'ri tsiklda e'lon qilinadi. Bu "inline" o'zgaruvchilar deklaratsiyasi deb ataladi. Bunday o'zgaruvchilar faqat tsikl ichida ko'rinadi.

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

Misol uchun, beginagar tsikl boshlanishida hech narsa qilish kerak bo'lmasa, o'tkazib yuborishimiz mumkin.

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


```