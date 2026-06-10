import { initializeApp } from "firebase/app";
import { getAuth, signInAnonymously, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD4I5Bx9W83onyL-BJozQswLySVjBZ1rTI",
  authDomain: "bolao-copa-2026-538a8.firebaseapp.com",
  projectId: "bolao-copa-2026-538a8",
  storageBucket: "bolao-copa-2026-538a8.firebasestorage.app",
  messagingSenderId: "814790202825",
  appId: "1:814790202825:web:3d2755843b1eb207e90418",
  measurementId: "G-GVNZQF8PGY"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// Sign in anonymously on load — creates a persistent anonymous user per device
export function ensureAuth() {
  return new Promise((resolve, reject) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        resolve(user);
      } else {
        signInAnonymously(auth).then(cred => resolve(cred.user)).catch(reject);
      }
    });
  });
}
