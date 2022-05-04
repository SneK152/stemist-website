import admin from "firebase-admin";
import { App, getApp, getApps } from "firebase-admin/app";
let app: App;

app = getApps().length
  ? getApp()
  : admin.initializeApp({
      credential: admin.credential.cert(
        process.env.FIREBASE_ADMIN as any
      ),
    });

const db = admin.firestore(app);

try {
  db.settings({
    ignoreUndefinedProperties: true,
  });
} catch (e) {}
export default db;
