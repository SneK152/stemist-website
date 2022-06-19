import { FirebaseOptions, initializeApp, getApp, getApps } from "firebase/app";

const firebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyCQmRfJIzq67VlnvvZdpHonpHeW1hKRq4c",
  authDomain: "stemist-c71a6.firebaseapp.com",
  projectId: "stemist-c71a6",
  storageBucket: "stemist-c71a6.appspot.com",
  messagingSenderId: "249941894665",
  appId: "1:249941894665:web:dcac5a6d3db7e41d86bad8",
};

export default function getFirebase() {
  const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
  return app;
}
