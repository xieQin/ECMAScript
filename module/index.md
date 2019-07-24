# Module

ES6 模块的设计思想是尽量的静态化，使得编译时就能确定模块的依赖关系，以及输入和输出的变量

ES6 模块不是对象，而是通过export命令显式指定输出的代码，再通过import命令输入

export default就是输出一个叫做default的变量或方法，然后系统允许你为它取任意名字
export default命令其实只是输出一个叫做default的变量，所以它后面不能跟变量声明语句
```js
// 正确
export var a = 1;

// 正确
var a = 1;
export default a;

// 错误
export default var a = 1;
```

### 浏览器加载
script标签打开defer或async属性
defer与async的区别是：defer要等到整个页面在内存中正常渲染结束（DOM 结构完全生成，以及其他脚本执行完成），才会执行；
async一旦下载完，渲染引擎就会中断渲染，执行这个脚本以后，再继续渲染。
defer是“渲染完再执行”，async是“下载完就执行”
如果有多个defer脚本，会按照它们在页面出现的顺序加载，而多个async脚本是不能保证加载顺序的

### 加载规则
```html
<script type="module" src="./foo.js"></script>
<!-- 等同于 -->
<script type="module" src="./foo.js" defer></script>
```
