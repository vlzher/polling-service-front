import React, {useEffect, useState} from "react";

import Navbar from "../components/Navbar.jsx";
import { pollsMocks } from "../../pollsMocks.js";
import CustomPoll from "../components/CustomPoll.jsx";
import {TOKEN_CONST} from "../api/api.js";
import {useNavigate} from "react-router-dom";

const PollsPage = () => {const navigate = useNavigate();
  const [polls, setPolls] = useState(pollsMocks)
   useEffect(()=> {
       if(!localStorage.getItem(TOKEN_CONST))
           navigate("/");
   },[])
  return (
    <div className="w-full flex items-center flex-col">
      <Navbar setPolls={setPolls}/>
      <div className="p-5 w-full text-4xl flex justify-start">
        <div>Current polls:</div>
      </div>
      {polls.map((poll) => (
        <CustomPoll  setPolls={setPolls} key={poll.pollQuestion} answers={poll.answers} pollQuestion={poll.pollQuestion} />
      ))}
    </div>
  );
};

export default PollsPage;
