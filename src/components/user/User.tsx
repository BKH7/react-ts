import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { axios } from "@/services";

import { getUserState } from "../../store/users/selectors";
import { fetchUser } from "../../store/users/actions";

export function User() {
  const users = useSelector(getUserState);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("/users").then((res) => {
        dispatch(fetchUser(res.data))
        setLoading(false);
    });
  }, [dispatch]);

  return (
    <>
      {loading && <p>Loading...</p>}
      {users.map((user, i) => (
        <p key={user.name} className="linenums">
          {user.name} - {user.email}{" "}
        </p>
      ))}
    </>
  );
}
