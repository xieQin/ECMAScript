// proxy 代理对象
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
obj.count = 1
++ obj.count

// defineProperty 劫持
var obj2 = {}
let temp = null
Object.defineProperty(obj2, 'count', {
  get: () => {
    console.log('get')
    return temp
  },
  set: (val) => {
    console.log('set')
    temp = val
  }
})
obj2.count = 1
obj2.count

// proxy作为其他对象的远行对象
var proxy = new Proxy({}, {
  get: () => {
    return 35
  }
})
let o = Object.create(proxy)
o.time

// 使用proxy实现数组读取负数的索引
const collectData = (...data) => {
  const handler = {
    get: (target, key, receiver) => {
      let index = Number(key)
      if (index) {
        key = String(target.length + index)
      }
      return Reflect.get(target, key, receiver)
     },
  }
  let target = []
  target.push(...data)
  return new Proxy(target, handler)
}
let data = collectData('a', 'b', 'c')
console.log(data[-1])

// 使用使用Proxy保证set的属性值符合要求
const validator = {
  set: (target, key, value, receiver) => {
    if (key == 'age') {
      if (typeof value != 'number') {
        throw new Error('age property should be number')
      }
      if (value >= 18) {
        throw new Error('age value should less than 18')
      } 
    }
    return Reflect.set(target, key, value, receiver)
  }
}
let person = new Proxy({}, validator)
person.age = 10
// person.age = 'young'
// person.age = 30

