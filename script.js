//challenge: 1 (Greatest of two)
let greater = (x,y) => {
    if(x>y)
       console.log(x);
    else
        console.log(y);
} 
greater(10,20);

//challenge: 2 (The lengthy word)
const words = ['george', 'alice', 'alex', 'john', 'infanta', 'xavior', 'lourdhAntony'];
const findScaryWord = words.filter(name => {
    return name.length>10;
});
console.log(findScaryWord);

//challenge: 3 (Net price)
const totalPrice = (arr) => {
    let cost = 0;
    arr.forEach((price) => {
      cost += price;
    })
    return cost;
}
const price = [200,120,100,108,135,162,25,170,80,110];
let netprice=0;
console.log(totalPrice(price));

//challenge: 3.1 (A generic Sum())
const arr = [63, 122, 'audi', 61, true, 'volo', '20', 'lamborghini', 38, 156];
avg = (arr) => {
  let totalArray = 0;
  for (i = 0; i < arr.length; i++) {
    if (typeof (arr[i]) == 'string' || typeof (arr[i]) == 'boolean') {
      if (typeof (arr[i]) == 'string') { 
        totalArray += arr[i].length;
      }
      else {
        let temp;
        temp = Number(arr[i]);
        totalArray += temp;
      }
    }
    else {
      totalArray += arr[i];
    }
  }
  return totalArray;
}
console.log(avg(arr));

//chalenge: 4 (Mid-point)

let center = avg(mixedArray)/mixedArray.length;
console.log("midpoint",center);

//chalenge: 4.1 (Array of Numbers)

var array1 = [10, 20, 30, 40, 50, 60];
var sum = (array1) => 
{
    let temp = 0;
    for (i = 0; i < array1.length;i++)
    {
      temp += array1[i];
    }
    return temp;
};
console.log(sum(array1) / array1.length);

//chalenge: 4.2 (Array of Strings)

const items = ["bread","jam","milk","egg","flour","oil", "rice","coffe powder","sugar","salt",];
  var len = 0;
  var tot = 0;
  var averageWordLength = (items) => {
    for (i = 0; i < items.length; i++) {
      let j = items[i].length;
      len += j;
    }
    tot = len / items.length;
    return tot;
  };
console.log(averageWordLength(items));

//challenge: 4.3 (A generic avg)

const arr2 = [63, 122, 'audi', 61, true, 'volvo', '20', 'lamborghini', 38, 156];
avg = (arr2) => {
let totalArray = 0;
for (i = 0; i < arr2.length; i++) {
if (typeof (arr2[i]) == 'string' || typeof (mixedArray[i]) == 'boolean') {
  if (typeof (arr2[i]) == 'string') {  
    totalArray += arr2[i].length;
  }
  else {
    let temp;
    temp = Number(arr2[i]);
    totalArray += temp;
  }
}
else {
  totalArray += arr2[i];
}
}
return totalArray;
}
console.log(avg(arr2) / arr2.length);

//challenge: 5 (Unique Arrays)

var arr3 = ['bread', 'jam', 'milk', 'egg', 'flour', 'oil', 'rice', 'coffee powder', 'sugar', 'salt', 'egg', 'flour'];
var unique = arr3.filter((x, i) => arr3.indexOf(x) === i);
console.log(unique);         

//challenge: 6 (Find Elements)

const alphas = ['door', 'window', 'ceiling', 'roof', 'plinth', 'tiles', 'ceiling', 'flooring'];
var isPresent = alphas.filter(words => words == 'roof');
checkval = () => {
  if (isPresent.length) {
    return true;
  }                           
  else {
    return false;
  }
}
console.log(checkval());

//challenge: 7 (Count reapted)

const words = ['machine', 'matter', 'subset', 'trobling', 'starting', 'matter', 'eating', 'matter', 'truth', 'disobedience', 'matter'];
occurence = (words) => {
  let len = 0;
  words.forEach((word) => {
    if (word == 'matter') {
      len += 1; 
    }
  });
  return len;
}
console.log(occurence(words));

//challenge: 8 (Product of adjacent)

const multiplyFourNumbers = (a, b, c, d) => {
  return a * b * c * d;
}
const maximumProduct = (arr3) => {
  let maxProduct = 0;
  for (let i = 0; i < arr3.length; i++) {
    for (let j = 0; j < arr3.length; j++) {
      if ((j - 3) >= 0) {
        let product1 = multiplyFourNumbers(arr3[i][j], arr3[i][j - 1], arr3[i][j - 2], arr3[i][j - 3]);
        if (product1 > maxProduct) {
          maxProduct = product1;
        }
      }
      if ((i - 3) >= 0) {  
        let product2 = multiplyFourNumbers(arr3[i][j], arr3[i - 1][j], arr3[i - 2][j], arr3[i - 3][j]);
        if (product2 > maxProduct) {
          maxProduct = product2;
        }
      }
    }
  }
  return maxProduct;
}
const matrix = [[1, 2, 3, 4, 5],
[1, 25, 3, 4, 5],
[1, 20, 3, 4, 5],
[1, 20, 3, 4, 5],
[1, 4, 3, 4, 5]
];
console.log(maximumProduct(matrix));

//challenge: 8.1 (Product of Diagonals)

const maximumProductOfDiagonal = (arr) => {
  let maxProduct = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if ((j - 3) >= 0 && (i - 3) >= 0) {
        let product1 = multiplyFourNumbers(arr[i][j], arr[i - 1][j - 1], arr[i - 2][j - 2], arr[i - 3][j - 3]);
        if (product1 > maxProduct) {
          maxProduct = product1; 
        }
      }
      if ((i - 3) >= 0 && (j - 1) <= 0) {
        let product2 = multiplyFourNumbers(arr[i][j], arr[i - 1][j + 1], arr[i - 2][j + 2], arr[i - 3][j + 3]);
        if (product2 > maxProduct) {
          maxProduct = product2;
        }
      }
    }
  }
  return maxProduct;
}
console.log(maximumProductOfDiagonal(matrix));