import React from "react";
import styles from "./MainPageSideBarContent.module.css";
import Separator from "../../UI/Separator/Separator";
import CustomSettings from "./CustomSettings/CustomSettings";
import SelectFriend from "./SelectFriend/SelectFriend";

const MainPageSideBarContent = () => {
  return (
    <div className={styles.mainpage_sidebar_content}>
      <SelectFriend />

      <Separator>или</Separator>

      <CustomSettings />
    </div>
  );
};

export default MainPageSideBarContent;
