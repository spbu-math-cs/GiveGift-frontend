import React from "react";
import SettingsHeader from "../../../../../UI/SettingsHeader/SettingsHeader";
import search_settings_style from "../SearchSettings.module.css";
import RangeSlider from "../../../../../UI/RangeSlider/RangeSlider";

const Price = (props) => {
  return (
    <div className={search_settings_style.setting_content}>
      <SettingsHeader text="Цена" />
      <RangeSlider {...props} />
    </div>
  );
};

export default Price;
