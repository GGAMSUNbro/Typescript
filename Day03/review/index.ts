// 버튼 스타일 적용하기

// ButtonSize 타입을 정의. 다음 중 하나의 값을 가질 수있음. "small","medium","large"
// ButtonColor 타입을 정의. 다음 중 하나의 값을 가질 수있음. "blue","green","red","purple"
// ButtonPadding 타입을 정의. 다음 중 하나의 값을 가질 수있음. "5px","10px","15px"
// ButtonBorder 타입을 정의. 다음 중 하나의 값을 가질 수있음. "2px solid black", "2px solid white"
// ButtonStyle 타입을 정의. 이 타입은 size,color,padding,border,속성을 포함하며, 각각의 속성은 위에서 정의한 타입 사용

type ButtonSize = "small" | "medium" | "large";
type ButtonColor = "blue" | "green" | "red" | "purple";
type ButtonPadding = "5px" | "10px" | "15px";
type ButtonBorder = "2px solid black" | "2px solid white";

type ButtonStyle = {
  size: ButtonSize;
  color: ButtonColor;
  padding: ButtonPadding;
  border: ButtonBorder;
};
