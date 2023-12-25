import axios from "axios";

export default class IdeaService {
  static async getIdeas(userIdeaProperties) {
    return await axios.post("http://127.0.0.1:5000/generate_ideas", {
      ...userIdeaProperties,
      is_adult: false,
    });
  }

  // TODO: price_range для друга мы не указываем
  // TODO: is_adult во фронт встроить
  static async getIdeasForFriend(token, friend_id) {
    return await axios.post(
      "http://127.0.0.1:5000/generate_ideas",
      {
        price_range: [1, 20000],
        is_adult: false,
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
