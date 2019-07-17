# Proxy 代理器

在目标对象之前架设一层代理，外界对该对象的访问，都必须先经过这层代理

```js
var obj = new Proxy({}, {
  get: (target, key, receiver) => {
    console.log(`getting ${key}!`)
    return Reflect.get(target, key, receiver)
  },
  set: (target, key, value, receiver) =>{
    console.log(`setting ${key}!`)
    return Reflect.set(target, key, value, receiver)
  }
})
```

ES6 原生提供 Proxy 构造函数，用来生成 Proxy 实例
```js
var proxy = new Proxy(target, handler)
```

### get()
get方法用于拦截某个属性的读取操作，可以接受三个参数，依次为目标对象、属性名和 proxy 实例本身（严格地说，是操作行为所针对的对象），其中最后一个参数可选。

### set()
set方法用来拦截某个属性的赋值操作，可以接受四个参数，依次为目标对象、属性名、属性值和 Proxy 实例本身，其中最后一个参数可选。

### apply()
apply方法拦截函数的调用、call和apply操作
apply方法可以接受三个参数，分别是目标对象、目标对象的上下文对象（this）和目标对象的参数数组

### has()
has方法用来拦截HasProperty操作，即判断对象是否具有某个属性时，这个方法会生效。典型的操作就是in运算符
has方法可以接受两个参数，分别是目标对象、需查询的属性名
has拦截对for...in循环不生效

### construct()
construct方法用于拦截new命令
```js
var handler = {
  construct (target, args, newTarget) {
    return new target(...args);
  }
}
```

### deleteProperty()

### defineProperty()

### getOwnPropertyDescriptor()

### getPrototypeOf()

### getPrototypeOf()

### ownKeys()

### preventExtensions()

### setPrototypeOf()

## Proxy.revocable()
Proxy.revocable方法返回一个可取消的 Proxy 实例

## this 问题
在 Proxy 代理的情况下，目标对象内部的this关键字会指向 Proxy 代理
```js
const target = {
  m: function () {
    console.log(this === proxy);
  }
};
const handler = {};

const proxy = new Proxy(target, handler);

target.m() // false
proxy.m()  // true
```