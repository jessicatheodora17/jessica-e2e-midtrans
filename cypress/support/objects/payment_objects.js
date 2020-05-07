class payment {
  constructor() {
    // selector input and button
    this.buyButton = '#container > div > div > div.main-content > div.ad-box-wrapper > div > div > a'
    this.checkoutButton = '#container > div > div > div.cart-content.buying > div.cart-action > div.cart-checkout'
    this.iframe = 'iframe[id="snap-midtrans"]'
    this.continueButton = '.button-main-content'
    this.creditCardOption = 'a[class="list with-promo"]'
    this.cardNumber = 'input[name="cardnumber"]'
    this.expiryDate = 'input[placeholder="MM / YY"]'
    this.CVV = 'input[placeholder=123]'
    this.payNow = 'a[class="button-main-content"]'
    this.iframePass = 'iframe[style="width: 100%; height: 100%; border: 0px; position: absolute; left: 0px; top: 0px;"]'
    this.password = 'input[placeholder="112233"]'
    this.ok = 'button[type="submit"]'
  }
}
module.exports = payment