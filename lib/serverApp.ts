import admin from "firebase-admin";
import { App, getApp, getApps } from "firebase-admin/app";
let app: App;

if (!getApps().length) {
  app = admin.initializeApp({
    credential: admin.credential.cert(JSON.parse(process.env.FIREBASE_ADMIN!)),
  });
} else {
  app = getApp();
}

const storage = admin.storage(app);
export default storage;
