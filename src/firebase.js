import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
	apiKey: 'AIzaSyA-T2wf3Hf5c0ATnbv--I_T3rauDEdlMlc',
	authDomain: 'todolist-f6af8.firebaseapp.com',
	projectId: 'todolist-f6af8',
	storageBucket: 'todolist-f6af8.appspot.com',
	messagingSenderId: '659786183325',
	appId: '1:659786183325:web:3b96176166552c8fbf1a74',
	databaseURL: 'https://todolist-f6af8-default-rtdb.europe-west1.firebasedatabase.app/',
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
