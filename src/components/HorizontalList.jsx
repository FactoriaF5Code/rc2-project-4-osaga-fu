/* eslint-disable react/prop-types */

import "./HorizontalList.css";
import { ArrowBackIosNewOutlined } from "@mui/icons-material";
import { ArrowForwardIosOutlined } from "@mui/icons-material";
import HorizontalListedItems from "./HorizontalListedItems";
import { useRef } from "react";
import { useState } from "react";

export default function HorizontalList({ listName }) {
  const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);

  const listRef = useRef();

  const handleClick = (direction) => {
    setIsMoved(true);

    let distance = listRef.current.getBoundingClientRect().x - 50;

    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${364 + distance}px)`;
    } else if (direction === "right" && slideNumber < 15) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-364 + distance}px)`;
    }
  };

  return (
    <div className="list">
      <span className="listTitle">{listName}</span>
      <div className="wrapper">
        <ArrowBackIosNewOutlined
          id="overRide01"
          className="sliderArrow left"
          onClick={() => handleClick("left")}
          style={{ display: !isMoved && "none" }}
        />
        <div className="container" ref={listRef}>
          <HorizontalListedItems />
        </div>
        <ArrowForwardIosOutlined
          id="overRide02"
          className="sliderArrow right"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
}
