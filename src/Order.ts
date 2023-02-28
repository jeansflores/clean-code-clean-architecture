import Coupon from "./Coupon";
import Cpf from "./Cpf";
import Product from "./Product";

export default class Order {
  private cpf: Cpf;
  products: Product[] = [];
  coupons: Coupon[] = [];

  constructor(cpf: string) {
    this.cpf = new Cpf(cpf);
  }

  addProduct(product: Product): void {
    this.products.push(product);
  }

  addCoupon(coupon: Coupon): void {
    this.coupons.push(coupon);
  }

  getTotal(): number {
    let amount = 0;

    this.products.forEach((product) => {
      amount += product.price * product.quantity;
    });

    this.coupons.forEach((coupon) => {
      amount -= amount * (coupon.discount / 100);
    });

    return amount;
  }
}
