``js

         JavaScript tarixi boshlang'ich tushunchalar   

JavaScript 1995-yilda ishlab chiqilgan. Dasturlash tili dastlab web-sahifalarni jonli qilish uchun yaratilgan edi.

 Bu tildagi dasturlar 'skriptlar' deb ataladi. Ular to'g'ridan-to'g'ri web-sahifaning HTML-da yozilishi va sahifa yuklanganda avtomatik ravishda ishga tushishi mumkin.

 Skriptlar oddiy matn sifatida taqdim etiladi vs bajaradi. Ularni ishga tushirish uchun maxsus tayyorgarlik yoki kompilatsiya kerak emas. 

 !!! JavaScript 'Java' deb nomlangan boshqa tildan farq qiladi.

 JavaScript yaratilganda, u dastlab boshqa nomga ega edi: "LiveScript". Ammo o'sha vaqtlarda Java jjuda mashhur edi, shuning uchun Java tilining "kenja ukasi" sifatida yangi tilni joylashtirish yordam berishga qaror qilindi.

 Ammo rivojlanib borgan sari JavaScript ECMAScript nomli spetsifikatsiyasiga ega bo'lgan to'liq mustaqil dasturlash tiliga aylandi. Endi uni Javaga umuman aloqasi yo'q

 Hozirga vaqtga kelib JavaScript nafaqat brauzerda, balki serverda yoki aslida JavaScript dvigateli deb nomilangan maxsus dasturga ega bo'lgan har qanday qurilmada ishlashi mumkin.

 Turli dvigatellarda turli "kod nomlari" mavjud. Masalan:
      V8 - Chrome, Opera va Edgeda;
     SpiderMonkey - Firefoxda;
     "Chakra", "JavaScriptCore", "Nitro" - Internet Exploreda
     "SquirrelFish" - Safarida

JavaScript dasturlash tilida ishlash uchun avval uni HTML-ga ulash kerak.
JavaScriptni HTML-ga ulashni ikkita usuli mavjud bular:
     <script></script> teglari orqali 
     <script src="./example.js"> js faylni HTML-ga ulash orqali 

JavaScript fayl kenhaytmasi "js"

                                            Console nima
Agar biz kod yozib xato qilgan bo'lsak bu xatoni bilmasligimiz mumkin va script ishlamasa boshimiz qotib qoladi. Shuning uchun bizga Console kerak. Console bizga qaysi faylda qaysi qatorda xato qilayotganimzni aniqlab beruvchi vosita. 
Agar siz Google Chrome ishlatsangiz siz F12 tugmasi orqali ochishingiz mumkin (Windows OS-da), agar Mac OS-da bo'lsangiz Cmd+Opt+J tugmalarini bosing. 
Boshqa yo'li ham bor, sichqonchaning saytga olib borasiz va o'ng tugmasini bosasiz, menyudan "Inspect" ni tanlaysiz. 

                                        O'zgaruvchilar
O'zgaruvchi deb o'zida ma'lumotlarni saqlovchi muhitga aytiladi. 
Ularni uch turi mavjud: 
var - eski JavaScript o'zgaruvchisi;
let - hozirgi vaqt zamonaviy o'zgaruvchi;
const - o'zgarmas o'zgaruvchi;

                            Data types (Ma'lumot turlari)
JavaScriptda 8 ta asosiy ma'lumot turlari mavjud:
number - har qanday turdagi raqamlar uchun;
bigint - ixtiyoriy uzunlikdagi butun sonlar uchun;
string - istalgan kattalikdagi matnlar uchun;
boolean - bunda ikkita qiymat bo'ladi: true/false;
null - noma'lum qiymatlar uchun;
undefined - tayinlanmagan qiymatlar uchun;
object - murakkabroq ma'lumotlar tuzilmalari uchun;
symbol - noyob identifikatorlar uchun 