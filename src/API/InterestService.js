import axios from "axios";

export default class InterestService {
  static async getAll() {
    return await axios.get("http://127.0.0.1:5000/get_all_interests");
  }

  static async addNew(interest, token) {
    const interests = {
      new_interests: [interest],
      edit_interests: [],
    };

    return await axios.post("http://127.0.0.1:5000/edit_interest", interests, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  static async deleteInterests(deleteInterests, token) {
    const interests = {
      new_interests: [],
      edit_interests: deleteInterests.map(key => ({ interest_name: key, new_name: "" })),
    }

    return await axios.post("http://127.0.0.1:5000/edit_interest", interests, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}
