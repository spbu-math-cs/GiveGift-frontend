import React, { useContext } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateField, LocalizationProvider } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { AccContext } from "../../../../../context/AccContext/AccContext";

const EditDate = () => {
  const { accInfo, setAccInfo } = useContext(AccContext);
  return (
    <LocalizationProvider
      dateAdapter={AdapterDayjs}
      localeText={{
        fieldDayPlaceholder: () => "ДД",
        fieldMonthPlaceholder: () => "ММ",
        fieldYearPlaceholder: () => "ГГГГ",
      }}
    >
      <DateField
        label="Дата рождения"
        size={"small"}
        value={accInfo.birth_date ? dayjs(accInfo.birth_date) : null}
        style={{ width: "fit-content" }}
        inputProps={{ style: { fontSize: 15 } }}
        onChange={(newDate) => {
          setAccInfo((prev) => ({
            ...prev,
            birth_date: newDate?.toString(),
          }));
        }}
        format="DD-MM-YYYY"
      />
    </LocalizationProvider>
  );
};

export default EditDate;
