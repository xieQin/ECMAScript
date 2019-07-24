## Decorator

装饰器是一种函数，写成@ + 函数名。它可以放在类和类方法的定义前面

```js
@frozen class Foo {
  @configurable(false)
  @enumerable(true)
  method() {}

  @throttle(500)
  expensiveMethod() {}
}
```

```js
@testable
class MyTestableClass {
  // ...
}

function testable(target) {
  target.isTestable = true;
}

MyTestableClass.isTestable // true
```

装饰器的行为类似如下
```js
@decorator
class A {}

// 等同于

class A {}
A = decorator(A) || A;
```
装饰器对类的行为的改变，是代码编译时发生的，而不是在运行时。这意味着，装饰器能在编译阶段运行代码。也就是说，装饰器本质就是编译时执行的函数

装饰器只能用于类和类的方法，不能用于函数，因为存在函数提升