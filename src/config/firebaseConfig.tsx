import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

function getConfig(config: string) {
  if (process.env[`REACT_APP_${config}`] === undefined || process.env[`REACT_APP_${config}`] === null ) {
    throw new Error(`${config} is missing`);
  }
  return process.env[`REACT_APP_${config}`];
}

const firebaseConfig = {
  apiKey: getConfig('API_KEY'),
  authDomain: getConfig('AUTH_DOMAIN'),
  projectId: getConfig('PROJECT_ID'),
  storageBucket: getConfig("STORAGE_BUCKET"),
  messagingSenderId: getConfig("MESSAGING_SENDER_ID"),
  appId: getConfig("API_ID"),
  measurementId: getConfig("MEASUREMENT_ID")
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
 