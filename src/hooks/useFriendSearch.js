import { useMemo } from "react";

export const useFriendSearch = (friendList, query) => {
  return useMemo(() => {
    return friendList
      ? friendList.filter((friend) =>
          friend.nickname.toLowerCase().startsWith(query.toLowerCase().trim()),
        ).sort((self, other) => {
            return (self.nickname > other.nickname) ? 1 : -1;
        })
      : [];
  }, [query, friendList]);
};
