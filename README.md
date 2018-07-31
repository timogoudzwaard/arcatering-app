# Arcatering-App
The official Arcatering App (PWA)

## This project contains
- React
- ESLint (AirBnB config)
- Firebase for deploy
- Service Worker for PWA (Progressive Web Application)

## Firebase config
**Before changing anything to the config, use the command:**
```
git update-index --skip-worktree src/config.js
```
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
