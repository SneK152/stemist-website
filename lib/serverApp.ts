import admin from "firebase-admin";
import { App, getApp, getApps } from "firebase-admin/app";
let app: App;

app = getApps().length ? getApp() : admin.initializeApp({
  credential: admin.credential.cert(JSON.parse(process.env.FIREBASE_ADMIN!))
})

const db = admin.firestore(app);
export default db;
