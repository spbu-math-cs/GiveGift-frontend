import axios from "axios";
import { maxPrice, minPrice } from "../utils/constants";

export default class IdeaService {
  static async getIdeas(userIdeaProperties, is_adult) {
    return await axios.post("http://127.0.0.1:5000/generate_ideas", {
      ...userIdeaProperties,
      is_adult: is_adult,
    });
  }

  static async getIdeasForFriend(token, friend_id, is_adult) {
    return await axios.post(
      "http://127.0.0.1:5000/generate_ideas",
      {
        price_range: [minPrice, maxPrice],
        is_adult: is_adult,
        friend_id: friend_id,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
  }
}
