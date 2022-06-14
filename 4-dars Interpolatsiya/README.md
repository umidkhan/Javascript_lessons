``` js

Keling, maktab arifmetikasidan tashqarida bo'lgan JavaScript operatorlarining xususiyatlari bilan tanishaylik.

Odatda, plyus operatori +raqamlarni jamlaydi.

Ammo, agar ikkilik +satrlarga qo'llanilsa, u ularni birlashtiradi (birlashtiradi):

let s = "my" + "string";
alert(s); // mystring
E'tibor bering, agar operandlardan birortasi satr bo'lsa, ikkinchisi ham satrga aylantiriladi.

Masalan:

alert( '1' + 2 ); // "12"
alert( 2 + '1' ); // "21"
Qarang, birinchi operand satrmi yoki ikkinchisi muhim emas.

Mana murakkabroq misol:

alert(2 + 2 + '1' ); // "41" and not "221"
Bu yerda operatorlar birin-ketin ishlaydi. Birinchisi +ikkita raqamni jamlaydi, shuning uchun u ni qaytaradi 4, keyin keyingisi +unga qatorni qo'shadi 1, shuning uchun u ga o'xshaydi 4 + '1' = '41'.

alert('1' + 2 + 2); // "122" and not "14"
Bu erda birinchi operand satr bo'lib, kompilyator qolgan ikkita operandga ham satr sifatida qaraydi. ga 2birikadi '1', shuning uchun u '1' + 2 = "12"va ga o'xshaydi "12" + 2 = "122".

Ikkilik +- bu satrlarni shu tarzda qo'llab-quvvatlaydigan yagona operator. Boshqa arifmetik operatorlar faqat raqamlar bilan ishlaydi va har doim o'z operandlarini raqamlarga aylantiradi.

Mana ayirish va bo'lish uchun demo:

alert( 6 - '2' ); // 4, converts '2' to a number
alert( '6' / '2' ); // 3, converts both operands to numbers

```