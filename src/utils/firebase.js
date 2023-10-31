import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
const firebaseConfig = {
  apiKey: 'AIzaSyDf5NAZP1RADXZi_Mb9fLEzamFrS90oZbE',
  authDomain: 'member-action.firebaseapp.com',
  projectId: 'member-action',
  storageBucket: 'member-action.appspot.com',
  messagingSenderId: '546051203298',
  appId: '1:546051203298:web:15e16ad1b412ebab623ebb',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, auth, storage };
