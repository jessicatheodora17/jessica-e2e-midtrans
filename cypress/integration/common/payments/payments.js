import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps'

const payment = require('../../../support/objects/payment_objects.js')
const paymentObjects = new payment()

const getIframeBody = () => {
  return cy
    .get(paymentObjects.iframe)
    .its('0.contentDocument.body').should('not.be.empty')
    .then(cy.wrap)
}

// Background
Given(`I go to Demo Midtrans Page`, () => {
  cy.visit(Cypress.env('CMS_URL'))
})
When(`I click BUY NOW button`, () => {
  cy.get(paymentObjects.buyButton)
    .click()
})
And(`I click CHECKOUT button`, () => {
  cy.get(paymentObjects.checkoutButton)
    .click()
    .wait(3000)
})
And(`I click CONTINUE button`, () => {
  getIframeBody()
    .find(paymentObjects.continueButton)
    .should('have.text', 'Continue')
    .click()
})
And(`I choose payment with Credit Card`, () => {
  getIframeBody()
    .find(paymentObjects.creditCardOption)
    .click()
    .wait(2000)
})

And(`I fill Credit Card number with {string}`, creditCardNumber => {
  getIframeBody()
    .find(paymentObjects.cardNumber)
    .click()
    .type(creditCardNumber)
})
And(`I fill Expiry Date with {string}`, expiryDate => {
  getIframeBody()
    .find(paymentObjects.expiryDate)
    .click()
    .type(expiryDate)
})
And(`I fill CVV number with {string}`, cvv => {
  getIframeBody()
    .find(paymentObjects.CVV)
    .click()
    .type(cvv)
})
And(`I uncheck Promo`, () => {
  getIframeBody()
    .find('label')
    .contains('Midtrans Promo')
    .click({ force: true })
})
And(`I click PAY NOW button`, () => {
  getIframeBody()
    .find(paymentObjects.payNow)
    .click()
    .wait(3000)
})
And(`I fill password with {string}`, password => {
  cy.get(paymentObjects.iframe).iframe()
    .find(paymentObjects.iframePass).iframe()
    .find(paymentObjects.password)
    .click()
    .type(password)
})

// MUST HAVE 1 ASSERT (SUCCESS PAYMENT FLOW)
Then(`I click ok button and successfully purchasing pillow`, () => {
  cy.get(paymentObjects.iframe).iframe()
    .find(paymentObjects.iframePass).iframe()
    .find(paymentObjects.ok)
    .click()
})


// MUST HAVE 2 ASSERT (FAILED PAYMENT FLOW)
Then(`I click ok button and should failed purchassing pillow`, () => {
  cy.get(paymentObjects.iframe).iframe()
    .find(paymentObjects.iframePass).iframe()
    .find(paymentObjects.ok)
    .click()
})


