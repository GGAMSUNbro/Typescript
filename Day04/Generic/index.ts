// generic -> generalize: 일반화하다.

type My<A, B> = {
  first: A;
  second: B;
};

const test122: My<number, string> = {
  first: 1,
  second: "문자",
};

type Mcdonald<M extends McMorningMain | NormalMain, S, D> = {
  main: M;
  side: S;
  drink: D;
};

type McMorningMain = "핫케익" | "맥머핀" | "브렉퍼스트";
type McMorningSide = "해쉬브라운" | "에그";
type McMorningDrink = "드립커피" | "탄산";

type NormalMain = "상하이 버거" | "빅맥" | "스낵랩";
type NormalSide = "감자튀김" | "맥너겟";
type NormalDrink = "탄산" | "드립커피" | "우유";

const shinji: Mcdonald<McMorningMain, McMorningSide, McMorningDrink> = {
  main: "맥머핀",
  side: "에그",
  drink: "드립커피",
};

const kang: Mcdonald<NormalMain, NormalSide, NormalDrink> = {
  main: "빅맥",
  side: "맥너겟",
  drink: "드립커피",
};

// 서브웨이 메뉴 <빵, 치즈, 야채, 소스>

type Subway<b, c, v, s> = {
  bread: b;
  cheese: c;
  vegetable: v[];
  sauce: s;
};

type SubwayBread = "화이트" | "하티" | "파마산오레가노" | "허니오트";
type SubwayCheese = "슈레드" | "아메리칸" | "고메";
type SubwayVegetable = "양상추" | "피망" | "피클" | "오이";
type Sauce = "렌치" | "마요네즈" | "핫칠리" | "머스타드";

type SauceType = {
  first: Sauce;
  second: Sauce;
};

const canoo: Subway<
  SubwayBread,
  SubwayCheese,
  SubwayVegetable,
  Partial<SauceType>
> = {
  bread: "파마산오레가노",
  cheese: "슈레드",
  vegetable: ["양상추", "오이", "피망", "피클"],
  sauce: {
    first: "렌치",
  },
};
