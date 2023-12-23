# Eslint 代码规则

## **eslint:recommended （eslint 推荐使用 - 以下只展示了部分规则）**

### **强制在 getter 属性中出现一个 return 语句 (getter-return)**

```
get 语法将对象属性绑定到一个函数，该函数在查找该属性时将被调用。<br />注意，每个 getter 都期望有返回值。

```

**错误** 代码示例：

```javascript
/*eslint getter-return: "error"*/
p = {
  get name() {
    // no returns.
  },
};
Object.defineProperty(p, "age", {
  get: function () {
    // no returns.
  },
});
class P {
  get name() {
    // no returns.
  }
}
```

**正确** 代码示例：

```javascript
/*eslint getter-return: "error"*/
p = {
  get name() {
    return "nicholas";
  },
};
Object.defineProperty(p, "age", {
  get: function () {
    return 18;
  },
});
class P {
  get name() {
    return "nicholas";
  }
}
```

### **禁止与 -0 进行比较 (no-compare-neg-zero)**

```
该规则对试图与 -0 进行比较的代码发出警告，因为并不会达到预期。也就是说像 x === -0 的代码对于 +0 和 -0 都有效。作者可能想要用 Object.is(x, -0)。
```

**错误** 代码示例：

```javascript
if (x ===-0) {
  // doSomething()...}
  正确的 代码示例：
  if (x ===0) {
    // doSomething()...}
    if (Object.is(x, -0)) {
      // doSomething()...}
```

### **禁用 debugger (no-debugger)**

```
debugger 语句用于告诉 JavaScript 执行环境停止执行并在代码的当前位置启动调试器。产品代码不应该包含 debugger，因为它会导致浏览器停止执行代码并打开一个适当的调试器。
```

**错误** 代码示例：

```javascript
/*eslint no-debugger: "error"*/
function isTruthy(x) {
  debugger;
  returnBoolean(x);
}
```

**正确** 代码示例：

```javascript
/*eslint no-debugger: "error"*/
function isTruthy(x) {
  returnBoolean(x); // set a breakpoint at this line}
```

### **禁止在 function 定义中出现重复的参数 (no-dupe-args)**

```
如果在一个函数定义中出现多个同名的参数，后面出现的会覆盖前面出现的参数。重复的名称可能是一个打字错误。
```

**错误** 代码示例：

```javascript
/*eslint no-dupe-args: "error"*/
function foo(a, b, a) {
  console.log("value of the second a:", a);
}
var bar = function (a, b, a) {
  console.log("value of the second a:", a);
};
```

**正确** 代码示例：

```javascript
/*eslint no-dupe-args: "error"*/
function foo(a, b, c) {
  console.log(a, b, c);
}
var bar = function (a, b, c) {
  console.log(a, b, c);
};
```

### **禁止在对象字面量中出现重复的键 (no-dupe-keys)**

```
后边的键值会覆盖前边的键值，这一般是一个书写错误。
```

**错误** 代码示例：

```javascript
/*eslint no-dupe-keys: "error"*/
var foo = {
  bar: "baz",
  bar: "qux",
};
var foo = {
  bar: "baz",
  bar: "qux",
};
var foo = {
  0x1: "baz",
  1: "qux",
};
```

**正确** 代码示例：

```javascript
/*eslint no-dupe-keys: "error"*/
var foo = {
  bar: "baz",
  quxx: "qux",
};
```

### **禁止重复 case 标签（no-duplicate-case）**

```
如果一个 switch 语句中的 case 子句中出现重复的测试表达式，那么很有可能是某个程序员拷贝了一个 case 子句但忘记了修改测试表达式。
```

**错误** 代码示例：

```javascript
/*eslint no-duplicate-case: "error"*/
var a =1,
  one =1;
switch (a) {
    case1:
    break;
    case2:
    break;
    case1: // duplicate test expression
    break;
  default:
    break;}
switch (a) {
  case one:
    break;
    case2:
    break;
  case one: // duplicate test expression
    break;
  default:
    break;}
switch (a) {
  case "1":
    break;
  case "2":
    break;
  case "1": // duplicate test expression
    break;
  default:
    break;}
```

**正确** 代码示例：

```javascript
/*eslint no-duplicate-case: "error"*/
var a =1,
  one =1;
switch (a) {
    case1:
    break;
    case2:
    break;
    case3:
    break;
  default:
    break;}
switch (a) {
  case one:
    break;
    case2:
    break;
    case3:
    break;
  default:
    break;}
switch (a) {
  case "1":
    break;
  case "2":
    break;
  case "3":
    break;
  default:
    break;}
```

### **禁止空块语句 (no-empty)**

```
空语句块，如果不是技术上的错误，通常是由于不完整的重构造成的。这会造成代码阅读上的困惑。
```

