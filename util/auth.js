import axios from 'axios';

// Reference: https://console.firebase.google.com/u/0/project/financemanager-e67ec/authentication/providers

const API_KEY = "AIzaSyBZpNYGqzbsbhWg1K1t2QxT35PUDiLZnZ0";

export async function authenticate(mode, email, password) {
    const response = await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`,
        {
            email: email,
            password: password,
            returnSecureToken: true
        }
    );
    const token = response.data.idToken;
    return token;
}

//Sign-Up: Creating a User
export function createUser(email, password) {
    return authenticate('signUp', email, password);
}

//SignIn: Login to account
export function login(email, password) {
    return authenticate('signInWithPassword', email, password);
}
