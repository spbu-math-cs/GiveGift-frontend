import axios from "axios";


export default class UserService {
    static async login(email, password) {
        const user = {
            email: email,
            password: password
        }

        return await axios.post('http://127.0.0.1:5000/login', user);
    }

    // TODO: ник на этапе регистрации будем брать из email
    static async signUp(nickname, email, password) {

        const newUser = {
            nickname: nickname,
            email: email,
            password: password,
            birth_date: '01-01',
            about: '',
            interests: []
        }

        return await axios.post('http://127.0.0.1:5000/register', newUser);
    }
}