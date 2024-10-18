# Class 与面向对象编程

## 题目1: ES6 中如何定义类？类与传统构造函数的区别？
**答案**: 
ES6 中使用 `class` 关键字定义类：
```javascript
class Person {
    constructor(name) {
        this.name = name;
    }

    sayHello() {
        console.log(`Hello, I'm ${this.name}`);
    }
}
````


主要区别：
1. 语法更清晰、更面向对象
2. 类声明不会被提升，而函数声明会被提升
3. 类中的代码自动运行在严格模式下
4. 类的方法不可枚举

**扩展**: 尽管语法不同，ES6 的类本质上还是基于原型的继承。

## 题目2: 什么是 `super`？如何在继承中使用？
**答案**: `super` 关键字用于调用父类的构造函数或访问父类的方法。

在构造函数中使用：
```javascript
class Animal {
    constructor(name) {
        this.name = name;
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name); // 调用父类构造函数
        this.breed = breed;
    }
}
```


在方法中使用：
```javascript
class Dog extends Animal {
    speak() {
        super.speak(); // 调用父类的 speak 方法
        console.log('Woof!');
    }
}
```


**扩展**: 在静态方法中，`super` 指向父类本身，而不是父类的原型对象。

## 题目3: 如何实现私有属性和方法？
**答案**: ES2022 引入了私有属性和方法，使用 `#` 前缀：

```javascript
class Person {
    #age = 0;

    constructor(name) {
        this.name = name;
    }

    #privateMethod() {
        console.log('This is private');
    }

    getAge() {
        return this.#age;
    }
}
```


**扩展**: 在 ES2022 之前，通常使用闭包或 Symbol 来模拟私有属性和方法。

## 题目4: 什么是静态方法和静态属性？
**答���**: 静态方法和属性属于类本身，而不是类的实例。使用 `static` 关键字定义：

```javascript
class MathOperations {
    static PI = 3.14159;

    static square(x) {
        return x * x;
    }
}

console.log(MathOperations.PI); // 3.14159
console.log(MathOperations.square(2)); // 4
```


**扩展**: 静态方法通常用于实现不需要访问实例属性的功能。

## 题目5: 如何实现多重继承？
**答案**: JavaScript 不直接支持多重继承，但可以使用混入（Mixin）模式来模拟：

```javascript
const canSwim = {
    swim() {
        console.log('Swimming...');
    }
};

const canFly = {
    fly() {
        console.log('Flying...');
    }
};

class Bird {
    constructor(name) {
        this.name = name;
    }
}

Object.assign(Bird.prototype, canFly, canSwim);

const bird = new Bird('Sparrow');
bird.fly(); // Flying...
bird.swim(); // Swimming...
```


**扩展**: 这种方法可以实现类似多重继承的效果，但要注意可能的命名冲突。
