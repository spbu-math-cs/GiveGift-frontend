import axios from "axios";


export default class FriendService {
    static async getAllFriendLists(token) {
        return await axios.get(
            'http://127.0.0.1:5000/friends',
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            }
        );
    }

    static async sendFriendRequest(token, friend_id) {
        return await axios.post(
            'http://127.0.0.1:5000/outgoing_friend_request',
            {friend_id: friend_id},
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            }
        )
    }

    // TODO: delete-запрос не должен содержать data, поэтому friend_id лучше впихивать в ссылку
    static async revokeFriendRequest(token, friend_id) {
        return await axios.delete(
            'http://127.0.0.1:5000/outgoing_friend_request',
            {
                data: {
                    friend_id: friend_id
                },
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        )
    }

    static async acceptFriendRequest(token, friend_id) {
        return await axios.post(
            'http://127.0.0.1:5000/incoming_friend_request',
            {friend_id: friend_id},
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            }
        )
    }

    static async rejectFriendRequest(token, friend_id) {
        return await axios.delete(
            'http://127.0.0.1:5000/incoming_friend_request',
            {
                data: {
                    friend_id: friend_id
                },
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            }
        )
    }

    static async removeFriend(token, friend_id) {
        return await axios.delete(
            'http://127.0.0.1:5000/friends',
            {
                data: {
                    friend_id: friend_id
                },
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            }
        )
    }
}