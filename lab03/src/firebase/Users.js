import { auth, firestore } from "./Init";
import {
    GoogleAuthProvider,
    GithubAuthProvider,
    signInWithPopup,
    signOut,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile
} from "firebase/auth";
import {
    setDoc,
    getDoc,
    doc,
} from "firebase/firestore";


const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const loginLogic = async (provider, providerName) => {
    try {
        const response = await signInWithPopup(auth, provider);
        const user = response.user;

        const q = doc(firestore, "users", user.uid);
        const docs = await getDoc(q);
        if ( ! docs.exists()) {
            await setDoc(q, {
                name: user.displayName,
                authProvider: providerName,
                email: user.email,
            });
        }

    } catch (err) {
        console.error({err});
        alert(err.message);
    }
};

export const logInWithGoogle = async () => {
    try {
        await loginLogic(googleProvider, "google");
    } catch (err) {
        console.error({err});
        alert(err.message);
    }
};

export const logInWithGithub = async () => {
    try {
        await loginLogic(githubProvider, "github");
    } catch (err) {
        console.error({err});
        alert(err.message);
    }
};

export const logInWithEmailAndPassword = async (email, password) => {
    try {
        const userCredentials = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredentials.user;

        const q = doc(firestore, "users", user.uid);
        const docs = await getDoc(q);
        if ( ! docs.exists()) {
            await setDoc(q, {
                name: user.displayName,
                authProvider: "email",
                email: user.email,
            });
        }
    } catch (err) {
        console.error({err});
        alert(err.message);
    }
};

export const registerUser = async (email, password, name) => {
    try {
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredentials.user;
        user.displayName = name;

        await updateProfile(user, { displayName: name, photoURL: "" });

        const q = doc(firestore, "users", user.uid);
        const docs = await getDoc(q);
        if ( ! docs.exists()) {
            await setDoc(q, {
                name: user.displayName,
                authProvider: "email",
                email: user.email,
            });
        }
    } catch (err) {
        console.error({err});
        alert(err.message);
    }
};


export const logOut = () => {
    signOut(auth);
};



