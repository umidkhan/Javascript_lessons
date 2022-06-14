``` js

JavaScript bizga ibtidoiylar (satrlar, raqamlar va boshqalar) bilan xuddi ob'ektlar kabi ishlash imkonini beradi. Ular, shuningdek, qo'ng'iroq qilish usullarini ham taqdim etadilar. Biz ularni tez orada o'rganamiz, lekin avval bu qanday ishlashini ko'rib chiqamiz, chunki, albatta, ibtidoiylar ob'ektlar emas (va bu erda biz buni yanada aniqroq qilamiz).

Keling, ibtidoiy va ob'ektlar o'rtasidagi asosiy farqlarni ko'rib chiqaylik.

Primitiv

Primitiv turdagi qiymat.
7 ta ibtidoiy tip mavjud : string, number, bigint, boolean, symbolva null.undefined
Ob'ekt

Bir nechta qiymatlarni xususiyat sifatida saqlashga qodir.
bilan yaratilishi mumkin {}, masalan: {name: "John", age: 30}. JavaScript-da boshqa turdagi ob'ektlar mavjud: funktsiyalar, masalan, ob'ektlardir.
Ob'ektlarning eng yaxshi jihatlaridan biri shundaki, biz funktsiyani uning xususiyatlaridan biri sifatida saqlashimiz mumkin.

let john = {
  name: "John",
  sayHi: function() {
    alert("Hi buddy!");
  }
};

john.sayHi(); // Hi buddy!
Shunday qilib, biz johnusul bilan ob'ekt yaratdik sayHi.

Ko'pgina o'rnatilgan ob'ektlar allaqachon mavjud, masalan, sanalar, xatolar, HTML elementlari va boshqalar bilan ishlaydiganlar. Ular turli xususiyat va usullarga ega.

Biroq, bu xususiyatlar qimmatga tushadi!

Ob'ektlar primitivlarga qaraganda "og'irroq". Ular ichki mexanizmlarni qo'llab-quvvatlash uchun qo'shimcha resurslarni talab qiladi.

Ob'ekt sifatida primitiv
Mana JavaScript yaratuvchisi duch kelgan paradoks:

Satr yoki raqam kabi ibtidoiy bilan qilish kerak bo'lgan ko'p narsalar mavjud. Usullar yordamida ularga kirish juda yaxshi bo'lardi.
Primitivlar imkon qadar tez va engil bo'lishi kerak.
Yechim biroz noqulay ko'rinadi, lekin bu erda:

Primitivlar hali ham ibtidoiy. Yagona qiymat, xohlaganingizcha.
Til qatorlar, raqamlar, mantiqiy va belgilarning usullari va xususiyatlariga kirish imkonini beradi.
Buning ishlashi uchun qo'shimcha funktsiyalarni ta'minlaydigan maxsus "ob'ektni o'rash" yaratiladi va keyin yo'q qilinadi.
"Ob'ektni o'rash" har bir ibtidoiy tur uchun har xil bo'lib, ular deyiladi: String, Number, Boolean, Symbolva BigInt. Shunday qilib, ular turli xil usullar to'plamini taqdim etadilar.

Misol uchun, str.toUpperCase() string usuli mavjud bo'lib, u katta harf bilan yozilgan ni qaytaradi str.

Bu qanday ishlaydi:

let str = "Hello";

alert( str.toUpperCase() ); // HELLO
Oddiy, to'g'rimi? Mana, aslida nima sodir bo'ladi str.toUpperCase():

Satr strprimitivdir. Shunday qilib, uning xususiyatiga kirish paytida, qatorning qiymatini biladigan va kabi foydali usullarga ega bo'lgan maxsus ob'ekt yaratiladi toUpperCase().
Bu usul ishlaydi va yangi satrni qaytaradi (ko'rsatilgan alert).
Maxsus ob'ekt yo'q qilinadi, ibtidoiy stryolg'iz qoladi.
Shunday qilib, ibtidoiy usullarni taqdim etishi mumkin, ammo ular hali ham engil bo'lib qoladilar.

JavaScript mexanizmi bu jarayonni yuqori darajada optimallashtiradi. U hatto qo'shimcha ob'ektni yaratishni ham o'tkazib yuborishi mumkin. Lekin u baribir spetsifikatsiyaga rioya qilishi va xuddi uni yaratgandek harakat qilishi kerak.

Raqamning o'ziga xos usullari bor, masalan, toFixed(n) raqamni berilgan aniqlikka yaxlitlaydi:

let n = 1.23456;

alert( n.toFixed(2) ); // 1.23
Biz aniqroq usullarni Raqamlar va Satrlar bo'limlarida ko'rib chiqamiz .

Konstruktorlar String/Number/Booleanfaqat ichki foydalanish uchun
new Number(1)Java kabi ba'zi tillar bizga yoki kabi sintaksisdan foydalangan holda ibtidoiylar uchun "o'rash ob'ektlari" ni aniq yaratishga imkon beradi new Boolean(false).

JavaScript-da bu tarixiy sabablarga ko'ra ham mumkin, lekin juda tavsiya etilmaydi . Bir necha joyda ishlar aqldan ozadi.

Masalan:

alert( typeof 0 ); // "number"

alert( typeof new Number(0) ); // "object"!
Ob'ektlar har doim ichida haqiqatdir if, shuning uchun bu erda ogohlantirish paydo bo'ladi:

let zero = new Number(0);

if (zero) { // zero is true, because it's an object
  alert( "zero is truthy!?!" );
}
Boshqa tomondan, bir xil funktsiyalarsiz String/Number/Booleanfoydalanish newjuda yaxshi va foydali narsa. Ular qiymatni mos keladigan turga o'zgartiradilar: satrga, raqamga yoki mantiqiy (ibtidoiy).

Masalan, bu to'liq amal qiladi:

let num = Number("123"); // convert a string to number
null/undefined ning usullari yo'q
Maxsus primitivlar nullva undefinedistisnolardir. Ularda mos keladigan "o'rash moslamalari" yo'q va hech qanday usullarni taqdim etmaydi. Qaysidir ma'noda, ular "eng ibtidoiy".

Bunday qiymatdagi xususiyatga kirishga urinish xatoga olib keladi:

alert(null.test); // error


Ob'ektlar kalitli qiymatlar to'plamini saqlashga imkon beradi. Juda soz.

```