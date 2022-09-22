import React, { useState, useEffect } from "react";

import { Alert, styled } from "@mui/material";

const CustomAlert = styled(Alert)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10000;
`;

function Alerts({ children = "알림" }) {
  const [show, setShow] = useState(true);
  useEffect(() => {
    let time = setTimeout(() => {
      setShow(false);
    }, 2000);
    return () => {
      clearTimeout(time);
    };
  });
  return <>{show && <CustomAlert severity="error">{children}</CustomAlert>}</>;
}

export default Alerts;
