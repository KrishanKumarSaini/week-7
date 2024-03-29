import { useEffect, useState } from "react";
import axios from "axios";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./component/Card";

function App() {
  const [profile, setProfile] = useState([]);
  const [username, setuserName] = useState("");

  return (
    <>
      <h1>Github Profile Card Generator</h1>
      <div>
        <Input
          username={username}
          setProfile={setProfile}
          setuserName={setuserName}
          profile={profile}
        />
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        {<Card profile={profile} />}
      </div>
    </>
  );
}

function Input({ username, setProfile, setuserName, profile }) {
  const getInput = (e) => {
    setuserName(e.target.value);
  };

  const generateProfile = () => {
    axios.get(`https://api.github.com/users/${username}`).then((res) => {
      setProfile(res.data);
    });
  };
  useEffect(() => {
    generateProfile();
  }, []);

  console.log(profile);

  return (
    <div>
      <input
        type="text"
        onChange={getInput}
        placeholder="Enter your github user ID"
      />
      <button onClick={generateProfile}>Generate Profile</button>
    </div>
  );
}
export default App;
