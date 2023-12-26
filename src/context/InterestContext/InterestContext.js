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

  const [addInterest, , ] = useFetching(async (interest, token) => {
    await InterestService.addNew(interest, token);
    await fetchInterests();
  });

  const [deleteInterests, , ] = useFetching(async (deleteInterests, token) => {
    await InterestService.deleteInterests(deleteInterests, token);
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
        deleteInterests,
      }}
    >
      {children}
    </InterestContext.Provider>
  );
};
