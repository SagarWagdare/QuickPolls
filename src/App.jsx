import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import { auth } from "./firebase";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import CreatePoll from "./Poll/CreatePoll";
import PollHome from "./Poll/PollHome";

function App() {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else {
        setUserName(" ");
      }
    });
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/pollhome" element={<PollHome name={userName} />} />
        <Route path="/createpoll" element={<CreatePoll/>} />

      </Routes>
    </div>
  );
}

export default App;
