class Restaurant {
    constructor (props) {
        this.comboDiscount = props.discount
        this.menu = props.menu
    }
  
    get combo() {
      let comboPrice = this.menu.fries + this.menu.burger
      return `$${(comboPrice * this.comboDiscount).toFixed(2)}`
    }
  
    set combo(price) {
      this.comboPrice = price;
    }
  }
  
  let bobsBurgers = new Restaurant({
    discount: 0.85,
    menu: {
        fries: 1.29,
        burger: 3.69
    }
  })

console.log(bobsBurgers)
console.log(bobsBurgers.combo)
// bobsBurgers.comboPrice(29.99);
bobsBurgers.combo = 29.99;
console.log(bobsBurgers.comboPrice);