**错误** 代码示例：

```javascript
/*eslint no-empty: "error"*/
if (foo) {
}
while (foo) {}
switch (foo) {
}
try {
  doSomething();
} catch (ex) {
} finally {
}
```

**正确** 代码示例：

```javascript
/*eslint no-empty: "error"*/
if (foo) {
  // empty}
  while (foo) {
    /* empty */}
  try {
    doSomething();} catch (ex) {
    // continue regardless of error}
    try {
      doSomething();} finally {
      /* continue regardless of error */}
```

### **禁止对 catch 子句中的异常重新赋值 (no-ex-assign)**

```
在 try 语句中的 catch 子句中，如果意外地（或故意地）给异常参数赋值，是不可能引用那个位置的错误的。
```

**错误** 代码示例：

```javascript
/*eslint no-ex-assign: "error"*/
try {
  // code} catch (e) {
  e =10;}
```

**正确** 代码示例：

```javascript
/*eslint no-ex-assign: "error"*/
try {
  // code} catch (e) {
  var foo =10;}
```

### **禁用稀疏数组（no-sparse-arrays）**

```
稀疏数组包括很多空位置，经常是由于在数组字面量中使用多个逗号造成的，例如：
```

```javascript
var items = [, ,];
```

在这个例子中，item 数组的 length 为 2，实际上，items[0] 或 items[1]并没有值。数组中只有逗号是有效的，再加上 length 被设置，没有实际的值被设置，这些情况让很多开发者对稀疏数组感到困惑。考虑下面的情况：

```javascript
var colors = ["red", , "blue"];
```

在这个例子中，colors 数值的 length 是 3。但是否是开发者想让数组中间出现一个空元素？或者只是一个书写错误？稀疏数组的定义方式造成了很大的困惑，建议避免使用它们，除非你确定它们在你的代码中很有用。

**错误** 代码示例：

```javascript
/*eslint no-sparse-arrays: "error"*/
var items = [,];
var colors = ["red", , "blue"];
```

**正确** 代码示例：

```javascript
/*eslint no-sparse-arrays: "error"*/
var items = [];
var items = newArray(23);
// trailing comma (after the last element) is not a problemvar colors = [ "red", "blue", ];
```

### **禁止在 return、throw、continue 和 break 语句后出现不可达代码 (no-unreachable)**

```
因为 return、throw、continue 和 break 语句无条件地退出代码块，其之后的任何语句都不会被执行。
```

**错误** 代码示例：

```javascript
/*eslint no-unreachable: "error"*/
function foo() {
  returntrue;
  console.log("done");
}
function bar() {
  thrownewError("Oops!");
  console.log("done");
}
while (value) {
  break;
  console.log("done");
}
thrownewError("Oops!");
console.log("done");
function baz() {
  if (Math.random() < 0.5) {
    return;
  } else {
    thrownewError();
  }
  console.log("done");
}
for (;;) {}
console.log("done");
```

**正确** 代码示例，因为 JavaScript 函数和变量提升：

```javascript
/*eslint no-unreachable: "error"*/
function foo() {
  return bar();
  function bar() {
    return1;
  }}
function bar() {
  return x;
  var x;}
switch (foo) {
    case1:
    break;
    var x;}
```

### **要求调用 isNaN()检查 NaN (use-isnan)**

```
在 JavaScript 中，NaN 是 Number 类型的一个特殊值。它被用来表示非数值，这里的数值是指在 IEEE 浮点数算术标准中定义的双精度64位格式的值。<br />因为在 JavaScript 中 NaN 独特之处在于它不等于任何值，包括它本身，与 NaN 进行比较的结果是令人困惑：

- NaN !== NaN or NaN != NaN evaluate to true

因此，使用 Number.isNaN() 或 全局的 isNaN() 函数来测试一个值是否是 NaN。
```

**错误** 代码示例：

```javascript
/*eslint use-isnan: "error"*/
if (foo ==NaN) {
  // ...}
  if (foo !=NaN) {
    // ...}
```

**正确** 代码示例：

```javascript
/*eslint use-isnan: "error"*/
if (isNaN(foo)) {
  // ...}
  if (!isNaN(foo)) {
    // ...}
```

### **强制 typeof 表达式与有效的字符串进行比较 (valid-typeof)**

```
对于绝大多数用例而言，typeof 操作符的结果是以下字符串字面量中的一个："undefined"、"object"、"boolean"、"number"、"string"、"function"、"symbol" 和 "bigint"。把 typeof 操作符的结果与其它字符串进行比较，通常是个书写错误。
```

**错误** 代码示例：

```javascript
/*eslint valid-typeof: "error"*/
typeof foo === "strnig";
typeof foo == "undefimed";
typeof bar != "nunber";
typeof bar !== "fucntion";
```

