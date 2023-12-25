import React, { useContext, useRef, useState } from "react";
import ModalWindow from "../../../../../UI/ModalWindow/ModalWindow";
import AvatarEditor from "react-avatar-editor";
import ActiveButton from "../../../../../UI/Button/ActiveButton/ActiveButton";
import styles from "./EditAvatarModal.module.css";
import ZoomSlider from "../../../../../UI/ZoomSlider/ZoomSlider";
import { minScale } from "../../../../../../utils/constants";
import { AccContext } from "../../../../../../context/AccContext/AccContext";

const EditAvatarModal = ({ visible, setVisible, setAvatarPreview, src }) => {
  const { setAccInfo } = useContext(AccContext);
  const cropRef = useRef(null);
  const [slideValue, setSlideValue] = useState(minScale);

  const handleSave = async () => {
    if (cropRef) {
      const dataUrl = cropRef.current.getImage().toDataURL();
      const result = await fetch(dataUrl);
      const blob = await result.blob();
      setAvatarPreview(URL.createObjectURL(blob));
      setAccInfo((prev) => ({ ...prev, avatar: dataUrl.split(",").pop() })); // pop-ом вытаскиваю header base64
      setVisible(false);
    }
  };

  return (
    <ModalWindow
      visible={visible}
      setVisible={setVisible}
      title={"Выбрать аватарку"}
    >
      <div className={styles.crop_modal_montent}>
        <AvatarEditor
          ref={cropRef}
          image={src}
          style={{ width: "100%", height: "100%" }}
          border={[50, 20]}
          borderRadius={20}
          color={[0, 0, 0, 0.7]}
          scale={slideValue / 10}
          rotate={0}
        />
        <ZoomSlider slideValue={slideValue} setSlideValue={setSlideValue} />
        <ActiveButton
          onClick={handleSave}
          className={styles.save_avatar_changes_btn}
        >
          Сохранить
        </ActiveButton>
      </div>
    </ModalWindow>
  );
};

export default EditAvatarModal;
