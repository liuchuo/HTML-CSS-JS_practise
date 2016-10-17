// 使用var定义变量，包含各种类型、字符串都可以
var total = 100;
var remain = 50;
var string = "I have "
// 使用console.log在控制台输出想要的结果
console.log(string + (total - remain + 10) + " ice-creams" + "!");

while(total >= 0) {
    console.log(total);
    total -= 10;
}

// 花括号在只有一行代码的时候可以省略
for(var i = 1; i <= 10; i++)
    console.log(i);

// 在for循环里面定义的i还是可以在外面使用的
console.log(i + 100);

//i可以不是布尔类型值
while(i) {
    i--;
    console.log(i + 1000);
}

// JS的内建函数：alert、confirm、prompt
// var goName = false;
// while(goName == false) {
//     var yourname = prompt("请输入你的姓名：");
//     if(typeof(yourname) == "object") {
//         alert("人家不知道你的名字了啦~");
//     } else {
//         if(confirm("Hey, 你的名字是不是叫" + yourname)) {
//             goName = true;
//             alert(yourname + "，我不管，反正我最萌~");
//         }
//     }
// }


// 使用typeof来判断数据类型
console.log(typeof(12) + typeof("hehe da") + typeof(false) + typeof(yourname));
// null的类型是object，乱写的字母的类型是undefined

// 函数
function cal(a, b, c) {
    return a * b + c;
}

// 创建数组
// 数组元素可以是字符串、数字、变量，甚至可以是其他数组，可以把它们混合放在同一个数组里面
var array = ["1", "000", "999", "543"];
console.log(array.length);
console.log(array[0]);
// 使用pop和push操纵数组
var b = array.pop(); //pop有返回值，也可以不返回
array.push("123344");
var array2 = [1, 2, 3, 4];
array.push(array2);
console.log(array[4]);//[1, 2, 3, 4]
console.log(array);//["1", "000", "999", "123344", Array[4]]
array[1] = array2;
console.log(array);//["1", Array[4], "999", "123344", Array[4]]