**正确** 代码示例：

```javascript
/*eslint valid-typeof: "error"*/
typeof foo === "string";
typeof bar == "undefined";
typeof foo === baz;
typeof bar === typeof qux;
```

### **禁止 case 语句落空 (no-fallthrough)**

```
使用匹配 /falls?\s?through/i 的正则表达式的注释来表明落空是有意为之的，，被认为是一个最佳实际。
```

**错误** 代码示例：

```javascript
/*eslint no-fallthrough: "error"*/
switch(foo) {
    case1:
    doSomething();
    case2:
    doSomething();}
```

**正确** 代码示例：

```javascript
/*eslint no-fallthrough: "error"*/
switch(foo) {
    case1:
    doSomething();
    break;
    case2:
    doSomething();}
function bar(foo) {
  switch(foo) {
      case1:
      doSomething();
      return;
      case2:
      doSomething();
  }}
switch(foo) {
    case1:
    doSomething();
    thrownewError("Boo!");
    case2:
    doSomething();}
switch(foo) {
    case1:
    case2:
    doSomething();}
switch(foo) {
    case1:
    doSomething();
    // falls through
    case2:
    doSomething();}
```

注意，在上面的例子中，最后的 case 语句，不会引起警告，因为没有可落空的语句了。

### **禁止重新声明变量 (no-redeclare)**

```
在 JavaScript 中，使用 var 可以对同一个变量再次声明。这会使变量实际声明和定义的位置混乱不堪。

```

**错误** 代码示例：

```javascript
/*eslint no-redeclare: "error"*/
var a = 3;
var a = 10;
```

**正确** 代码示例：

```javascript
/*eslint no-redeclare: "error"*/
var a = 3;
// ...
a = 10;
```

### **禁止不必要的 catch 子句 (no-useless-catch)**

```
只重新抛出原始错误的 catch 子句是冗余的，对程序的运行时行为没有影响。这些冗余子句可能会导致混乱和代码膨胀，所以最好不要使用这些不必要的 catch 子句。
```

**错误** 代码示例：

```javascript
/*eslint no-useless-catch: "error"*/
try {
  doSomethingThatMightThrow();
} catch (e) {
  throw e;
}
try {
  doSomethingThatMightThrow();
} catch (e) {
  throw e;
} finally {
  cleanUp();
}
```

**正确** 代码示例：

```javascript
/*eslint no-useless-catch: "error"*/
try {
  doSomethingThatMightThrow();
} catch (e) {
  doSomethingBeforeRethrow();
  throw e;
}
try {
  doSomethingThatMightThrow();
} catch (e) {
  handleError(e);
}
```

### **禁止删除变量 (no-delete-var)**

```
delete 的目的是删除对象的属性。使用 delete 操作删除一个变量可能会导致意外情况发生。
```

**错误** 代码示例：

```javascript
/*eslint no-delete-var: "error"*/
var x;
delete x;
```

### **禁止未使用过的变量 (no-unused-vars)**

```
已声明的变量在代码里未被使用过，就像是由于不完整的重构而导致的遗漏错误。这样的变量增加了代码量，并且混淆读者。
```

**错误** 代码示例：

```javascript
/*eslint no-unused-vars: "error"*/ /*global some_unused_var*/
// It checks variables you have defined as global
some_unused_var = 42;
var x;
// Write-only variables are not considered as used.
var y = 10;
y = 5;
// A read for a modification of itself is not considered as used.var z =0;
z = z + 1;
```

**正确** 代码示例：

```javascript
/*eslint no-unused-vars: "error"*/
var x = 10;
alert(x);
```

## **拓展**

### **要求使用点号 (dot-notation)**

```
在 JavaScript 中，你可以使用点号 (foo.bar) 或者方括号 (foo["bar"])来访问属性。然而，点号通常是首选，因为它更加易读，简洁，也更适于 JavaScript 压缩。
```

**错误** 代码示例：

```javascript
/*eslint dot-notation: "error"*/
var x = foo["bar"];
```

**正确** 代码示例：

```javascript
/*eslint dot-notation: "error"*/
var x = foo.bar;
var x = foo[bar]; // Property name is a variable, square-bracket notation required
```

### **要求使用 === 和 !== (eqeqeq)**

```
使用类型安全的 === 和 !== 操作符代替 == 和 != 操作符是一个很好的实践。这样做的原因是，== 和 != 遵循 Abstract Equality Comparison Algorithm 作强制转型。例如，以下语句被认为是 true。

- [] == false
- [] == ![]
- 3 == "03"

如果它们中的任何一个出现在一个看上去无害的语句中，比如 a == b ，那么实际的问题是很难被发现的。
### **禁止在 else 前有 return (no-else-return)**
如果 if 块中包含了一个 return 语句，else 块就成了多余的了。可以将其内容移至块外。
```

