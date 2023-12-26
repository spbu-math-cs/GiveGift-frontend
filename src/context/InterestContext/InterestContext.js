import React, { createContext, useState } from "react";
import { useFetching } from "../../hooks/useFetching";
import InterestService from "../../API/InterestService";
import { useLocalStorage } from "../../hooks/useLocalStorage";

export const InterestContext = createContext(null);

export const InterestContextProvider = ({ children }) => {
  const [allInterests, setAllInterests] = useState([]);

  const [fetchInterests, ,] = useFetching(async () => {
    const response = await InterestService.getAll();
    setAllInterests(response.data && response.data["all_interests"]);
  });

  const [addInterest, ,addInterestError] = useFetching(async (interest) => {
    await InterestService.addNew(interest);
    await fetchInterests();
  });

  const [userInterests, setUserInterests] = useLocalStorage(
    "userInterests",
    [],
  );

  return (
    <InterestContext.Provider
      value={{
        allInterests,
        fetchInterests,
        userInterests,
        setUserInterests,
        addInterest,
        addInterestError,
      }}
    >
      {children}
    </InterestContext.Provider>
  );
};
