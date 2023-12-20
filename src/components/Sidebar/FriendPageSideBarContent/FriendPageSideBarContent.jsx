import React, { useState } from "react";
import styles from "./FriendPageSideBarContent.module.css";
import IncomingRequestsList from "./IncomingRequestsList/IncomingRequestsList";
import OutgoingRequestsList from "./OutgoingRequestsList/OutgoingRequestsList";

const FriendPageSideBarContent = () => {
  const activeClass = "active_request_list";

  const [incomingRequestsClasses, setIncomingRequestsClasses] = useState([
    styles.request_tab_item,
    activeClass,
  ]);
  const [outgoingRequestsClasses, setOutgoingRequestsClasses] = useState([
    styles.request_tab_item,
  ]);

  return (
    <div className={styles.friend_requests}>
      <div className={styles.request_tab}>
        <div
          className={incomingRequestsClasses.join(" ")}
          onClick={() => {
            setIncomingRequestsClasses([
              ...incomingRequestsClasses,
              activeClass,
            ]);
            setOutgoingRequestsClasses(
              outgoingRequestsClasses.filter(
                (curr_class) => curr_class !== activeClass,
              ),
            );
          }}
        >
          <span>Входящие</span>
        </div>
        <div
          className={outgoingRequestsClasses.join(" ")}
          onClick={() => {
            setOutgoingRequestsClasses([
              ...outgoingRequestsClasses,
              activeClass,
            ]);
            setIncomingRequestsClasses(
              incomingRequestsClasses.filter(
                (curr_class) => curr_class !== activeClass,
              ),
            );
          }}
        >
          <span>Исходящие</span>
        </div>
      </div>

      <div className={styles.requests_list}>
        {incomingRequestsClasses.includes(activeClass) ? (
          <IncomingRequestsList />
        ) : (
          <OutgoingRequestsList />
        )}
      </div>
    </div>
  );
};

export default FriendPageSideBarContent;
