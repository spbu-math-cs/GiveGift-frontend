import React, { createContext, useState } from "react";
import { useFetching } from "../../hooks/useFetching";
import FriendService from "../../API/FriendService";

export const FriendContext = createContext(null);

export const FriendContextProvider = ({ children }) => {
  const [friends, setFriends] = useState([]);

  const [incomingRequests, setIncomingRequests] = useState([]);
  const [outgoingRequests, setOutgoingRequests] = useState([]);

  const [fetchFriendLists, ,] = useFetching(async (token) => {
    const response = await FriendService.getAllFriendLists(token);
    setFriends(response.data["friends"]);
    setIncomingRequests(response.data["incoming_requests"]);
    setOutgoingRequests(response.data["outgoing_requests"]);
  });

  const [sendFriendRequest, isSendRequestLoading, sendRequestError] =
    useFetching(async (token, friend_id) => {
      await FriendService.sendFriendRequest(token, friend_id);
      await fetchFriendLists(token);
    });

  const [revokeFriendRequest, , revokeRequestError] = useFetching(
    async (token, friend_id) => {
      await FriendService.revokeFriendRequest(token, friend_id);
      await fetchFriendLists(token);
    },
  );

  const [acceptFriendRequest, , acceptFriendRequestError] = useFetching(
    async (token, friend_id) => {
      await FriendService.acceptFriendRequest(token, friend_id);
      await fetchFriendLists(token);
    },
  );

  const [rejectFriendRequest, , rejectFriendRequestError] = useFetching(
    async (token, friend_id) => {
      await FriendService.rejectFriendRequest(token, friend_id);
      await fetchFriendLists(token);
    },
  );

  const [removeFriend, , removeFriendError] = useFetching(
    async (token, friend_id) => {
      await FriendService.removeFriend(token, friend_id);
      await fetchFriendLists(token);
    },
  );

  return (
    <FriendContext.Provider
      value={{
        friends,
        incomingRequests,
        setIncomingRequests,
        outgoingRequests,
        setOutgoingRequests,
        fetchFriendLists,
        sendFriendRequest,
        isSendRequestLoading,
        sendRequestError,
        revokeFriendRequest,
        revokeRequestError,
        acceptFriendRequest,
        acceptFriendRequestError,
        rejectFriendRequest,
        rejectFriendRequestError,
        removeFriend,
        removeFriendError,
      }}
    >
      {children}
    </FriendContext.Provider>
  );
};
