// Напиши функцію isEnoughCapacity(products, containerSize), яка обчислює, чи помістяться всі товари в контейнер при пакуванні.

// Функція оголошує два параметри:

// products — об’єкт, у якому ключі містять назви товарів, а їхні значення — кількість цих товарів. Наприклад, { apples: 2, grapes: 4 }.
// containerSize — число, максимальна кількість одиниць товарів, яку в себе може вмістити контейнер.
// Функція має повернути результат перевірки, чи помістяться всі товари в контейнер. Тобто порахувати загальну кількість товарів в об’єкті products і повернути true, якщо вона менше або дорівнює containerSize, і false, якщо ні.

// На що буде звертати увагу ментор при перевірці:
// Оголошена функція isEnoughCapacity(products, containerSize)
// Виклик isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8) повертає true
// Виклик isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12) повертає false
// Виклик isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14) повертає true
// Виклик isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7) повертає false


function isEnoughCapacity(products, containerSize) {
  let totalCapacity = 0;
  for (let key in products) {
    totalCapacity += products[key];
    products.apples
    products.grapes
    products.carrots
  }
  return totalCapacity <= containerSize;
};


console.log(
    isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
); // true

console.log(
  isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
); // false

console.log(
  isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)
); // true

console.log(
  isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 ,nuts:55}, 7)
); // false





// let kaminec = {
//   color: "gray",
//   size: {
//     height: 12, width: 22, lenght: 25
//   },
//   shape: "big",
//   addition: "stiker",
//   description: "",
//   weiht: 12.5,
//   likes: 12
//   img: ""
// }
