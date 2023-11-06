import { initializeApp } from "firebase/app";
import {getStorage, ref, uploadBytes} from "firebase/storage"
import { v4 as uuidv4 } from 'uuid';

const firebaseConfig = {
  apiKey: "AIzaSyD5kHzLKS2mTPZERkosfN3icmjXEiFTVOE",
  authDomain: "pedidoscrombie.firebaseapp.com",
  projectId: "pedidoscrombie",
  storageBucket: "pedidoscrombie.appspot.com",
  messagingSenderId: "935718605089",
  appId: "1:935718605089:web:c615910ffb6a6ae2a5ee60"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)

export function uploadFile(file: Blob | Uint8Array | ArrayBuffer) {
  const storageRef = ref(storage, uuidv4())
  uploadBytes(storageRef, file);
  return storageRef.name;
  
}
