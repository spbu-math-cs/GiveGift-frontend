import Sidebar from "../../components/Sidebar/Sidebar";
import MainPageSideBarContent from "../../components/Sidebar/MainPageSideBarContent/MainPageSideBarContent";
import Ideas from "../../components/Ideas/Ideas";
import React, { useContext, useEffect } from "react";
import GettingStarted from "../../components/UI/GettingStarted/GettingStarted";
import { FriendContext } from "../../context/FriendContext/FriendContext";
import { InterestContext } from "../../context/InterestContext/InterestContext";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import { UserContext } from "../../context/UserContext/UserContext";

const Main = () => {
  const { fetchFriendLists } = useContext(FriendContext);
  const { fetchInterests } = useContext(InterestContext);
  const { token } = useContext(AuthContext);
  const { isNewUser } = useContext(UserContext);

  useEffect(() => {
    const fetchInfo = async () => {
      await fetchInterests();
      token && (await fetchFriendLists(token));
    };
    fetchInfo().catch(console.error);
  }, []); // eslint-disable-line

  return (
    <div className={`content-with-sidebar app-wrapper-content`}>
      <Sidebar header={"Фильтры идей"}>
        <MainPageSideBarContent />
      </Sidebar>
      {isNewUser ? <GettingStarted /> : <Ideas />}
    </div>
  );
};

export default Main;
