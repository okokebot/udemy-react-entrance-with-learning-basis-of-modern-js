// スプレッド構文
const arr1 = [1, 2];
console.log(...arr1);

const sumFunc = (num1, num2, num3 = 10) => console.log(num1 + num2 + num3);
sumFunc(...arr1);

// まとめる
const arr2 = [10, 20, 30, 40, 50];
const [num1, num2, ...num3] = arr2;
console.log(num1);
console.log(num2);
console.log(num3); // 配列になる


// 配列のコピー、結合
const arr4 = [10, 20];
const arr5 = [30, 40];

const arr6 = [arr4, arr5];
console.log(arr6); // 2次配列
console.log(arr6[0]); // arry4 の部分
console.log(arr6[0][0]); // arry4 の1要素目

const arr7 = [...arr4, ...arr5];
console.log(arr7); // 1次配列

const arr8 = arr4; // 浅いコピーになる

// map
const nameArr = ["田中", "山田", "hoge"];
const eachName = nameArr.map(name => name);
console.log(eachName); //同じ配列
nameArr.map((name, index) => console.log(`${index + 1} は ${name}`)); // 必要に応じて index を使用可能


// Fillter
const nameArrFillter = nameArr.filter(name => name == "hoge")
console.log(nameArrFillter); //条件に一致するもののみ

const newNameArr = nameArr.map(name => {
    return name === "hoge" ? name : `${name} さん`
})

console.log(newNameArr);

// 三項演算子
// const num = "1300";
const num = 1300;
console.log(typeof num === 'number' ? num.toLocaleString() : '数値をにゅうりょくせえ')

// &&, ||
console.log(false || "値が設定せれていません");
console.log(10 || "値が設定せれていません");
console.log(false && "値が設定されました");
console.log(10 && "値が設定されました");


