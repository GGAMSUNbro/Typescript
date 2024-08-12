type Coffee1 = {
  name: string;
  price: number;
  hasShot: boolean;
};

const latte: Coffee1 = {
  name: "라떼",
  hasShot: true,
  price: 2500,
};

type drinkItem = {
  link: string;
  name: string;
  starRate: number;
  review: number;
  price: number;
  discountPercent: number;
};

const birak: drinkItem = {
  link: "https://www.coupang.com/vp/products/8017247014?itemId=22392859919&vendorItemId=89437800492&q=%EB%B9%84%EB%9D%BD%EC%8B%9D%ED%98%9C+%EC%A0%9C%EB%A1%9C&itemsCount=46&searchId=83dd708abd9b4d03a75db3cdcb527658&rank=1&isAddedCart=",
  name: "팔도 비락식혜 제로",
  starRate: 5,
  review: 2235,
  price: 26400,
  discountPercent: 52,
};
