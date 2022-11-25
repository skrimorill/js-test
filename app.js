// // //1 
// let array = [1, 2, 3, 4, 5, 6, 7, 8]

// // function forEach(array, fn) {
// //   // let array = this
// //   for (const el of array) {
// //     callback(el);
// //   }
// //   return console.log(el);
// // }

// // forEach(array, fn)
// // //2
// function map(array, fn) {
//   const arr2 = [];
//   for (let i = 0; i < array.length; i++) {
//     fn(array[i], i, array);
//     arr2.push(fn(array[i] ** 2));
//   }
//   return arr2;
// }
// console.log(map(array, fn));
// //3 
// let res = initial;
// for (const el of array) {
//   res += el;
// }
// return console.log(res);

//4
// let obj = { name: 'Сергей', lastName: 'Петров' }

// function upperProps(obj) {
//   const res = []
//   for (const prop in obj) {
//     res.push(prop.toUpperCase());
//   }
//   return res
// }


// console.log(upperProps(obj))

// function createProxy(obj) {

// }

// let obj = { na: 0, la: 0 }

// const op = new Proxy(obj, {
//   get(target, prop) {
//     return target[prop]
//   },
//   set(target, prop, value) {
//     if(prop in target) {
//       target[prop] = value ** 2
//     } else {
//       throw new Error
//     }
    
//   }
// })

// // console.log(op.name);

// // let a = 1, b = 2;
// // function fn1(a, b) {
// //   function fn2(a, b) {
// //     return a - b 
// //   }
// //   return fn2(2*a, 2*b)
// // }
// // console.log(fn1(b, a));



// /* ДЗ 2 - работа с массивами и объектами */

// /*
//  Задание 1:

//  Напишите аналог встроенного метода forEach для работы с массивами
//  Посмотрите как работает forEach и повторите это поведение для массива, который будет передан в параметре array

//  Пример:
//    forEach([1, 2, 3], (el) => console.log(el))
//  */
//    function forEach(array, fn) {
//     for (let i = 0; i < array.length; i++) {
//       fn(array[i], i, array);
//     }
//   }
  
//   /*
//    Задание 2:
  
//    Напишите аналог встроенного метода map для работы с массивами
//    Посмотрите как работает map и повторите это поведение для массива, который будет передан в параметре array
  
//    Пример:
//      map([1, 2, 3], (el) => el ** 2) // [1, 4, 9]
//    */
//   function map(array, fn) {
//     const arr2 = [];
//     for (let i = 0; i < array.length; i++) {
//       arr2[i] = fn(array[i], i, array);
//       // arr2.push(array[i] ** 2);
//     }
//     return arr2;
//   }
  
//   /*
//    Задание 3:
  
//    Напишите аналог встроенного метода reduce для работы с массивами
//    Посмотрите как работает reduce и повторите это поведение для массива, который будет передан в параметре array
  
//    Пример:
//      reduce([1, 2, 3], (all, current) => all + current) // 6
//    */
//   function reduce(array, fn, initial) {
//     let ss = initial || array[0];
//     let i = initial ? 0 : 1;
  
//     for (; i < array.length; i++) {
//       ss = fn(ss, array[i], i, array);
//     }
  
//     return ss;
//   }
  
//   /*
//    Задание 4:
  
//    Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистр и вернуть в виде массива
  
//    Пример:
//      upperProps({ name: 'Сергей', lastName: 'Петров' }) вернет ['NAME', 'LASTNAME']
//    */
//   function upperProps(obj) {
//     const res = [];
//     for (const prop in obj) {
//       res.push(prop.toUpperCase());
//     }
//     return res;
//   }
  
//   /*
//    Задание 5 *:
  
   
//    Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат
  
//    Пример:
//      const obj = createProxy({});
//      obj.foo = 2;
//      console.log(obj.foo); // 4
//    */
//   function createProxy(obj) {
//     const op = new Proxy(obj, {
//       get(target, prop) {
//         return target[prop];
//       },
//       set(target, prop, value) {
//         if (prop in target) {
//           target[prop] = value ** 2;
//         } else {
//           throw new Error('Error');
//         }
//       }
//     })
//   }
  
//   export { forEach, map, reduce, upperProps, createProxy };

// const arr1 = [1, 2, 3, 4, 5]
// const arr2 = [100, 2, 3, 4, 5]
// const arr3 = []
// const nArr = 88

// function isAllTrue(array, fn) {
//   const total = 0
//   try {
//     if(!Array.isArray(array)) {
//       throw new Error ("empty array")
//     } else if (array.length < 1) {
//       throw new Error ("empty array")
//     } else if (typeof fn !== "function") {
//       throw new Error ("fn is not a function")
//     }
//     for (const el of array) {
//       if(fn(el)) {
//         ++total 
//       }
//     }
//     return total = array.length
//   }
//   catch (e) {
//     console.log(e.message);
//   }
// }



