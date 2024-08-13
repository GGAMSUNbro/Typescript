// 타입 매니퓰레이션(조작) 연산자들

// 1. in 연산자
// object에 특정 속성이 있음?

// 2. keyof 연산자
// key이름 가져오기
type Human = {
  name: string;
  age: number;
  race: string;
};
type Test = keyof Human; // name | age | race
const b1: Test = "race";

// 3. as 연산자 [타입 단언]
const a4 = document.querySelector(".box") as Element;

type Person = {
  name: string;
  age: number;
  makeKimbob: () => void; //void 비었음
};

const a5: Person = {
  name: "고봉민",
  age: 21,
  makeKimbob: () => {
    alert("김밥만드는중 헤헤");
  },
};

// 강아지 타입[이름,종,나이,달리기,간식먹기]

type Dog = {
  name: string;
  spicious: "푸들" | "달마시안" | "시바";
  age: number;
  run: () => void;
  feed: () => void;
};

const a6: Dog = {
  name: "깜순",
  spicious: "시바",
  age: 3,
  run: () => {
    alert("달리기");
  },
  feed: () => {
    alert("간식먹기");
  },
};

type Fish = { swim: () => void };
type Mammal = { breathe: () => void };
type Bird = { fly: () => void };
type Reptile = { lay: () => void };

const Dolphin: Mammal & Fish = {
  swim: () => alert("수영침"),
  breathe: () => alert("뀨뀨 새끼남"),
};

const croco: Reptile & Fish = {
  lay: () => alert("새끼악어남 ㅅㄱ"),
  swim: () => alert("입쭈악벌림 ㅅㄱ"),
};
