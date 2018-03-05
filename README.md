# React Native Pay

A React Native demo for the PayPal. Just Android currently. 

## Installation
```js
npm install
```

## Usage
```js

// ENV available: NO_NETWORK, SANDBOX, PRODUCTION
PayPal.initialize(PayPal.NO_NETWORK, <your_client_id>);
PayPal.pay({
    price: '1.00',
    currency: 'USD',
    description: 'Test Order',
})
.then(confirm => console.log(confirm))
.catch(error => console.log(error));
```