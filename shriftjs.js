(function(){

"use strict";

//Создание глобальной функции CeasarsCipher
window.CeasarsCipher = function(input){
      //Просто сохраняем алфавит в переменную
	var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase(),
      //Сумма изменения. Будет определен в будущем входным значением.
  		shiftAmount,
      //Переменная, которая сохранит смещенный алфавит.
      shiftedAlphabet = "",
      //Последовательность, которая сохранит будущий выход.
      OUTPUT = "",
      //Сама строка ввода, которая будет определена входным значением в будущем.
      STRING,
      //Просто знаки, которые не являются частью алфавита.
      otherCharacters = '-=~\"\'#$%&*^:<>?/!{(|)}.1234567890\, '
  //Затем мы проверяем аргумент функции. Если это будет объектом, мы изложим предопределенные переменные
  if(typeof input === "object"){
  	shiftAmount = input.shift;
    STRING = input.msg.toLowerCase();
  } else {
    //Если аргумент не объект с материалом,  пропускаем функцию
  	return;
  }
  //Теперь, мы делаем целое волшебство здесь
  if(typeof STRING === "string" || typeof (STRING+"") === "string"){
    //Теперь мы определяем перемещенную переменную алфавита.
    //Сначала мы берем, в последний раз <shift> письма и помещают их в beggining последовательности
   	shiftedAlphabet = alphabet.slice(shiftAmount);
    //Затем мы помещаем отдых алфавита ПОСЛЕ SHIFTER_LETTERS
    shiftedAlphabet += alphabet.slice(0, shiftAmount);
    //Затем мы добавляем знаки, которые не являются частью алфавита и действительно не предполагают, чтобы быть перемещенными. Таким образом, когда мы добавляем их к обоим алфавитам, мы не переместим знаки
    shiftedAlphabet += otherCharacters;
    alphabet += otherCharacters;
    
    //Затем мы делаем выход
    for(var i = 0; i < STRING.length; i++){
      //Возьмите индекс письма, которое мы хотим заменить
    	var numberd = alphabet.indexOf( STRING[i] )
    	
      //И используя старый индекс письма мы берем его от перемещенного алфавита и помещения его в OUTPUT
      OUTPUT += shiftedAlphabet[numberd];
    }
  } else {
    //IF STRING не STRING, или она даже не присутствует, мы пропускаем функцию
    return;
  };
  
  //ВОЗВРАЩЕНИЕ THE OUTPUT
  return OUTPUT;
  
  //DONE =) XD
};
})();

//Теперь просто материал запроса. Вы можете проверить это, если Вы хотите осуществить то же самое. Симпатичный EZ. Я думаю, что Вы можете понять его EZ без моих комментариев =)
document.getElementById("message").addEventListener("input", function(){
  var itsValue = this.value;
  document.getElementById("output").textContent = CeasarsCipher({
    msg: itsValue,
    shift: document.getElementById("shift").value
  });
});
document.getElementById("shift").addEventListener("keyup", function(){
  var itsValue = this.value;
  document.getElementById("output").textContent = CeasarsCipher({
    msg: document.getElementById("message").value,
    shift: itsValue
  })
});

document.getElementById("output").textContent = CeasarsCipher({
    msg: document.getElementById("message").value,
    shift: document.getElementById("shift").value
  });