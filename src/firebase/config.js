import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB_NmTplxJ6W4dD4_FRuJwkMNGPvmcYQHA",
  authDomain: "olxclone-31159.firebaseapp.com",
  projectId: "olxclone-31159",
  storageBucket: "olxclone-31159.appspot.com",
  messagingSenderId: "483396510769",
  appId: "1:483396510769:web:dda30b586620a09364e110",
  measurementId: "G-MY11LRFP6B"
};

const app = firebase.initializeApp(firebaseConfig);
export default app;
