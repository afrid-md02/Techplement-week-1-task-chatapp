import { useCallback, useContext } from "react";

import Store from "../context/store";

export default function useInitialValues(
  jwt_token,
  user_id,
  user_name,
  user_email,
) {
  const store = useContext(Store);

  const fetchDataFromCookies = useCallback(async () => {
    try {
      const token = localStorage.getItem(jwt_token);
      const IsLoggedIn = !!token;
      const userId = localStorage.getItem(user_id);
      const userName = localStorage.getItem(user_name);
      const userEmail = localStorage.getItem(user_email);
      if (!userId && !userName && !userEmail) {
        store.initialValues(token, IsLoggedIn, null);
      } else {
        store.initialValues(token, IsLoggedIn, { userId, userName, userEmail });
      }
      return "fetched data from localstorage";
    } catch (err) {
      console.log("Failed to fetch data from cookies", err);
    }
  }, [jwt_token, user_id, user_name, user_email, store]);

  return { fetchDataFromCookies };
}
