@guestSearchFeature
Feature: DEMO MIDTRANS

# background used to define a step or series of steps that are common to all the tests in the feature file

Background: I go to Demo Midtrans Page
  Given I go to Demo Midtrans Page
  When I click BUY NOW button
  And I click CHECKOUT button
  And I click CONTINUE button
  And I choose payment with Credit Card

# MUST HAVE NUMBER 1 : SUCCESS PAYMENT FLOW
  Scenario: SUCCESS Payment Flow
    And I fill Credit Card number with "4811111111111114"
    And I fill Expiry Date with "0520"
    And I fill CVV number with "123"
    And I uncheck Promo
    And I click PAY NOW button
    And I fill password with "112233"
    Then I click ok button and successfully purchasing pillow

# MUST HAVE NUMBER 2 : FAILED PAYMENT FLOW
  Scenario: FAILED Payment Flow
    And I fill Credit Card number with "4911111111111113"
    And I fill Expiry Date with "0520"
    And I fill CVV number with "123"
    And I uncheck Promo
    And I click PAY NOW button
    And I fill password with "112233"
    Then I click ok button and should failed purchassing pillow
