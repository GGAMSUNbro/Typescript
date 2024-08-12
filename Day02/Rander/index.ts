// BoxStyle이라는 타입을 만들기
// width, height, backgroundColor[5개만], borderRadius, border
// small -> 50,50
// medium -> 100,100
// large -> 150,150

type BoxBG = "blue" | "green" | "red" | "yellow" | "pink";
type BoxSize = "small" | "medium" | "large";
type BoxBR = "0px" | "4px" | "10px" | "9999px";
type BoxBorder = "1px solid black" | "1px solid grey";
type BoxStyle = {
  size: BoxSize;
  backgroundColor: BoxBG;
  borderRadius: BoxBR;
  border: BoxBorder;
};

const myBoxStyle: BoxStyle = {
  size: "large",
  backgroundColor: "blue",
  border: "1px solid black",
  borderRadius: "9999px",
};

// applyStyle이라는 함수 만들기
// 매개변수는 element, style 넣으면 element에 style이 적용되는
// 로직만들기

const applyStyle = (element: string, style: string) => {
  return;
};

// ts 를 js로 바꾸곡 html에 js넣어서 실행
