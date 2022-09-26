import { AnimatePresence, motion } from "framer-motion";
import { StyledLoader } from "./styles";
import React, { useEffect } from "react";
import { Modal } from "../modal";

const Loading = () => {
  return (
    <Modal>
      <AnimatePresence>
        <motion.div
          animate={{
            rotate: [500, -600, 1000, -600, 500],
            scale: [0.5, 0.6, 0.5, 0.6, 0.5],
            transition: { duration: 8, repeat: Infinity },
          }}
        >
          <StyledLoader />
        </motion.div>
      </AnimatePresence>
    </Modal>
  );
};

export default Loading;