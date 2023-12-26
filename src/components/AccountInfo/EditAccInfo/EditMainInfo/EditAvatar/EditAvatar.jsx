import React, { useContext, useRef, useState } from "react";
import AddAPhotoOutlinedIcon from "@mui/icons-material/AddAPhotoOutlined";
import EditAvatarModal from "./EditAvatarModal/EditAvatarModal";
import styles from "../../../AccountInfo.module.css";
import { AccContext } from "../../../../../context/AccContext/AccContext";
import { avatarSrc } from "../../../../../utils/avatarSrc";

const EditAvatar = () => {
  const { accInfo, setAccInfo } = useContext(AccContext);
  const inputFileRef = useRef(null);

  const [avatarPreview, setAvatarPreview] = useState(avatarSrc(accInfo.avatar));
  const [src, setSrc] = useState(null); // Для модалки
  const [isImageModalVisible, setIsImageModalVisible] = useState(false);

  const handleInputClick = (e) => {
    e.preventDefault();
    inputFileRef.current.click();
  };

  const handleImgChange = async (e) => {
    if (e.target.files.length !== 0) {
      setSrc(URL.createObjectURL(e.target.files[0]));
      setIsImageModalVisible(true);
    }
  };

  return (
    <div className={styles.avatar}>
      <EditAvatarModal
        visible={isImageModalVisible}
        setVisible={setIsImageModalVisible}
        setAvatarPreview={setAvatarPreview}
        src={src}
        setAccInfo={setAccInfo}
      />

      <input
        type="file"
        accept=".jpg, .jpeg, .png"
        ref={inputFileRef}
        style={{ display: "none" }}
        onChange={handleImgChange}
      />
      <div className={styles.add_photo} onClick={handleInputClick}>
        <AddAPhotoOutlinedIcon style={{ fontSize: 50 }} />
      </div>

      <img
        className={styles.acc_profile_pic}
        src={avatarPreview}
        alt={"user"}
      />
    </div>
  );
};

export default EditAvatar;
