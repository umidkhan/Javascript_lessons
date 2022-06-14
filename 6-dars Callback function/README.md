``` js

'CallBack function'(qayta qo'ng'iroq qilish funktsiyasi)

Funksiyalarni qiymat sifatida o‘tkazish va funksiya ifodalaridan foydalanishning ko‘proq misollarini ko‘rib chiqamiz.

Biz ask(question, yes, no)uchta parametrli funktsiyani yozamiz:

question
Savol matni
yes
Agar javob “Ha” bo‘lsa, ishga tushadigan funksiya
no
Agar javob “Yo‘q” bo‘lsa, ishga tushadigan funksiya
Funksiya questionfoydalanuvchining javobiga qarab va dan qo'ng'iroq yes()qilishi yoki quyidagini so'rashi kerak no():

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

function showOk() {
  alert( "You agreed." );
}

function showCancel() {
  alert( "You canceled the execution." );
}

// usage: functions showOk, showCancel are passed as arguments to ask
ask("Do you agree?", showOk, showCancel);
Amalda, bunday funktsiyalar juda foydali. askHaqiqiy hayot va yuqoridagi misol o'rtasidagi asosiy farq shundaki, real hayot funktsiyalari oddiy ga qaraganda foydalanuvchi bilan o'zaro aloqa qilishning murakkab usullaridan foydalanadi confirm. Brauzerda bunday funktsiyalar odatda chiroyli ko'rinadigan savol oynasini chizadi. Lekin bu boshqa hikoya.

showOkva argumentlari qayta qo'ng'iroq showCancelqilish funktsiyalari yoki faqat qayta qo'ng'iroqlarask deb ataladi .

G'oya shundan iboratki, biz funktsiyani topshiramiz va agar kerak bo'lsa, uni keyinroq "qayta chaqirish" ni kutamiz. Bizning holatlarimizda showOk"ha" javobi va showCancel"yo'q" javobi uchun qayta qo'ng'iroq bo'ladi.

Ekvivalent, qisqaroq funktsiyani yozish uchun Funktsiya ifodalaridan foydalanishimiz mumkin:

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);
Bu erda funktsiyalar ask(...)qo'ng'iroqning ichida e'lon qilinadi. Ularning nomi yo'q va shuning uchun anonim deb ataladi . Bunday funktsiyalardan tashqarida foydalanish mumkin emas ask(chunki ular o'zgaruvchilarga tayinlanmagan), lekin bu erda biz xohlagan narsa.

Bunday kod bizning skriptlarimizda tabiiy ravishda paydo bo'ladi, u JavaScript ruhida.

```