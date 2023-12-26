import Sidebar from "../../components/Sidebar/Sidebar";
import MainPageSideBarContent from "../../components/Sidebar/MainPageSideBarContent/MainPageSideBarContent";
import Ideas from "../../components/Ideas/Ideas";
import React, { useContext, useEffect } from "react";
import GettingStarted from "../../components/UI/GettingStarted/GettingStarted";
import { FriendContext } from "../../context/FriendContext/FriendContext";
import { InterestContext } from "../../context/InterestContext/InterestContext";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import { UserContext } from "../../context/UserContext/UserContext";
import NoAdultContentRoundedIcon from "@mui/icons-material/NoAdultContentRounded";
import styles from "./Main.module.css";
import { IdeasContext } from "../../context/IdeasContext/IdeasContext";
import { IconButton, Tooltip } from "@mui/material";

const Main = () => {
  const { fetchFriendLists } = useContext(FriendContext);
  const { fetchInterests } = useContext(InterestContext);
  const { token } = useContext(AuthContext);
  const { isNewUser } = useContext(UserContext);
  const { isAdult, setIsAdult } = useContext(IdeasContext);

  useEffect(() => {
    const fetchInfo = async () => {
      await fetchInterests();
      token && (await fetchFriendLists(token));
    };
    fetchInfo().catch(console.error);
  }, []); // eslint-disable-line

  return (
    <div className={`content-with-sidebar app-wrapper-content`}>
      <Sidebar
        header={
          <div className={styles.main_header}>
            <span>Фильтры идей</span>
            <Tooltip title={"Не показывать / показывать товары 18+"}>
              <IconButton onClick={() => setIsAdult(!isAdult)}>
                <NoAdultContentRoundedIcon
                  sx={{ color: isAdult ? "grey" : "#fc4d17" }}
                />
              </IconButton>
            </Tooltip>
          </div>
        }
      >
        <MainPageSideBarContent />
      </Sidebar>
      {isNewUser ? <GettingStarted /> : <Ideas />}
    </div>
  );
};

export default Main;
