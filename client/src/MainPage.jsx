import React from "react";

function MainPage({ username, onLogout }) {
  return (
    <div>
      <h1>Welcome {username}</h1>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}

export default MainPage;
