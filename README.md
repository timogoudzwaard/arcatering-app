# Arcatering-App
The official Arcatering App (PWA)

## Trello board
[Arcatering Trello Board](https://trello.com/b/uzwzaW0V/arcatering)

## This project contains
- React
- ESLint (AirBnB config)
- Firebase for deploy
- Service Worker for PWA (Progressive Web Application)

## Firebase config
Create a new project in firebase, then add the firebase config in src/config.js (create a new file).

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
