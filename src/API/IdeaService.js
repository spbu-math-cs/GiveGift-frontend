import axios from "axios";

export default class IdeaService {
  static async getIdeas(userIdeaProperties, is_adult) {
    return await axios.post("http://127.0.0.1:5000/generate_ideas", {
      ...userIdeaProperties,
      is_adult: is_adult,
    });
  }

  // TODO: price_range для друга мы не указываем
  static async getIdeasForFriend(token, friend_id, is_adult) {
    return await axios.post(
      "http://127.0.0.1:5000/generate_ideas",
      {
        price_range: [1, 20000],
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
