import React, { useRef, useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { API_KEY } from "../utils/constants";

const Profile = () => {
  const [displayName, setDisplayName] = useState();
  const [photourl, setPhotoUrl] = useState();
  const [error, setError] = useState();
  const name = useRef();
  const photoUrl = useRef();
  const idToken = localStorage.getItem("idTokenRestaurant");

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
        console.log(data);
        if (isApiSubscribed) {
          setDisplayName(data?.users[0]?.displayName);
          setPhotoUrl(data?.users[0]?.photoUrl);
        }
        throw new Error("Log-in first!!");
      })
      .catch((err) => {
        setError(err.message);
      });

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
        displayName: name?.current.value,
        photoUrl: photoUrl?.current.value,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(() => {
        name.current.value = "";
        photoUrl.current.value = "";
        throw new Error("Log-in first!!");
      })
      .catch((error) => setError(error.message));
  };

  return (
    <div>
      <Header />
      <div
        style={{ backgroundColor: "rgb(35, 39, 54" }}
        className="h-full p-8 m-8 rounded-xl"
      >
        <h1
          className="text-center text-3xl  font-semibold m-2"
          style={{ color: "rgb(122, 156, 68)" }}
        >
          Profile
        </h1>
        <div className="flex justify-center flex-col items-center">
          <img src={photourl} alt="photoUrl" className="w-32 rounded-full" />
          <h1 className="text-white font-bold text-2xl">{displayName}</h1>
        </div>

        <div>
          <div className="flex justify-center m-4 p-2">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col  justify-center items-center w-1/4p-4 m-4 shadow-2xl p-2"
              style={{ backgroundColor: "rgb(254, 161, 22)" }}
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
              <p className="text-red-800 font-bold">{error}</p>
              <button
                className="rounded-md p-2 text-white"
                style={{ backgroundColor: "rgb(122, 156, 68)" }}
                onClick={updateProfileHandler}
              >
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
