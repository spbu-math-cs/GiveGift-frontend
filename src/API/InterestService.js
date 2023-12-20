import axios from "axios";

export default class InterestService {
  static async getAll() {
    return await axios.get("http://127.0.0.1:5000/get_all_interests");
  }
}
