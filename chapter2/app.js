var hello = 'Hello World';
alert(hello)

var int1 = 1;

//整数
var int1 = 1;
//負数
var int2 = -10;
//小数点
var float1 = 3.14;
//文字列
var str1 = 'JavaScriptを覚えよう'

//四則演算
//足し算
alert(3 + 3);
//引き算
alert(9 - 5);
//掛け算
alert(5 * 6);
//割り算
alert(12 / 2);

var str1 = 'Hello';
var str2 = 'World!!';
alert(str1 + str2);

//if
var orange = 100;
var apple = 120;

if (orange < apple){
	alert('みかんの値段がりんごより安い');
}

else if (orange == apple){
	alert('みかんとりんごが同じ値段');
}

else{
	alert('みかんの値段がりんごより高い');
}

//while
var max = 100;
var num = 1;
var count = 0;

while(num < max){
	num = num * 2;
	count = count + 1;
}

alert('2を掛け続けて' + max + 'を超えるのに必要だった回数は' + count + '回です');

//for
var i;
var num = 0;

for(i = 1; i < 11; i++){
	num = num + i;
}
alert('1から10まで足し算した結果は' + num + 'です');