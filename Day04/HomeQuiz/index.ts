/* 퀴즈1: 피자 메뉴 정의
  다음은 피자 주문을 위한 타입을 정의하는 문제입니다. 
  다음과 같은 속성을 포함하도록 Pizza 타입을 정의하세요.
  
  */

type Dough = "오리지널" | "씬" | "치즈크러스트";
type Cheese = "모짜렐라" | "고르곤졸라" | "체다";
type Topping = "페퍼로니" | "베이컨" | "양파" | "올리브" | "피망";
type sauces = "토마토" | "크림" | "핫소스";

type pizza<D, C, T, S> = {
  dough: Dough;
  cheese: Cheese;
  topping: Topping;
  sauce: sauces[];
};
/*
  퀴즈2: 아이스크림 메뉴 정의
  다음은 아이스크림 주문을 위한 타입을 정의하는 문제입니다.
  다음과 같은 속성을 포함하도록 IceCream 타입을 정의하세요

  베이스(Base): 
  토핑(Topping): 
  시럽(Syrup):   */

type Base = "바닐라" | "초콜릿" | "딸기";
type Toppings = "아몬드" | "초콜릿 칩" | "카라멜";
type Syrup = "초콜릿" | "카라멜" | "딸기";

type IceCream<B, T, S> = {
  base: Base;
  topping: Toppings;
  syrup: Syrup;
};

/*
  퀴즈 3: 라면 메뉴 정의
  
  면(Noodle): 
  국물(Broth):
  토핑(RTopping): 
  추가(AddOn):  (선택적)
 */

type Noodle = "소면" | "중면" | "우동면";
type Broth = "간장" | "된장" | "매운맛";
type RTopping = "계란" | "차슈" | "파" | "김치";
type AddOn = "떡" | "치즈" | "만두";

type AddOnType = {
  first: AddOn;
  second: AddOn;
};

type Ramen<Noodle, Broth, RTopping, AddOn> = {
  noodle: Noodle;
  broth: Broth;
  topping: RTopping;
  addon: AddOn;
};

const kyorets: Ramen<Noodle, Broth, RTopping, Partial<AddOnType>> = {
  noodle: "소면",
  broth: "된장",
  topping: "차슈",
  addon: { first: "떡", second: "치즈" },
};
