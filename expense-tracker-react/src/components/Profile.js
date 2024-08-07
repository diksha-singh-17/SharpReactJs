import React, { useRef, useEffect, useState } from "react";
import { API_KEY } from "../utils/constants";
import LogOut from "./LogOut";

const Profile = () => {
  const [displayName, setDisplayName] = useState();
  const [photourl, setPhotoUrl] = useState();
  const name = useRef();
  const photoUrl = useRef();
  const idToken = localStorage.getItem("idToken");

  useEffect(() => {
    let url =
      "https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=" +
      API_KEY;
    let isApiSubscribed = true;

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        idToken: idToken,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (isApiSubscribed) {
          setDisplayName(data?.users[0]?.displayName);
          setPhotoUrl(data?.users[0]?.photoUrl);
        }
      })
      .catch((err) => console.log(err));

    return () => {
      isApiSubscribed = false;
    };
  }, []);

  const updateProfileHandler = () => {
    let url =
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=" +
      API_KEY;
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        idToken: idToken,
        displayName: name.current.value,
        photoUrl: photoUrl.current.value,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="flex justify-between">
        <h1 className="bg-gradient-to-r from-blue-100 p-4 font-bold ">
          Winner never Quit, Quitters never win!!
        </h1>
        <div>
          <LogOut />
        </div>
      </div>

      <div>
        <h2 className="font-semibold m-4 p-2 text-blue-500 text-2xl">
          Contact Details
        </h2>
        <div className="flex justify-center m-4">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col  justify-center items-center w-1/4 bg-blue-100 p-4 m-4 shadow-2xl"
          >
            <input
              type="text"
              placeholder="full name"
              className="m-4 p-2 rounded-lg"
              defaultValue={displayName || ""}
              ref={name}
            />
            <input
              type="text"
              placeholder="profile photo url"
              className="m-4 p-2 rounded-lg"
              defaultValue={photourl || ""}
              ref={photoUrl}
            />
            <button
              className="rounded-md p-2 bg-blue-300  text-white"
              onClick={updateProfileHandler}
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
