import React, { useRef } from "react";

const Profile = () => {
  const name = useRef();
  const photoUrl = useRef();

  const updateProfileHandler = () => {
    const idToken = localStorage.getItem("idToken");
    let url =
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAo7xmAFa3rvDjDEFnZ9VoSTT1Kb7hfK6I";
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
      <h1 className="bg-gradient-to-r from-blue-100 p-4 font-bold flex">
        Winner never Quit, Quitters never win!!
      </h1>
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
              ref={name}
            />
            <input
              type="text"
              placeholder="profile photo url"
              className="m-4 p-2 rounded-lg"
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
