``` js

Ammo ko'pincha biz buyurtma qilingan to'plamga muhtojmiz , bu erda bizda 1-, 2-, 3-element va boshqalar mavjud. Masalan, bizga biror narsa ro'yxatini saqlash uchun kerak: foydalanuvchilar, tovarlar, HTML elementlari va boshqalar.

Bu yerda obyektdan foydalanish qulay emas, chunki u elementlar tartibini boshqarish usullarini taqdim etmaydi. Biz yangi xususiyatni mavjudlari “orasiga” kirita olmaymiz. Ob'ektlar shunchaki bunday foydalanish uchun mo'ljallanmagan.

ArrayBuyurtma qilingan to'plamlarni saqlash uchun maxsus ma'lumotlar tuzilmasi mavjud .

Deklaratsiya
Bo'sh massiv yaratish uchun ikkita sintaksis mavjud:

let arr = new Array();
let arr = [];
Deyarli har doim ikkinchi sintaksis ishlatiladi. Qavslar ichida dastlabki elementlarni taqdim etishimiz mumkin:

let fruits = ["Apple", "Orange", "Plum"];
Massiv elementlari noldan boshlab raqamlangan.

Biz elementni kvadrat qavs ichida raqami bo'yicha olishimiz mumkin:

let fruits = ["Apple", "Orange", "Plum"];

alert( fruits[0] ); // Apple
alert( fruits[1] ); // Orange
alert( fruits[2] ); // Plum
Biz elementni almashtirishimiz mumkin:

fruits[2] = 'Pear'; // now ["Apple", "Orange", "Pear"]
…Yoki massivga yangisini qo‘shing:

fruits[3] = 'Lemon'; // now ["Apple", "Orange", "Pear", "Lemon"]
Massivdagi elementlarning umumiy soni uning length:

let fruits = ["Apple", "Orange", "Plum"];

alert( fruits.length ); // 3
alertBiz butun massivni ko'rsatish uchun ham foydalanishimiz mumkin .

let fruits = ["Apple", "Orange", "Plum"];

alert( fruits ); // Apple,Orange,Plum
Massiv har qanday turdagi elementlarni saqlashi mumkin.

Masalan:

// mix of values
let arr = [ 'Apple', { name: 'John' }, true, function() { alert('hello'); } ];

// get the object at index 1 and then show its name
alert( arr[1].name ); // John

// get the function at index 3 and run it
arr[3](); // hello
Keyingi vergul
Massiv, xuddi ob'ekt kabi, vergul bilan tugashi mumkin:

let fruits = [
  "Apple",
  "Orange",
  "Plum",
];
“Soʻnggi vergul” uslubi elementlarni kiritish/olib tashlashni osonlashtiradi, chunki barcha qatorlar bir xil boʻladi.

Oxirgi elementlarni "at" bilan oling
Yaqinda qo'shilgan
Bu tilga yaqinda kiritilgan. Eski brauzerlar uchun polifill kerak bo'lishi mumkin .
Aytaylik, biz massivning oxirgi elementini xohlaymiz.

Ba'zi dasturlash tillari xuddi shu maqsadda salbiy indekslardan foydalanishga imkon beradi, masalan fruits[-1].

Garchi JavaScript-da u ishlamaydi. Natija shunday bo'ladi undefined, chunki kvadrat qavs ichidagi indeks to'liq ma'noda ko'rib chiqiladi.

Biz oxirgi element indeksini aniq hisoblashimiz va keyin unga kirishimiz mumkin: fruits[fruits.length - 1].

let fruits = ["Apple", "Orange", "Plum"];

alert( fruits[fruits.length-1] ); // Plum
Biroz noqulay, shunday emasmi? O'zgaruvchi nomini ikki marta yozishimiz kerak.

Yaxshiyamki, qisqaroq sintaksis mavjud: fruits.at(-1):

let fruits = ["Apple", "Orange", "Plum"];

// same as fruits[fruits.length-1]
alert( fruits.at(-1) ); // Plum
Boshqacha aytganda arr.at(i),:

bilan aynan bir xil bo'ladi arr[i], agar i >= 0.
ning manfiy qiymatlari iuchun massiv oxiridan orqaga qadam qo'yadi.
Usullari pop/push, shift/ochish
Navbat massivning eng keng tarqalgan qo'llanilishidan biridir. Kompyuter fanida bu ikkita operatsiyani qo'llab-quvvatlaydigan tartiblangan elementlar to'plamini anglatadi:

pushoxiriga element qo'shadi.
shiftboshidan elementni oling, navbatni oldinga siljiting, shunda 2-element 1-chi bo'ladi.

Massivlar ikkala operatsiyani ham qo'llab-quvvatlaydi.

Amalda bizga juda tez-tez kerak bo'ladi. Masalan, ekranda ko'rsatilishi kerak bo'lgan xabarlar navbati.

Massivlar uchun yana bir foydalanish holati mavjud - stack deb nomlangan ma'lumotlar strukturasi .

U ikkita operatsiyani qo'llab-quvvatlaydi:

pushoxiriga element qo'shadi.
popelementni oxiridan oladi.
Shunday qilib, yangi elementlar har doim "oxiridan" qo'shiladi yoki olinadi.

Stack odatda kartalar to'plami sifatida tasvirlanadi: yangi kartalar tepaga qo'shiladi yoki yuqoridan olinadi:


Steklar uchun so'nggi bosilgan element birinchi bo'lib olinadi, bu LIFO (Last-In-First-Out) printsipi deb ham ataladi. Navbatlar uchun bizda FIFO (First-In-First-Out) mavjud.

JavaScript-dagi massivlar ham navbat, ham stek sifatida ishlashi mumkin. Ular sizga elementlarni boshidan yoki oxirigacha qo'shish/o'chirish imkonini beradi.

Kompyuter fanida bunga imkon beradigan ma'lumotlar strukturasi deque deb ataladi .

Massiv oxiri bilan ishlaydigan usullar:

pop
Massivning oxirgi elementini chiqaradi va uni qaytaradi:

let fruits = ["Apple", "Orange", "Pear"];

alert( fruits.pop() ); // remove "Pear" and alert it

alert( fruits ); // Apple, Orange
Ikkala fruits.pop()va fruits.at(-1)massivning oxirgi elementini qaytaradi, lekin fruits.pop()uni olib tashlash orqali massivni o'zgartiradi.

push
Elementni massiv oxiriga qo'shing:

let fruits = ["Apple", "Orange"];

fruits.push("Pear");

alert( fruits ); // Apple, Orange, Pear
Qo'ng'iroq fruits.push(...)ga teng fruits[fruits.length] = ....

Massiv boshi bilan ishlaydigan usullar:

shift
Massivning birinchi elementini chiqaradi va uni qaytaradi:

let fruits = ["Apple", "Orange", "Pear"];

alert( fruits.shift() ); // remove Apple and alert it

alert( fruits ); // Orange, Pear
unshift
Elementni massiv boshiga qo'shing:

let fruits = ["Orange", "Pear"];

fruits.unshift('Apple');

alert( fruits ); // Apple, Orange, Pear
Usullar pushva unshiftbir vaqtning o'zida bir nechta elementlarni qo'shishi mumkin:

let fruits = ["Apple"];

fruits.push("Orange", "Peach");
fruits.unshift("Pineapple", "Lemon");

// ["Pineapple", "Lemon", "Apple", "Orange", "Peach"]
alert( fruits );
Ichki qismlar
Massiv - bu ob'ektning maxsus turi. Xususiyatga kirish uchun ishlatiladigan kvadrat qavslar arr[0]aslida ob'ekt sintaksisidan kelib chiqadi. obj[key]Bu ob'ekt qayerda ekanligi bilan bir xil bo'lib , arrraqamlar kalit sifatida ishlatiladi.

lengthUlar buyurtma qilingan ma'lumotlar to'plamlari va mulk bilan ishlashning maxsus usullarini ta'minlovchi ob'ektlarni kengaytiradilar . Lekin asosiyda u hali ham ob'ektdir.

Esingizda bo'lsin, JavaScript-da faqat sakkizta asosiy ma'lumotlar turi mavjud ( qo'shimcha ma'lumot uchun Ma'lumotlar turlari bo'limiga qarang). Massiv ob'ektdir va shuning uchun o'zini ob'ekt kabi tutadi.

Masalan, u havola orqali ko'chiriladi:

let fruits = ["Banana"]

let arr = fruits; // copy by reference (two variables reference the same array)

alert( arr === fruits ); // true

arr.push("Pear"); // modify the array by reference

alert( fruits ); // Banana, Pear - 2 items now
…Ammo massivlarni chindan ham o‘ziga xos qiladigan narsa ularning ichki tasviridir. Dvigatel ushbu bobdagi rasmlarda ko'rsatilganidek, o'z elementlarini ketma-ket xotira maydonida saqlashga harakat qiladi va massivlar juda tez ishlashi uchun boshqa optimallashtirishlar ham mavjud.

Ammo agar biz massiv bilan “buyurtma qilingan to‘plam” kabi ishlashni to‘xtatsak va u bilan oddiy ob’ektdek ishlay boshlasak, ularning barchasi buziladi.

Masalan, texnik jihatdan biz buni qila olamiz:

let fruits = []; // make an array

fruits[99999] = 5; // assign a property with the index far greater than its length

fruits.age = 25; // create a property with an arbitrary name
Bu mumkin, chunki massivlar ularning bazasida joylashgan ob'ektlardir. Biz ularga har qanday xususiyatni qo'shishimiz mumkin.

Ammo vosita biz oddiy ob'ekt bilan massiv bilan ishlayotganimizni ko'radi. Massivga xos optimallashtirishlar bunday holatlar uchun mos emas va o'chiriladi, ularning afzalliklari yo'qoladi.

Massivdan noto'g'ri foydalanish usullari:

kabi raqamli bo'lmagan xususiyatni qo'shing arr.test = 5.
Teshiklarni qiling, masalan: qo'shing arr[0]va keyin arr[1000](va ular orasida hech narsa yo'q).
Massivni teskari tartibda to'ldiring, kabi arr[1000]va arr[999]hokazo.
Iltimos, massivlarni buyurtma qilingan ma'lumotlar bilan ishlash uchun maxsus tuzilmalar sifatida tasavvur qiling . Buning uchun ular maxsus usullarni taklif qilishadi. Massivlar ketma-ket tartiblangan ma'lumotlar bilan ishlash uchun JavaScript dvigatellarida ehtiyotkorlik bilan sozlangan, ularni shu tarzda foydalaning. Va agar sizga ixtiyoriy kalitlar kerak bo'lsa, sizga oddiy ob'ekt kerak bo'lish ehtimoli yuqori {}.

Ishlash
Usullar push/poptez ishlaydi, lekin shift/unshiftsekin.


Nima uchun massivning boshiga qaraganda oxiri bilan ishlash tezroq? Keling, ijro paytida nima sodir bo'lishini ko'rib chiqaylik:

fruits.shift(); // take 1 element from the start
Indeksli elementni olish va olib tashlashning o'zi etarli emas 0. Boshqa elementlarni ham qayta raqamlash kerak.

Operatsiya shift3 narsani bajarishi kerak:

Indeks bilan elementni olib tashlang 0.
Barcha elementlarni chapga siljiting, ularni indeksdan 1ga 0, dan 2ga 1va hokazo.
lengthMulkni yangilang .

Massivdagi elementlar qancha ko'p bo'lsa, ularni ko'chirish uchun ko'proq vaqt, xotirada ko'proq operatsiyalar.

Shunga o'xshash narsa bilan sodir bo'ladi unshift: massivning boshiga element qo'shish uchun biz avval mavjud elementlarni indekslarini oshirib, o'ngga siljitishimiz kerak.

Va nima bilan push/pop? Ular hech narsani siljitishlari shart emas. Elementni oxiridan chiqarish uchun popusul indeksni tozalaydi va qisqartiradi length.

Operatsiya uchun harakatlar pop:

fruits.pop(); // take 1 element from the end

Usul pophech narsani ko'chirishga hojat yo'q, chunki boshqa elementlar o'z indekslarini saqlaydi. Shuning uchun u juda tez.

pushUsul bilan o'xshash narsa .

Looplar
Massiv elementlarini aylanishning eng qadimgi usullaridan biri bu forindekslar ustidagi tsikldir:

let arr = ["Apple", "Orange", "Pear"];

for (let i = 0; i < arr.length; i++) {
  alert( arr[i] );
}
Ammo massivlar uchun tsiklning yana bir shakli mavjud for..of:

let fruits = ["Apple", "Orange", "Plum"];

// iterates over array elements
for (let fruit of fruits) {
  alert( fruit );
}
Joriy for..ofelementning raqamiga ruxsat bermaydi, faqat uning qiymati, lekin ko'p hollarda bu etarli. Va u qisqaroq.

Texnik jihatdan, massivlar ob'ektlar bo'lganligi sababli, undan foydalanish ham mumkin for..in:

let arr = ["Apple", "Orange", "Pear"];

for (let key in arr) {
  alert( arr[key] ); // Apple, Orange, Pear
}
Lekin bu aslida yomon fikr. U bilan mumkin bo'lgan muammolar mavjud:

Loop faqat sonli xususiyatlarni emas, balki barcha xususiyatlarnifor..in takrorlaydi .

Brauzerda va boshqa muhitlarda massivga o'xshash "massivga o'xshash" ob'ektlar mavjud . Ya'ni, ular lengthxossalarga ega va indekslar, lekin ular odatda bizga kerak bo'lmagan boshqa raqamli bo'lmagan xususiyatlar va usullarga ham ega bo'lishi mumkin. for..inLoop ularni ro'yxatga oladi . Shunday qilib, agar biz massivga o'xshash ob'ektlar bilan ishlashimiz kerak bo'lsa, unda bu "qo'shimcha" xususiyatlar muammoga aylanishi mumkin.

for..inLoop massivlar uchun emas, balki umumiy ob'ektlar uchun optimallashtirilgan va shuning uchun 10-100 marta sekinroq . Albatta, bu hali ham juda tez. Tezlik faqat to'siqlarda muhim bo'lishi mumkin. Ammo baribir biz farqni bilishimiz kerak.

Umuman olganda, biz for..in massivlar uchun foydalanmasligimiz kerak.

```