// const fn = function(n, array) {
//   let total = 0
//   for (let el of array) {
//     if(el < n) total++
//   }
//   return total === array.length
// }

// console.log(isAllTrue(arr2, fn));
// // console.log(fn(10, arr1));


// function returnBadArguments(fn, ...args) {
//   let arr7 = []
//   for (let el of args) {
//     arr7.push(fn(el))
//   }
//   return arr7
// }
// const fn = function(item) {
//   return item ** 2
// }

// console.log(returnBadArguments(fn, 1, 2, 3, 4, 5, 6, 7, 8));

// function calculator(number = 0) {
//   if (!Number.isFinite(number)) {
//     throw new Error('number is not a number');
//   }

//   return {
//     sum(...args) {
//       let total = number;
//       for (const el of args) {
//         total += el;
//       }
//       return result
//     },
//     dif(...args) {
//       let total = number;
//       for (const el of args) {
//         total -= el;
//       }
//       return result
//     },
//     div(...args) {
//       let total = number;
//       for (const el of args) {
//         if (el === 0) {
//           throw new Error('division by zero');
//         }

//         total /= el;
//       }
//       return result
//     },
//     mul(...args) {
//       let total = number;
//       for (const el of args) {
//         total *= el;
//       }
//       return result
//     }
//   }
// };

// console.log(calculator(12, 11));






// let arr = [1, 2, 3, 4, 5];

// let each = function(array) {
//   let res = 0
//   for(let el of array) {
//     res += el
//   }
//   return console.log(res)
// }

// // console.log(each(arr));

// each(arr)


// WEEK 3

// function createDivWithText(text) {
//   let div = document.createElement('div')
//   div.innerHTML = text
//   return div
// }


// function findAllPSiblings(where) {
//   let total = []
//   for (let el of where.childNodes) {
//     if(el.nodeType === 1)
//     total.push(el)
//     for (let item of total) {
//       if(item.nextElementSibling.tagName('p')) {
//         console.log(item);
//       }

//     }
//   }
//   return total
// }

// console.log(findAllPSiblings(document.body));

// function findError(where) {
//   const result = [];

//   for (const child of where.childNodes) {
//     if(child.nodeType === 1)
//     result.push(child.textContent);
//   }

//   return result;
// }

// console.log(findError(document.body));

// function deleteTextNodes(where) {
//   for (let el of where.childNodes)
//   if (el.nodeType === 3) {
//     el.remove()
//   }
//   return where
// }

// console.log(deleteTextNodes(document.body));


// tags: { DIV: 1, B: 2},
// classes: { "some-class-1": 2, "some-class-2": 1 },
// texts: 3

// function collectDOMStat(root) {
//   let els = []
//   let els2 = []
//   let obj = {}
//   let tags = {}
//   let classes = {}
//   let texts = 0
  
//   for (let el of root.childNodes) {
//     if (el.classList) {
//     els.push(el.className)
//     els2.push(el.tagName)
//     } if (el.nodeType === 3) {
//       ++texts
//     }

//     for (let item of el.childNodes) {
//       if (item.classList) {
//         els.push(item.className)
//       } if (item.tagName !== undefined) {
//         els2.push(item.tagName)
//     } if (item.nodeType === 3) {
//       ++texts
//     }
//     } 
//   }

//   let class1 = els.filter(e => e != '').join(' ').split(' ')
//   class1.forEach( a => {
//     classes[a] = classes[a] + 1 || 1
//   })

//   let tag1 = els2.filter(e => {
//     tags[e] = tags[e] + 1 || 1
//   })
  
//   obj.classes = classes
//   obj.tags = tags
//   obj.texts = texts

//   console.log(obj.classes);

//   return obj
// }

// console.log(collectDOMStat(document.body));



// function observeChildNodes(where, fn) {
//   let observ = new MutationObserver(MutationRecord => {
//     console.log(MutationRecord);
//   })
// }

document.addEventListener('DOMContentLoaded', () => {
  let targetEl = document.querySelector('body')

  console.log(targetEl);


  function callback(mutations, observer) {
    console.log(mutations);
  }

  let observer = new MutationObserver(callback)

  observer.observe(targetEl, {
    childList: true,
    attributes: true,
    characterData: true,
  })
})



let ss = document.querySelector('.five')
let button = document.querySelector('.button')

// observ.observe(second, {
//   childList: true,
// })

button.addEventListener('click', () => {
  ss.remove()
})


// console.log(observ.observe(second, {
//   childList: true,
// }))

