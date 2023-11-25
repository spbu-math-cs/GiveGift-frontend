import {useMemo} from "react";

export const useFriendSearch = (friendList, query) => {
    return useMemo(() => {
        return friendList.filter(friend =>
            friend.nickname.toLowerCase().startsWith(query.toLowerCase().trim())
        )
    }, [query, friendList])
}
