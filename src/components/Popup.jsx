import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CiSquareRemove } from "react-icons/ci";
import "./Popup.css";

const Popup = ({ isPop, setPop }) => {
  const handleClose = () => {
    setPop(false);
  };

  const popupBodyVariants = {
    visible: {
      y: 0,
      transition: { duration: 0.2, ease: "easeInOut"},
    },
    hidden: {
      y: 900,
      transition: { duration: 0.1, ease: "easeInOut" },
    },
  };

  const popupBodyVariants2 = {
    visible: {
      opacity: 1,
      transition: { duration: 0.2, ease: "easeInOut" },
    },
    hidden: {
      opacity: 0,
      transition: { duration: 0.1, ease: "easeInOut" },
    },
  };

  return (
    <AnimatePresence>
      {isPop && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={popupBodyVariants2}
          className="popup-wrapper"
        >
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={popupBodyVariants}
            className="popup-body"
          >
            <div className="popup-pic"></div>
            <div className="popup-biz">
              <CiSquareRemove className="popup-close" onClick={handleClose} />
              <h2>Когда можно посмотреть?</h2>
              <p>Номер телефона</p>
              <input
                className="popup-inp-num"
                type="numbers"
                name=""
                id=""
                placeholder="Введите номер"
              />
              <textarea
                className="popup-inp-com"
                type="text"
                placeholder="Оставьте сообщение"
              />
              <button>Записаться на просмотр</button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Popup;
