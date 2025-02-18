import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDQQghnsE3srMnyhTKnL1ocqNEtQYeRimE",
  authDomain: "tindur-75998.firebaseapp.com",
  projectId: "tindur-75998",
  storageBucket: "tindur-75998.firebasestorage.app",
  messagingSenderId: "994742339438",
  appId: "1:994742339438:web:ef66f31d9715ce77a3637f",
  measurementId: "G-XZN33B5HKP"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);