import axios from "axios";

export default class UserService {
  static async login(email, password) {
    const user = {
      email: email,
      password: password,
    };

    return await axios.post("http://127.0.0.1:5000/login", user);
  }

  static async signUp(nickname, email, password) {
    const newUser = {
      nickname: nickname,
      email: email,
      password: password,
      birth_date: "", // birth_date в формате d-m-Y
      about: "",
      interests: [],
    };

    return await axios.post("http://127.0.0.1:5000/register", newUser);
  }

  static async logout(token) {
    return await axios.post(
      "http://127.0.0.1:5000/logout",
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
  }

  static async getUserInfo(token, id) {
    return await axios.get(`http://127.0.0.1:5000/get_user_info/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  static async changeUserInfo(token, userInfo) {
    return await axios.post(`http://127.0.0.1:5000/account`, userInfo, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  static async addAdmin(token, id) {
    return await axios.post(`http://127.0.0.1:5000/add_admin`, {id: id}, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  static async deleteAdmin(token, id) {
    return await axios.post(`http://127.0.0.1:5000/delete_admin`, {id: id}, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}
