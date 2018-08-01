const firebaseConfig = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: process.env.FIREBASE_AUTH,
  databaseURL: process.env.FIREBASE_DB,
  projectId: process.env.FIREBASE_PI,
  storageBucket: process.env.FIREBASE_SB,
  messagingSenderId: process.env.FIREBASE_MSI,
};

export default firebaseConfig;
