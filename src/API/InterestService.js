import axios from "axios";

export default class InterestService {
  static async getAll() {
    return await axios.get("http://127.0.0.1:5000/get_all_interests");
  }

  static async addNew(interest) {
    const interests = {
      new_interests: [interest],
      edit_interests: [],
    }

    return await axios.post("http://127.0.0.1:5000/edit_interest", interests);
  }
}
