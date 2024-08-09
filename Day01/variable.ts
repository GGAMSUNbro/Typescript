//1. 타입 어노테이션
const coffee1: string = "1";

//2. 타입 추론
const coffee = "아메리카노";

const coffeeList: string[] = ["아메리카노", "라떼", "초코초코"];

// number 배열 변수만들기
// boolean 배열 변수 만들기 그리고 js화 시키기

const test = (arr: string[]) => {
  arr.forEach((x) => {
    x.toUpperCase();
  });
};

const nums: number[] = [1, 2, 3, 4, 5];
const bolls: boolean[] = [true, false, true, false];

// name, position, num
const test1: object = { name: "shinji", position: "middle", num: "7" };
const test2: {
  name: string;
  position: string;
  num: number;
} = {
  name: "신지",
  position: "middle",
  num: 7,
};
