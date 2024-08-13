// CardHeight: xs, sm, md, lg, xl
// CardWidth: xs, sm, md, lg, xl
// CardBG: primary, secondary, dark
// CardChild: top, middle, bottom
// CardClick: 함수(알럿나오도록)

// applyCard:함수 만들기

type CardHeight = "xs" | "sm" | "md" | "lg" | "xl";
type CardWidth = "xs" | "sm" | "md" | "lg" | "xl";
type CardBG = "primary" | "secondary" | "dark";
type CardChild = "top" | "middle" | "bottom";
type CardClick = { move: () => void };

type Card = {
  height: CardHeight;
  width: CardWidth;
  backgroundColor: CardBG;
  position: CardChild;
  click: CardClick;
};

const applyCard = (tag: HTMLElement, Card: string) => {
  tag.style.height = Card.height;
  tag.style.width = Card.width;
  tag.style.backgroundColor = Card.backgroundcolor;
  tag.style.position = Card.position;
};
