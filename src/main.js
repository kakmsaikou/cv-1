let html = document.querySelector("#html");
let style = document.querySelector("#style");
// 通过加注释，让汉字不会影响到CSS
let str1 = `
/*
 * 你好，我叫叫小季
 * 接下来我要展示一下我的前端功底
 * 首先我要准备一个div
 */
#div1 {
  width: 200px;
  height: 200px;
}
/*
 * 接下来，我要把div变成一个八卦图
 * 首先，把div变成一个圆
 */
#div1 {
  border-radius: 50%;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  border: none;
}
/*
 * 八卦是阴阳形成的
 * 一黑一白
 */
#div1 {
  background: linear-gradient(90deg,rgba(255, 255, 255, 1) 0%,rgba(255, 255, 255, 1) 50%,rgba(0, 0, 0, 1) 50%,rgba(0, 0, 0, 1) 100%);
}
/* 
 * 加一对神秘的小球
 */
#div1::before {
  width: 100px;
  height: 100px;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  background: radial-gradient(circle,rgba(255, 255, 255, 1) 15%,rgba(0, 0, 0, 1) 15%,rgba(0, 0, 0, 1) 100%);
  border-radius: 50%;
}
#div1::after {
  width: 100px;
  height: 100px;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background: radial-gradient(circle,rgba(0, 0, 0, 1) 15%,rgba(255, 255, 255, 1) 15%,rgba(255, 255, 255, 1) 100%);
  border-radius: 50%;
}
/*
 * 能转起来的太极图才帅！
 */
#div1 {
  animation: 3s rotation linear infinite reverse;
}`;

// 检测是手机端还是电脑端，根据情况添加太极图旋转动画
if (matchMedia("(pointer:fine)").matches) {
  let str2 = `
@keyframes rotation {
  to {
    transform: translateX(-50%) rotate(360deg);
  }
}`;
  str1 += str2;
} else {
  let str2 = `
@keyframes rotation {
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}`;
  str1 += str2;
}

let str3 = "";
let n = 0;

let step = () => {
  setTimeout(() => {
    switch (str1[n]) {
      // 如果是回车，就返回<br>
      case "\n":
        str3 += "<br>";
        break;
      // 如果是空格，就返回&nbsp
      case " ":
        str3 += "&nbsp";
        break;
      // 如果都不是，就原样返回
      default:
        str3 += str1[n];
        break;
    }

    html.innerHTML = str3;
    style.innerHTML = str1.substring(0, n);
    // 每次写完html，都向下滚动到最底。
    window.scrollTo(0, 99999);
    html.scrollTo(0, 99999);
    n++;
    if (n < str1.length) {
      step();
    }
  }, 0);
};

step();