**错误** 代码示例：

```javascript
/*eslint no-else-return: "error"*/
function foo() {
  if (x) {
    return y;
  } else {
    return z;
  }
}
```

**正确** 代码示例：

```javascript
/*eslint no-else-return: "error"*/
function foo() {
  if (x) {
    return y;
  }
  return z;
}
```

### **禁止出现空函数 (no-empty-function)**

```
空函数能降低代码的可读性，因为读者需要猜测它是否是有意为之。所以，为空函数写一个清晰的注释是个很好的实践。
```

**错误** 代码示例：

```javascript
/*eslint no-empty-function: "error"*/ /*eslint-env es6*/
function foo() {}
var foo = function () {};
var foo = () => {};
```

### **禁止多余的 return 语句 (no-useless-return)**

```
return; 语句是多余的，并且在函数执行过程中不会产生效果。这可能令人困惑，因此最好禁止使用这些多余的语句。
```

**错误** 代码示例：

```javascript
/* eslint no-useless-return: "error" */
function foo() { return; }
function foo() {
  doSomething();
  return;}
function foo() {
  if (condition) {
    bar();
    return;
  } else {
    baz();
  }}
function foo() {
  switch (bar) {
      case1:
      doSomething();
    default:
      doSomethingElse();
      return;
  }}
```

**正确** 代码示例：

```javascript
/* eslint no-useless-return: "error" */
function foo() {
  return5;
}
function foo() {
  return doSomething();
}
function foo() {
  if (condition) {
    bar();
    return;
  } else {
    baz();
  }
  qux();
}
```

### **要求或者禁止 Yoda 条件 (yoda)**

```
yoda 条件被如此命名，是因为在条件判断中字面量在先而变量在第二的位置。例如，以下是 Yoda 条件：
```

```javascript
if ("red" === color) {
// ...}
```

它被叫做 Yoda 条件是因为它这样读：”红色是颜色”，类似于星球大战中 Yoda 的讲话方式。对比另一种操作数的排序方式：

```javascript
if (color === "red") {
// ...}
```

这通常读作，”颜色是红的”，这是一种更自然的方式去描述对比。

### **不允许初始化变量值为 undefined (no-undef-init)**

```
在 JavaScript 中，声明一个变量但未初始化，变量会自动获得 undefined 作为初始值。比如：
```

```javascript
var foo;
console.log(foo === undefined); // true
```

因此，初始化变量值为 undefined 是多余的，如：

```javascript
var foo = undefined;
```

最好的做法是避免初始化变量值为 undefined。

### **要求使用 let 或 const 而不是 var**

**错误** 代码示例：

```javascript
/*eslint no-var: "error"*/
var x = "y";
var CONFIG = {};
```

**正确** 代码示例：

```javascript
/*eslint no-var: "error"*/ /*eslint-env es6*/
let x = "y";
const CONFIG = {};
```

### **建议使用剩余参数代替 arguments (prefer-rest-params)**

```
ES2015 里有剩余参数。我们可以利用这个特性代替变参函数的 arguments 变量。<br />arguments 没有 Array.prototype 方法，所以有点不方便。
```

**错误** 的代码示例：

```javascript
function foo() {
  console.log(arguments);
}
function foo(action) {
  var args = Array.prototype.slice.call(arguments, 1);
  action.apply(null, args);
}
function foo(action) {
  var args = [].slice.call(arguments, 1);
  action.apply(null, args);
}
```

**正确** 的代码示例：

```javascript
function foo(...args) {
  console.log(args);}
function foo(action, ...args) {
  action.apply(null, args); // or `action(...args)`, related to the `prefer-spread` rule.}
```

### **禁用 caller 或 callee (no-caller)**

```
arguments.caller 和 arguments.callee 的使用使一些代码优化变得不可能。在 JavaScript 的新版本中它们已被弃用，同时在 ECMAScript 5 的严格模式下，它们也是被禁用的。
```

**错误** 代码示例：

```javascript
/*eslint no-caller: "error"*/
function foo(n) {
  if (n <= 0) {
    return;
  }
  arguments.callee(n - 1);
}
[1, 2, 3, 4, 5].map(function (n) {
  return !(n > 1) ? 1 : arguments.callee(n - 1) * n;
});
```

**正确** 代码示例：

```javascript
/*eslint no-caller: "error"*/
function foo(n) {
  if (n <= 0) {
    return;
  }
  foo(n - 1);
}
[1, 2, 3, 4, 5].map(function factorial(n) {
  return !(n > 1) ? 1 : factorial(n - 1) * n;
});
```

## 本文参考链接

[检测并修复 JavaScript 代码中的问题。 - ESLint - 插件化的 JavaScript 代码检查工具](https://zh-hans.eslint.org/)
