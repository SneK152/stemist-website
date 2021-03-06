import admin from "firebase-admin";
import { getFirestore } from "firebase-admin/firestore";
import { App, getApp, getApps } from "firebase-admin/app";
let app: App;

app = getApps().length
  ? getApp()
  : admin.initializeApp({
      credential: admin.credential.cert(
        JSON.parse(process.env.FIREBASE_ADMIN!)
      ),
    });

const db = getFirestore(app);

try {
  db.settings({
    ignoreUndefinedProperties: true,
  });
} catch (e) {}
export default db;
