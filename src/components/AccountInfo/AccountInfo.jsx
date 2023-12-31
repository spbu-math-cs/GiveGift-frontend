import React, { useContext } from "react";
import styles from "./AccountInfo.module.css";
import Error from "../UI/Error/Error";
import { ThemeProvider } from "@mui/material";
import { redTheme } from "../UI/muiThemes/themes";
import EditAccInfo from "./EditAccInfo/EditAccInfo";
import ViewAccInfo from "./ViewAccInfo/ViewAccInfo";
import { AccContext } from "../../context/AccContext/AccContext";
import { isObjectEmpty } from "../../utils/checkers";

const AccountInfo = ({ isEdit, setIsEdit }) => {
  const { accInfo, accInfoError, isAccInfoLoading, isChangeAccInfoLoading } =
    useContext(AccContext);

  return (
    <ThemeProvider theme={redTheme}>
      <div className={`${styles.acc_info_wrapper}`}>
        <div className={`${styles.acc_info_wrapper_bubble} slider`}>
          {accInfoError ? (
            <Error />
          ) : (
            !isAccInfoLoading &&
            !isObjectEmpty(accInfo) &&
            !isChangeAccInfoLoading && (
              <>
                {isEdit ? (
                  <EditAccInfo setIsEdit={setIsEdit} />
                ) : (
                  <ViewAccInfo setIsEdit={setIsEdit} />
                )}
              </>
            )
          )}
        </div>
      </div>
    </ThemeProvider>
  );
};
export default AccountInfo;
