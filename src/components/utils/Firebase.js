
import { initializeApp } from "firebase/app";
import { getAuth,
   signInWithRedirect, 
   signInWithPopup, 
   GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBqp3AcBJ8y621R86WMAzfECz6XTnguVU8",
  authDomain: "fashion-street-44dc3.firebaseapp.com",
  projectId: "fashion-street-44dc3",
  storageBucket: "fashion-street-44dc3.appspot.com",
  messagingSenderId: "214827743051",
  appId: "1:214827743051:web:d07849affb32631ee81ace"
};


const firebaseApp = initializeApp(firebaseConfig);


const GoogleProvider = new GoogleAuthProvider()
GoogleProvider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const db = getFirestore();

export const signInWithGooglePopup = () => signInWithPopup(auth, GoogleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, GoogleProvider);


export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {displayName:'mike'}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }
  return userDocRef;
};


export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) {
    throw new Error('Email and password are required');
  }

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential;
  } catch (error) {
    throw error; // Rethrow the error to handle it in the component
  }
};


export const signInUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  const userCredential = await  signInWithEmailAndPassword (auth, email, password);
  return userCredential;

};

export const signOutUser = async () => await signOut(auth)