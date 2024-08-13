type MagaCoffee = {
  [key: string]: string;
};
type CoffeeMenu = "name" | "price";
type CoffeeIngredient = "kcal" | "shot" | "size";
type CoffeeType = CoffeeMenu | CoffeeIngredient;

type VentiCoffee = {
  [key in CoffeeType]: string;
};

const menu: VentiCoffee = {
  name: "아아",
  price: "1500",
  kcal: "250",
  shot: "2",
  size: "small",
};

// 자동차 객체 변수가 필요한데
// 꼭 모델, 생산연도, 엔진종류, 가격, 색상이 필요해요
// model, productionDate, engine, price, color

type CarDescription = "model" | "productionDate" | "color" | "engine" | "price";

type Car = {
  [key in CarDescription]: string;
};

const tesla: Car = {
  model: "t3",
  productionDate: "2022",
  color: "blue",
  engine: "hybrid",
  price: "5000",
};
