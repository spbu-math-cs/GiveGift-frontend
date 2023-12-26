import React, { useState } from "react";
import styles from "./AdminForm.module.css";
import {redTheme} from "../../UI/muiThemes/themes";
import {ThemeProvider} from "@mui/material";
import AdminEditInterestModal
  from "../AdminEditInterest/AdminEditInterestModal/AdminEditInterestModal";
import AdminEditInterestForm
  from "../AdminEditInterest/AdminEditInterestForm/AdminEditInterestForm";
import AdminEditAdminsModal from "../AdminEditAdmins/AdminEditAdminsModal/AdminEditAdminsModal";

const AdminForm = () => {
  const [AdminInterestVisibility, setAdminInterestVisibility] = useState(false);
  const [AdminAdminsVisibility, setAdminAdminsVisibility] = useState(false);

  return (
    <form className={styles.admin_menu}>
      <ThemeProvider theme={redTheme}>
        <div className={styles.admin_menu_item}
             onClick={() => {setAdminInterestVisibility(true)}}>
          Настроить интересы
        </div>

        <div className={styles.admin_menu_item}
             onClick={() => {setAdminAdminsVisibility(true)}}>
          Настроить админов
        </div>
      </ThemeProvider>

      <AdminEditInterestModal
        visible={AdminInterestVisibility}
        setVisible={setAdminInterestVisibility}
      >
        <AdminEditInterestForm
          setVisible={setAdminInterestVisibility}
        />
      </AdminEditInterestModal>

      <AdminEditAdminsModal
        visible={AdminAdminsVisibility}
        setVisible={setAdminAdminsVisibility}
      >
        <></>
      </AdminEditAdminsModal>

    </form>
  );
};

export default AdminForm;