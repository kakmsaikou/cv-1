// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"epB2":[function(require,module,exports) {
var html = document.querySelector("#html");
var style = document.querySelector("#style");
// 通过加注释，让汉字不会影响到CSS
var str1 = "\n/*\n * \u4F60\u597D\uFF0C\u6211\u53EB\u53EB\u5C0F\u5B63\n * \u63A5\u4E0B\u6765\u6211\u8981\u5C55\u793A\u4E00\u4E0B\u6211\u7684\u524D\u7AEF\u529F\u5E95\n * \u9996\u5148\u6211\u8981\u51C6\u5907\u4E00\u4E2Adiv\n */\n#div1 {\n  width: 200px;\n  height: 200px;\n}\n/*\n * \u63A5\u4E0B\u6765\uFF0C\u6211\u8981\u628Adiv\u53D8\u6210\u4E00\u4E2A\u516B\u5366\u56FE\n * \u9996\u5148\uFF0C\u628Adiv\u53D8\u6210\u4E00\u4E2A\u5706\n */\n#div1 {\n  border-radius: 50%;\n  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);\n  border: none;\n}\n/*\n * \u516B\u5366\u662F\u9634\u9633\u5F62\u6210\u7684\n * \u4E00\u9ED1\u4E00\u767D\n */\n#div1 {\n  background: linear-gradient(90deg,rgba(255, 255, 255, 1) 0%,rgba(255, 255, 255, 1) 50%,rgba(0, 0, 0, 1) 50%,rgba(0, 0, 0, 1) 100%);\n}\n/* \n * \u52A0\u4E00\u5BF9\u795E\u79D8\u7684\u5C0F\u7403\n */\n#div1::before {\n  width: 100px;\n  height: 100px;\n  top: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  background: radial-gradient(circle,rgba(255, 255, 255, 1) 15%,rgba(0, 0, 0, 1) 15%,rgba(0, 0, 0, 1) 100%);\n  border-radius: 50%;\n}\n#div1::after {\n  width: 100px;\n  height: 100px;\n  bottom: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  background: radial-gradient(circle,rgba(0, 0, 0, 1) 15%,rgba(255, 255, 255, 1) 15%,rgba(255, 255, 255, 1) 100%);\n  border-radius: 50%;\n}\n/*\n * \u80FD\u8F6C\u8D77\u6765\u7684\u592A\u6781\u56FE\u624D\u5E05\uFF01\n */\n#div1 {\n  animation: 3s rotation linear infinite reverse;\n}";

// 检测是手机端还是电脑端，根据情况添加太极图旋转动画
if (matchMedia("(pointer:fine)").matches) {
  var str2 = "\n@keyframes rotation {\n  to {\n    transform: translateX(-50%) rotate(360deg);\n  }\n}";
  str1 += str2;
} else {
  var _str = "\n@keyframes rotation {\n  to {\n    transform: translate(-50%, -50%) rotate(360deg);\n  }\n}";
  str1 += _str;
}

var str3 = "";
var n = 0;

var step = function step() {
  setTimeout(function () {
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
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.186ebd8c.map