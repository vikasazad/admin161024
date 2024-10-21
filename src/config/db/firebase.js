import { initializeApp, getApp, getApps } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.AUTH_API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.AUTH_PROJECT_ID,
  storageBucket: process.env.AUTH_STORAGE_BUCKET,
  messagingSenderId: process.env.AUTH_MESSAGING_ID,
  appId: process.env.AUTH_APP_ID,
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const authentication = getAuth(app);
authentication.useDeviceLanguage();
export { authentication };
export const db = getFirestore(app);
export const storage = getStorage(app);
