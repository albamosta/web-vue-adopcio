import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCGUDOMXA12_9rczuGgi6LA2hv3icZmPg8',
  authDomain: 'web-vue-adopcio.firebaseapp.com',
  projectId: 'web-vue-adopcio',
  storageBucket: 'web-vue-adopcio.firebasestorage.app',
  messagingSenderId: '506145443690',
  appId: '1:506145443690:web:e841b4a004fad568829f13',
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
