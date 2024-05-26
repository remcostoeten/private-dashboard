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
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
}

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
