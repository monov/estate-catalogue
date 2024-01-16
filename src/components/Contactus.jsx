import React, { useState } from "react";
import "./Contactus.css";
import { FaPhoneAlt, FaTelegramPlane } from "react-icons/fa";

const Contactus = () => {
  const [iconClicked, isIconClicked] = useState(false);

  function handleIconClick() {
    isIconClicked((v) => !v);
  }

  return (
    <div className="cntcts-wrapper">
      <div
        onClick={handleIconClick}
        className={iconClicked ? "cntcts-icon active" : "cntcts-icon"}
      >
        <img src="/icons/pi.webp" alt="" className="cntcts-icon-main" />
        <div className="cross">
          <div className="cross-line a"></div>
          <dir className='cross-line b'></dir>
        </div>
      </div>
      <div
        className={iconClicked ? "cntcts-telegram active" : "cntcts-telegram"}
      >
        <FaTelegramPlane className="cntcts-icons" />
      </div>
      <div className={iconClicked ? "cntcts-phone active" : "cntcts-phone"}>
        <FaPhoneAlt className="cntcts-icons  p" />
      </div>
    </div>
  );
};

export default Contactus;
