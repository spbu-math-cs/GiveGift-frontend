import axios from "axios";


export default class IdeaService {
    static async getIdeas(userIdeaProperties) {
        return await axios.post(
            'http://127.0.0.1:5000/generate_ideas',
            userIdeaProperties
        );
    }


    // TODO: price_range для друга мы не указываем
    static async getIdeasForFriend(token, friend_id) {
        return await axios.post(
            'http://127.0.0.1:5000/generate_ideas',
            {
                price_range: [1, 20000],
                friend_id: friend_id,
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            }

        );
    }
}