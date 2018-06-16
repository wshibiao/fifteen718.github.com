var data = [];
var dataStr = "1、不知道哪里@\
<br><br>\
厉害<br>\
<br><br>\
$2、还是不知道哪里@\
<br><br><br>\
厉害厉害<br>\
<br><br>\
$3、好像在车上@\
<br><br>\
厉害厉害厉害<br>\
<br><br>\
$4、我大哥@\
<br><br><br>\
点击领取一枚大哥<br>\
<br><br>\
$5、大哥的猫@\
<br>\
在床上尿尿的猫<br>\
<br>\
<br>\
$6、喵喵喵@\
<br>\
我们一起学猫叫<br>\
一起喵喵喵喵喵<br>\
<br>\
$7、看见没我大哥@\
<br>\
会不会被打<br>\
<br>\
$8、葫芦娃@\
<br><br>\
什么时候去救爷爷<br>\
<br><br>\
$9、嘻嘻@\
<br><br>\
emmmmmm<br>\
<br><br>\
";
var d = dataStr.split('$');
console.log(d);
for (var i = 0; i < d.length; i++) {
    var c = d[i].split('@');
    data.push({
        img: c[0].replace('、', ' ') + '.jpg',
        caption: c[0].split('、')[1],
        desc: c[1]
    });
};