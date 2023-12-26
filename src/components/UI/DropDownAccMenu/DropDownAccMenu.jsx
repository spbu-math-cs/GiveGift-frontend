import React, {useState} from "react";
import { redTheme } from "../muiThemes/themes";
import { Fade, Menu, ThemeProvider } from "@mui/material";
import DropDownAccList from "./DropDownAccList/DropDownAccList";
import AdminModal from "../../Admin/AdminModal/AdminModal";
import AdminForm from "../../Admin/AdminForm/AdminForm";

const DropDownAccMenu = ({ open, handleClose, anchorEl }) => {
  const [AdminModalVisibility, setAdminModalVisibility] = useState(false);

  return (
    <ThemeProvider theme={redTheme}>
      <Menu
        id="account-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
        PaperProps={{
          sx: {
            borderRadius: "15px",
            marginTop: "5px",
            minWidth: 150,
            color: "#666666",
          },
        }}
        MenuListProps={{
          "aria-labelledby": "account-menu-button",
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <DropDownAccList handleClose={handleClose} setVisible={setAdminModalVisibility} />
      </Menu>

      <AdminModal
        visible={AdminModalVisibility}
        setVisible={setAdminModalVisibility}
      >
        <AdminForm/>
      </AdminModal>
    </ThemeProvider>
  );
};

export default DropDownAccMenu;
