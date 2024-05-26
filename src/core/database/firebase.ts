import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import { initializeApp, getApps } from 'firebase/app'
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  doc,
  setDoc,
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCZdnGJtM7rxzk7y7Ga1vKvGoHv8ja23e4",
  authDomain: "personal-panel---chat.firebaseapp.com",
  projectId: "personal-panel---chat",
  storageBucket: "personal-panel---chat.appspot.com",
  messagingSenderId: "534740783847",
  appId: "1:534740783847:web:2ba1ee44119c4d862a4842"
};

if (!getApps().length) {
  initializeApp(firebaseConfig)
}

export const auth = getAuth()

const firebaseApp =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0]

export const firebaseAuth = getAuth(firebaseApp)
const db = getFirestore(firebaseApp)

export const getExpenses = async (userId) => {
  const expensesRef = collection(db, 'users', userId, 'expenses')
  const expensesSnapshot = await getDocs(expensesRef)
  return expensesSnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
}

export const createExpense = async (
  userId,
  category,
  amount,
  date,
  description,
) => {
  const expensesRef = collection(db, 'users', userId, 'expenses')
  await addDoc(expensesRef, { category, amount, date, description })
}

export const signUp = async (email, password) => {
  await createUserWithEmailAndPassword(auth, email, password)
}

export const logIn = async (email, password) => {
  await signInWithEmailAndPassword(auth, email, password)
}

export const logOut = async () => {
  await signOut(auth)
}
