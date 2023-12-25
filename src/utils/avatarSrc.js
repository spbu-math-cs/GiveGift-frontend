import { storageAPI_URL } from "./constants";
import default_user_logo from "../assets/user.svg";

export const avatarSrc = (avatarFilename) => {
  console.log(avatarFilename)
  return avatarFilename ? storageAPI_URL + avatarFilename : default_user_logo;
};