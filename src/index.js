console.clear();

// const val5 = ["dog", "cat"];

// console.log(val5);

// val5[0] = "bird";
// val5.push("monkey");

// console.log(val5);

/**
 * テンプレート文字列
 */

// const name = "tea";
// const age = 28;

// // 私の名前はteaです。年齢は28歳です。
// // 従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

// // テンプレート文字列
// const message2 = `私の名前は${name}です。年齢は${age}です。`;

// console.log(message2);

/**
 * アロー関数
 */
//従来の関数

// function func1(str) {
//   return str;
// }

// console.log(func1("test"));

// // アロー関数
// const func2 = (str) => `関数は${str}です`;

// console.log(func2("test_アロー"));

// const func3 = (num1, num2) => num1 + num2;

// console.log(func3("私は", "tea"));

/**
 * 分割代入
 */

// const mp = {
//   name: "tea",
//   age: 28
// };

// const message1 = `名前は${mp.name}です。年齢は${mp.age}です`;
// // const message1 = `名前は${mp.name}です。年齢は${mp.age}です`;
// console.log(message1);

// const { name, age } = mp;

// const message2 = `名前は${name}です。年齢は${age}です`;
// console.log(message2);

// const mp = ["tea", 28];
// const [name, age] = mp;

// const message3 = `名前は${name}です。年齢は${age}です`;
// console.log(message3);

/**
 * デフォルト値
 */
// const sayHello = (name = "ゲスト") => console.log(`こんにちは${name}さん`);
// sayHello("tea");

/**
 * スプレッド構文
 */

//配列の展開
// const arr1 = [1, 2, 3, 4, 5, 6, 7];

// console.log(arr1);
// console.log(...arr1);

// const sum = (num1, num2, num3) => console.log(num1 + num3 - num2);
// sum(...arr1);

// const arr2 = [1, 2, 3, 4, 5, 6, 7];
// const [num1, num2, ...arr3] = arr2;

// console.log(num1);
// console.log(num2);
// console.log(arr3);

// 配列のコピーや結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// const arr8 = arr4;
// console.log(arr8);
// arr8[0] = 100;
// console.log(arr8);
// console.log(arr4);

// const sum = (num1, num2, num3) => console.log(num1 + num3 - num2);
// sum(...arr6);

/**
 * map や filter
 */

// const nameArr = ["tea", "pot", "dev"];

//従来のfor
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(nameArr[index]);
// }

// //map
// const nameArr2 = nameArr.map((name) => {
//   return name;
// });

// console.log(nameArr2);

// nameArr.map((name) => console.log(name));

// console.log(nameArr2);

// Filter

// const numArr = [1, 2, 3, 4, 5];

// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 0;
// });

// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です。`));

// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "tea") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です。`));

/**
 * 三項演算子
 */

//ある条件  ? 条件がtrueの時、 ; 条件がfalseの時

// const val1 = 1 > 0 ? `tureです` : `falseです`;

// console.log(val1);

// const num = "1300";
// // console.log(num.toLocaleString());

// const formattedNum =
//   typeof num === `number` ? num.toLocaleString() : `数値を入力してください`;

// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? `100を超えています` : `許容範囲内です`;
// };

// console.log(checkSum(100, 1));

/**
 * 論理演算子の本当の意味を知ろう
 */

// const flg1 = true;
// const flg2 = true;
// if (flg1 || flg2) {
//   console.log(`1か2がtureになります`);
// }
// if (flg1 && flg2) {
//   console.log(`1も2もtureになります`);
// }

//  || は　左側がfalseとなるとき右側を返す
// const num = 100;
// const fee = num > 90 || "金額未設定です";

// console.log(fee);

// &&　は左側がtrueなら右側を返す
const num2 = 100;
const fee2 = num2 && `何赤設定されました`;

console.log(fee2);
