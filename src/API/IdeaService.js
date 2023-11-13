import axios from "axios";


export default class IdeaService {
    static async getIdeas(userIdeaProperties) {
        return await axios.post(
            'http://127.0.0.1:5000/generate_ideas',
            userIdeaProperties
        );
    }
}