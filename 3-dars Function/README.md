```js

Ko'pincha biz skriptning ko'p joylarida shunga o'xshash harakatni bajarishimiz kerak.

Misol uchun, tashrif buyuruvchi tizimga kirganda, tizimdan chiqqanda va ehtimol boshqa joyda yaxshi ko'rinadigan xabarni ko'rsatishimiz kerak.

Funktsiyalar dasturning asosiy "qurilish bloklari" dir. Ular kodni takrorlanmasdan ko'p marta chaqirish imkonini beradi.

Biz allaqachon alert(message), prompt(message, default)va kabi o'rnatilgan funksiyalarning misollarini ko'rganmiz confirm(question). Ammo biz o'zimizning funktsiyalarimizni ham yaratishimiz mumkin.

Funktsiya deklaratsiyasi
Funktsiyani yaratish uchun biz funktsiya deklaratsiyasidan foydalanishimiz mumkin .

Bu shunday ko'rinadi:

function showMessage() {
  alert( 'Hello everyone!' );
}
functionKalit so‘z avval ketadi, so‘ngra funksiya nomiga o‘tadi, so‘ngra qavslar orasidagi parametrlar ro‘yxati (vergul bilan ajratilgan, yuqoridagi misolda bo‘sh, misollarni keyinroq ko‘ramiz) va nihoyat funksiya kodi, shuningdek, “ funktsiya tanasi”, jingalak qavslar orasida.

function name(parameter1, parameter2, ... parameterN) {
  ...body...
}
Bizning yangi funksiyamiz uning nomi bilan chaqirilishi mumkin: showMessage().

Masalan:

function showMessage() {
  alert( 'Hello everyone!' );
}

showMessage();
showMessage();
Chaqiruv showMessage()funksiya kodini bajaradi. Bu erda biz xabarni ikki marta ko'ramiz.

Ushbu misol funktsiyalarning asosiy maqsadlaridan birini aniq ko'rsatib beradi: kodning takrorlanishiga yo'l qo'ymaslik.

Agar xabarni yoki uning ko'rinishini o'zgartirishimiz kerak bo'lsa, kodni bir joyda o'zgartirish kifoya qiladi: uni chiqaradigan funktsiya.

Mahalliy o'zgaruvchilar
Funktsiya ichida e'lon qilingan o'zgaruvchi faqat shu funktsiya ichida ko'rinadi.

Masalan:

function showMessage() {
  let message = "Hello, I'm JavaScript!"; // local variable

  alert( message );
}

showMessage(); // Hello, I'm JavaScript!

alert( message ); // <-- Error! The variable is local to the function
Tashqi o'zgaruvchilar
Funktsiya tashqi o'zgaruvchiga ham kirishi mumkin, masalan:

let userName = 'John';

function showMessage() {
  let message = 'Hello, ' + userName;
  alert(message);
}

showMessage(); // Hello, John
Funktsiya tashqi o'zgaruvchiga to'liq kirish huquqiga ega. Buni ham o'zgartirishi mumkin.

Masalan:

let userName = 'John';

function showMessage() {
  userName = "Bob"; // (1) changed the outer variable

  let message = 'Hello, ' + userName;
  alert(message);
}

alert( userName ); // John before the function call

showMessage();

alert( userName ); // Bob, the value was modified by the function
Tashqi o'zgaruvchi faqat mahalliy bo'lmasa ishlatiladi.

Agar funktsiya ichida bir xil nomli o'zgaruvchi e'lon qilingan bo'lsa, u tashqi o'zgaruvchini soya qiladi. Masalan, quyidagi kodda funktsiya local dan foydalanadi userName. Tashqi ko'rinish e'tiborga olinmaydi:

let userName = 'John';

function showMessage() {
  let userName = "Bob"; // declare a local variable

  let message = 'Hello, ' + userName; // Bob
  alert(message);
}

// the function will create and use its own userName
showMessage();

alert( userName ); // John, unchanged, the function did not access the outer variable
Global o'zgaruvchilar
Yuqoridagi koddagi tashqi kabi har qanday funktsiyadan tashqarida e'lon qilingan o'zgaruvchilar globaluserName deyiladi .

Global o'zgaruvchilar har qanday funktsiyadan ko'rinadi (agar mahalliy aholi tomonidan soya qilinmasa).

Global o'zgaruvchilardan foydalanishni minimallashtirish yaxshi amaliyotdir. Zamonaviy kodda globallar kam yoki umuman yo'q. Aksariyat o'zgaruvchilar ularning funktsiyalarida joylashgan. Ba'zan ular loyiha darajasidagi ma'lumotlarni saqlash uchun foydali bo'lishi mumkin.

Parametrlar
Parametrlar yordamida funksiyalarga ixtiyoriy ma'lumotlarni o'tkazishimiz mumkin.

Quyidagi misolda funksiya ikkita parametrga ega: fromva text.

function showMessage(from, text) { // parameters: from, text
  alert(from + ': ' + text);
}

showMessage('Ann', 'Hello!'); // Ann: Hello! (*)
showMessage('Ann', "What's up?"); // Ann: What's up? (**)
Funktsiya va qatorlarida chaqirilganda (*), (**)berilgan qiymatlar mahalliy o'zgaruvchilarga fromva ga ko'chiriladi text. Keyin funksiya ulardan foydalanadi.

Yana bir misol: bizda o'zgaruvchi bor fromva uni funksiyaga o'tkazamiz. Iltimos, diqqat qiling: funktsiya o'zgaradi from, lekin o'zgarish tashqarida ko'rinmaydi, chunki funktsiya har doim qiymatning nusxasini oladi:

function showMessage(from, text) {

  from = '*' + from + '*'; // make "from" look nicer

  alert( from + ': ' + text );
}

let from = "Ann";

showMessage(from, "Hello"); // *Ann*: Hello

// the value of "from" is the same, the function modified a local copy
alert( from ); // Ann
Qiymat funktsiya parametri sifatida uzatilsa, u argument deb ham ataladi .

Boshqacha qilib aytganda, ushbu atamalarni to'g'ri ifodalash uchun:

Parametr - bu funksiya deklaratsiyasida qavslar ichida ko'rsatilgan o'zgaruvchidir (bu e'lon qilish muddati).
Argument bu funksiya chaqirilganda unga uzatiladigan qiymatdir (bu chaqiruv vaqti muddati).
Biz funksiyalarni parametrlarini sanab o'tamiz, keyin ularni o'tish argumentlari deb ataymiz.

Yuqoridagi misolda: "funktsiya showMessageikkita parametr bilan e'lon qilinadi, keyin ikkita argument bilan chaqiriladi: fromva "Hello"".

Standart qiymatlar
Agar funktsiya chaqirilsa, lekin argument taqdim etilmasa, mos keladigan qiymat bo'ladi undefined.

Masalan, yuqorida aytib o'tilgan funktsiyani showMessage(from, text)bitta argument bilan chaqirish mumkin:

showMessage("Ann");
Bu xato emas. Bunday qo'ng'iroq chiqadi "*Ann*: undefined". uchun qiymat texto'tkazilmasa, u ga aylanadi undefined.

Funktsiya deklaratsiyasida parametr uchun "standart" (agar o'tkazib yuborilmagan bo'lsa, foydalanish uchun) qiymatini quyidagicha belgilashimiz mumkin =:

function showMessage(from, text = "no text given") {
  alert( from + ": " + text );
}

showMessage("Ann"); // Ann: no text given
Endi textparametr o'tkazilmasa, u qiymatni oladi"no text given"

Mana "no text given"bu qator, lekin u murakkabroq ifoda bo'lishi mumkin, u faqat parametr etishmayotgan bo'lsa baholanadi va tayinlanadi. Shunday qilib, bu ham mumkin:

function showMessage(from, text = anotherFunction()) {
  // anotherFunction() only executed if no text given
  // its result becomes the value of text
}
Standart parametrlarni baholash
JavaScript-da funksiya har safar tegishli parametrsiz chaqirilganda standart parametr baholanadi.

Yuqoridagi misolda , agar parametr taqdim etilgan anotherFunction()bo'lsa, umuman chaqirilmaydi .text

Boshqa tomondan, u har safar textetishmayotganda mustaqil ravishda chaqiriladi.

Eski JavaScript kodidagi standart parametrlar
Bir necha yil oldin, JavaScript standart parametrlar uchun sintaksisni qo'llab-quvvatlamagan. Shuning uchun odamlar ularni aniqlashning boshqa usullaridan foydalanganlar.

Hozirgi kunda biz ularni eski skriptlarda uchratishimiz mumkin.

Masalan, aniq tekshirish undefined:

function showMessage(from, text) {
  if (text === undefined) {
    text = 'no text given';
  }

  alert( from + ": " + text );
}
…Yoki ||operator yordamida:

function showMessage(from, text) {
  // If the value of text is falsy, assign the default value
  // this assumes that text == "" is the same as no text at all
  text = text || 'no text given';
  ...
}
Muqobil standart parametrlar
Ba'zan parametrlar uchun standart qiymatlarni funktsiya deklaratsiyasida emas, balki keyingi bosqichda belgilash mantiqan to'g'ri keladi.

Funktsiyani bajarish jarayonida parametr berilgan yoki yo'qligini quyidagi bilan taqqoslash orqali tekshirishimiz mumkin undefined:

function showMessage(text) {
  // ...

  if (text === undefined) { // if the parameter is missing
    text = 'empty message';
  }

  alert(text);
}

showMessage(); // empty message
…Yoki ||operatordan foydalanishimiz mumkin:

function showMessage(text) {
  // if text is undefined or otherwise falsy, set it to 'empty'
  text = text || 'empty';
  ...
}
Zamonaviy JavaScript dvigatellari nullish birlashtiruvchi operatorni ?? qo'llab-quvvatlaydi , ko'pchilik noto'g'ri qiymatlar, masalan, 0"normal" deb hisoblanganda yaxshiroqdir:

function showCount(count) {
  // if count is undefined or null, show "unknown"
  alert(count ?? "unknown");
}

showCount(0); // 0
showCount(null); // unknown
showCount(); // unknown
Qiymatni qaytarish
Funktsiya natija sifatida qiymatni chaqiruvchi kodga qaytarishi mumkin.

Eng oddiy misol, ikkita qiymatni jamlaydigan funksiya bo'lishi mumkin:

function sum(a, b) {
  return a + b;
}

let result = sum(1, 2);
alert( result ); // 3
Direktiv returnfunktsiyaning istalgan joyida bo'lishi mumkin. Bajarish unga yetganda, funktsiya to'xtaydi va qiymat chaqiruvchi kodga qaytariladi ( resultyuqorida tayinlangan).

returnBitta funktsiyada ko'p holatlar bo'lishi mumkin . Masalan:

function checkAge(age) {
  if (age >= 18) {
    return true;
  } else {
    return confirm('Do you have permission from your parents?');
  }
}

let age = prompt('How old are you?', 18);

if ( checkAge(age) ) {
  alert( 'Access granted' );
} else {
  alert( 'Access denied' );
}
Qiymatsiz foydalanish returnmumkin. Bu funktsiyaning darhol chiqishiga olib keladi.

Masalan:

function showMovie(age) {
  if ( !checkAge(age) ) {
    return;
  }

  alert( "Showing you the movie" ); // (*)
  // ...
}
Yuqoridagi kodda, agar checkAge(age)qaytsa false, ga showMovieo'tmaydi alert.

Bo'sh returnyoki bo'lmagan funksiya qaytadiundefined
Agar funktsiya qiymatni qaytarmasa, u xuddi shunday qaytaradi undefined:

function doNothing() { /* empty */ }

alert( doNothing() === undefined ); // true
Bo'sh returnham xuddi shunday return undefined:

function doNothing() {
  return;
}

alert( doNothing() === undefined ); // true
returnHech qachon va qiymat orasiga yangi qator qo'shmang
dagi uzoq ifoda uchun returnuni alohida qatorga qo'yish jozibador bo'lishi mumkin, masalan:

return
 (some + long + expression + or + whatever * f(a) + f(b))
Bu ishlamaydi, chunki JavaScript dan keyin nuqta-vergulni oladi return. Bu xuddi shunday ishlaydi:

return;
 (some + long + expression + or + whatever * f(a) + f(b))
Shunday qilib, u samarali ravishda bo'sh qaytishga aylanadi.

Agar qaytarilgan ifodani bir nechta satrlar bo'ylab o'tishini xohlasak, uni xuddi shu qatordan boshlashimiz kerak return. Yoki hech bo'lmaganda ochilish qavslarini quyidagicha qo'ying:

return (
  some + long + expression
  + or +
  whatever * f(a) + f(b)
  )
Va u biz kutgandek ishlaydi.

Funktsiyani nomlash
Funktsiyalar - bu harakatlar. Shuning uchun ularning nomi odatda fe'ldir. U qisqa, iloji boricha aniq bo'lishi va funksiya nima qilayotganini tasvirlab berishi kerak, shunda kodni o'qiyotgan kishi funksiya nima qilayotgani haqida ko'rsatma oladi.

Harakatni noaniq tasvirlaydigan og'zaki prefiks bilan funktsiyani boshlash keng tarqalgan amaliyotdir. Prefikslarning ma'nosi bo'yicha jamoa ichida kelishuv bo'lishi kerak.

Masalan, bilan boshlanadigan funktsiyalar "show"odatda nimanidir ko'rsatadi.

Funktsiya… bilan boshlanadi

"get…"- qiymatni qaytarish,
"calc…"- biror narsani hisoblash,
"create…"- biror narsa yaratish,
"check…"- biror narsani tekshiring va mantiqiy qiymatni qaytaring va hokazo.
Bunday nomlarga misollar:

showMessage(..)     // shows a message
getAge(..)          // returns the age (gets it somehow)
calcSum(..)         // calculates a sum and returns the result
createForm(..)      // creates a form (and usually returns it)
checkPermission(..) // checks a permission, returns true/false
Prefikslar o'rnatilgan bo'lsa, funktsiya nomiga qarash uning qanday ishni bajarishini va qanday qiymatni qaytarishini tushunish imkonini beradi.

Bitta funktsiya - bitta harakat
Funktsiya o'z nomi bilan taklif qilingan narsani bajarishi kerak, boshqa emas.

Ikki mustaqil harakat odatda ikkita funktsiyaga loyiqdir, hatto ular odatda birgalikda chaqirilsa ham (bu holda biz bu ikkalasini chaqiradigan uchinchi funktsiyani yaratishimiz mumkin).

Ushbu qoidani buzishning bir nechta misollari:

getAge– yoshi bilan ko'rsatsa yomon bo'lardi alert(faqat olish kerak).
createForm- agar u hujjatni o'zgartirsa, unga shakl qo'shsa yomon bo'ladi (faqat uni yaratish va qaytarish kerak).
checkPermission- agar u xabarni ko'rsatsa yomon bo'lardi access granted/denied(faqat tekshirishni amalga oshirish va natijani qaytarish kerak).
Ushbu misollar prefikslarning umumiy ma'nolarini nazarda tutadi. Siz va sizning jamoangiz boshqa ma'nolar bo'yicha kelisha olasiz, lekin odatda ular unchalik farq qilmaydi. Qanday bo'lmasin, siz prefiks nimani anglatishini, prefiksli funktsiya nimani amalga oshirishi va nima qila olmasligini aniq tushunishingiz kerak. Barcha bir xil prefiksli funktsiyalar qoidalarga bo'ysunishi kerak. Va jamoa bilimlarni baham ko'rishi kerak.

Ultrashort funksiya nomlari
Juda tez -tez ishlatiladigan funktsiyalar ba'zan ultraqisqa nomlarga ega.

Masalan, jQuery ramkasi funksiyani belgilaydi $. Lodash kutubxonasi o'zining asosiy funktsiyasiga _ega .

Bu istisnolar. Odatda funktsiya nomlari ixcham va tavsiflovchi bo'lishi kerak.

Funktsiyalar == Sharhlar
Funktsiyalar qisqa bo'lishi va aniq bir ishni bajarishi kerak. Agar bu narsa katta bo'lsa, funktsiyani bir nechta kichikroq funktsiyalarga bo'lish bunga arziydi. Ba'zida bu qoidaga rioya qilish unchalik oson bo'lmasligi mumkin, lekin bu, albatta, yaxshi narsa.

Alohida funktsiyani sinab ko'rish va disk raskadrovka qilish oson emas - uning mavjudligi ajoyib izohdir!

Masalan, showPrimes(n)quyidagi ikkita funktsiyani solishtiring. Har biri ga qadar tub sonlarnin chiqaradi .

Birinchi variant yorliqdan foydalanadi:

function showPrimes(n) {
  nextPrime: for (let i = 2; i < n; i++) {

    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }

    alert( i ); // a prime
  }
}
Ikkinchi variant isPrime(n)asosiylikni tekshirish uchun qo'shimcha funktsiyadan foydalanadi:

function showPrimes(n) {

  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) continue;

    alert(i);  // a prime
  }
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if ( n % i == 0) return false;
  }
  return true;
}
Ikkinchi variantni tushunish osonroq, shunday emasmi? Kod qismi o'rniga biz harakat nomini ko'ramiz ( isPrime). Ba'zan odamlar bunday kodni o'zini tavsiflash deb atashadi .

Shunday qilib, biz ularni qayta ishlatish niyatimiz bo'lmasa ham, funktsiyalar yaratilishi mumkin. Ular kodni tuzadilar va uni o'qilishi mumkin qiladi.
```