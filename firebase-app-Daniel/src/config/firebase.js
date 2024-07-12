import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';
import { getStorage } from "firebase/storage";
import { API_KEY, AUTH_DOMAIN, PROJECT_ID, STORAGE_BUCKET, MESSAGING_SENDER_ID, APP_ID} from '@env';


const firebaseConfig = {
  apiKey: "AIzaSyCPW78R1jiWBDzQqCvDVSImge6xYdWTQUI",
  authDomain: "perfil-firebase-codigo.firebaseapp.com",
  projectId: "perfil-firebase-codigo",
  storageBucket: "perfil-firebase-codigo.appspot.com",
  messagingSenderId: "966048893761",
  appId: "1:966048893761:web:f249866fa53bdb451eafc0"
};

 console.log("valor de configuracion", firebaseConfig);

const app = initializeApp(firebaseConfig);

const database = getFirestore(app);

const auth = getAuth(app);

const storage = getStorage(app);

export { auth, database, storage}
