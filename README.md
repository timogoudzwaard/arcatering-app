# Arcatering-App
The official Arcatering App (PWA)

This application makes it easy to organise lunches with your team, whether it's for work or a different organisation.
The idea is that it makes it really easy to register and login to an existing team and opt-in for lunch.
Hosting is going to be easy as well.

## This project contains
- React
- ESLint (AirBnB config)
- Firebase for deploy
- Service Worker for PWA (Progressive Web Application)

## Requirements
- NodeJS
- npm
- firebase account (free)

**Optional**
- Travis CI account, see [Youtube](https://www.youtube.com/watch?v=QLVzozWDYAs) for setup details

## Firebase config
**Before changing anything to the config, use the command:**
```
git update-index --skip-worktree src/config.js
```
This command makes sure that if you make any changes to the config file, it won't push them to the repository.
This prevents leaking of sensitive data (eg:API keys)
Create a new project in firebase, then change the firebase config in src/config.js.

**Example**
```
const firebaseConfig = {
  apiKey: 'xxxx',
  authDomain: 'xxxx.firebaseapp.com',
  databaseURL: 'https://xxxx.firebaseio.com',
  projectId: 'xxxx',
  storageBucket: 'xxxx.appspot.com',
  messagingSenderId: '12341234',
};

export default firebaseConfig;
```

## Installation
Make sure you completed the firebase config and that you executed
```
git update-index --skip-worktree src/config.js
```
To prevent leaking of sensitive data.  
  
When you completed that, use ``npm install`` to install the modules
and run ``npm start`` to start the develop server.

If you want to build, use ``npm run build``

## Unit tests
When writing unit tests, make sure that they are working correctly.
Try using this or a similar method:
- Write a test which will pass, check that it does pass.
- Break that test by changing the expected output, check to make sure it actually breaks.
- Change back to the passing version of the test and check if it still passes.

To run the tests use ``npm run test``
