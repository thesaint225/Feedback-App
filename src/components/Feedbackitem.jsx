import { FaTimes, FaEdit } from "react-icons/fa";
import { useContext } from "react";
import React from "react";
import { useState } from "react";
import Card from "./Card";
import FeedbackContext from "../context/FeedbackContext";

function Feedbackitem({ item }) {
  const { deleteFeedback,editFeedback } = useContext(FeedbackContext);

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      {/* <div className="">{item.text}</div> */}
      <button onClick={() => deleteFeedback(item.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <button onClick={()=>editFeedback(item)} className="edit">
        <FaEdit color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

export default Feedbackitem;
