``` js

Ba'zan biz turli xil sharoitlarga qarab turli xil harakatlarni bajarishimiz kerak.

Buning uchun biz ifbayonot va shartli operatordan foydalanishimiz mumkin ?, bu ham "savol belgisi" operatori deb ataladi.

"if" bayonoti
Bayonot if(...)qavs ichidagi shartni baholaydi va agar natija bo'lsa true, kod blokini bajaradi.

Masalan:

let year = prompt('In which year was ECMAScript-2015 specification published?', '');

if (year == 2015) alert( 'You are right!' );
Yuqoridagi misolda shart oddiy tenglikni tekshirish ( year == 2015), lekin u ancha murakkabroq bo'lishi mumkin.

Agar biz bir nechta bayonotni bajarmoqchi bo'lsak, kod blokini jingalak qavslar ichiga o'rashimiz kerak:

if (year == 2015) {
  alert( "That's correct!" );
  alert( "You're so smart!" );
}
Kod blokini jingalak qavslar bilan o'rashni tavsiya qilamiz, {}har safar ifbayonotdan foydalanganda, hatto bajarilishi kerak bo'lgan bitta bayonot bo'lsa ham. Bu o'qishni yaxshilaydi.

Mantiqiy konvertatsiya
Bayonot if (…)qavs ichidagi ifodani baholaydi va natijani mantiqiy qiymatga aylantiradi.

Keling, konvertatsiya qilish qoidalarini Konversiyalar turi bo'limidan eslaylik :

Raqam 0, bo'sh qator "", null, undefinedva NaNhammasi bo'ladi false. Shuning uchun ular "soxta" qiymatlar deb ataladi.
Boshqa qiymatlar ga aylanadi true, shuning uchun ular "haqiqat" deb ataladi.
Shunday qilib, ushbu shart ostidagi kod hech qachon bajarilmaydi:

if (0) { // 0 is falsy
  ...
}
…va bu holatda - u har doim shunday bo'ladi:

if (1) { // 1 is truthy
  ...
}
Bundan tashqari, oldindan baholangan mantiqiy qiymatni ga o'tkazishimiz mumkin if, masalan:

let cond = (year == 2015); // equality evaluates to true or false

if (cond) {
  ...
}

"else" bandi
Bayonotda ifixtiyoriy "alse" bloki bo'lishi mumkin. Shart noto'g'ri bo'lsa, u bajariladi.

Masalan:

let year = prompt('In which year was the ECMAScript-2015 specification published?', '');

if (year == 2015) {
  alert( 'You guessed it right!' );
} else {
  alert( 'How can you be so wrong?' ); // any value except 2015
}
Bir nechta shartlar: "else if"
Ba'zan biz shartning bir nechta variantini sinab ko'rmoqchimiz. Ushbu else ifband bizga buni qilishga imkon beradi.

Masalan:

let year = prompt('In which year was the ECMAScript-2015 specification published?', '');

if (year < 2015) {
  alert( 'Too early...' );
} else if (year > 2015) {
  alert( 'Too late' );
} else {
  alert( 'Exactly!' );
}
Yuqoridagi kodda JavaScript avval tekshiradi year < 2015. Agar bu noto'g'ri bo'lsa, u keyingi shartga o'tadi year > 2015. Agar bu ham noto'g'ri bo'lsa, u oxirgisini ko'rsatadi alert.

Ko'proq else ifbloklar bo'lishi mumkin. Final else ixtiyoriy.


Bayonot bir switchnechta ifcheklarni almashtirishi mumkin.

Bu qiymatni bir nechta variant bilan solishtirishning yanada tavsifli usulini beradi.

Sintaksis
Bir switch yoki bir nechta case blok va ixtiyoriy standart mavjud.

Bu shunday ko'rinadi:

switch(x) {
  case 'value1':  // if (x === 'value1')
    ...
    [break]

  case 'value2':  // if (x === 'value2')
    ...
    [break]

  default:
    ...
    [break]
}
ning qiymati birinchidan (ya'ni, ) keyin ikkinchisiga ( ) va hokazo xqiymatga qat'iy tenglik uchun tekshiriladi .casevalue1value2
Agar tenglik topilsa, switchkodni mos keladigan dan boshlab, caseeng yaqingacha break(yoki oxirigacha switch) bajarishni boshlaydi.
Hech qanday holat mos kelmasa, defaultkod bajariladi (agar mavjud bo'lsa).
Misol
Misol switch(bajarilgan kod ajratilgan):

let a = 2 + 2;

switch (a) {
  case 3:
    alert( 'Too small' );
    break;
  case 4:
    alert( 'Exactly!' );
    break;
  case 5:
    alert( 'Too big' );
    break;
  default:
    alert( "I don't know such values" );
}
Bu erda birinchi variantdan switchsolishtirish boshlanadi . Uchrashuv muvaffaqiyatsiz tugadi.a case 3

Keyin 4. case 4Bu o'yin, shuning uchun ijro eng yaqingacha boshlanadi break.

Agar yo'q bo'lsa, bajarish hech qanday tekshiruvlarsiz breakkeyingi bilan davom etadi .case

Quyidagisiz misol break:

let a = 2 + 2;

switch (a) {
  case 3:
    alert( 'Too small' );
  case 4:
    alert( 'Exactly!' );
  case 5:
    alert( 'Too big' );
  default:
    alert( "I don't know such values" );
}
Yuqoridagi misolda biz uchta soniyaning ketma-ket bajarilishini ko'ramiz alert:

alert( 'Exactly!' );
alert( 'Too big' );
alert( "I don't know such values" );
Har qanday ifoda switch/caseargument bo'lishi mumkin
Ikkala switch va case o'zboshimchalik bilan ifodalashga ruxsat beradi.

Masalan:

let a = "1";
let b = 0;

switch (+a) {
  case b + 1:
    alert("this runs, because +a is 1, exactly equals b+1");
    break;

  default:
    alert("this doesn't run");
}
Bu erda ni +aberadi , bu in 1bilan solishtiriladi va tegishli kod bajariladi.b + 1case

"Case" ni guruhlash
Bir xil kodga ega bo'lgan bir nechta variantlarni case guruhlash mumkin.

Misol uchun, agar biz bir xil kodni va uchun ishlashini case 3xohlasak case 5:

let a = 3;

switch (a) {
  case 4:
    alert('Right!');
    break;

  case 3: // (*) grouped two cases
  case 5:
    alert('Wrong!');
    alert("Why don't you take a math class?");
    break;

  default:
    alert('The result is strange. Really.');
}
Endi ikkala 3va 5bir xil xabarni ko'rsating.

Ishlarni "guruhlash" qobiliyati - bu switch/case holda qanday ishlashining yon ta'siri break. Bu erda bajarilishi case 3satrdan boshlanadi (*)va orqali o'tadi case 5, chunki yo'q break.

Turi muhim
Shuni ta'kidlash kerakki, tenglikni tekshirish har doim qat'iydir. Qiymatlar mos kelishi uchun bir xil turdagi bo'lishi kerak.

Masalan, kodni ko'rib chiqaylik:

let arg = prompt("Enter a value?");
switch (arg) {
  case '0':
  case '1':
    alert( 'One or zero' );
    break;

  case '2':
    alert( 'Two' );
    break;

  case 3:
    alert( 'Never executes!' );
    break;
  default:
    alert( 'An unknown value' );
}
0, , uchun 1birinchi alertishlaydi.
2Ikkinchi alertyugurish uchun .
Lekin uchun 3, ning natijasi - songa qat'iy teng bo'lmagan promptsatr . Shunday qilib, bizda ishlamaydigan kod bor ! Variant bajariladi ."3"===3 case 3 default
```