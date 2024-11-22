import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, useOnlineStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("online", () => {
      useOnlineStatus(true);
    });
  });

  useEffect(() => {
    window.addEventListener("offline", () => {
      useOnlineStatus(false);
    });
  });

  return onlineStatus;
};

export default useOnlineStatus;
