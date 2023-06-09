/**
 * 1.install stripe and react stripe js
 * 2.create a checkout form with card element (card element contains:card number,expiration date,evs,zip code)
 * 3.create account on stripe and get the publishable key pk
 * 4.get card information
 * 5.create a payment method
 * 6.use test card to test payment
 * 7.on the server side:install stripe
 * 8.create a payment intent api with payment method types:['card']
 * 9.make sure provide amount in cents (multiply price with 100)
 * 10.use confirmCardPayment api with client secret card info
 * 11.display confirm card error
 * 12.display confirm card success
 * 13.do things after payment--->
 */