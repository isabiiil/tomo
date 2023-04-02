import React, { useState, useEffect } from "react";

function PopUp() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const currentUrl = window.location.href;

    const urls = [
      "https://hack-princeton-s23.web.app/hydrate",
      "https://hack-princeton-s23.web.app/social",
    ];

    // loop through the URLs and push them to the history state
    urls.forEach((url) => {
      window.history.pushState(null, null, url);
    });

    if (currentUrl.indexOf("/hydrate") !== -1) {
      setMessage("Keep staying hydrated!");
    } else if (currentUrl.indexOf("/social") !== -1) {
      setMessage("Keep staying socially balanced!");
    } else {
      console.log("{!} URL does not match a pop-up URL");
    }
  }, []);

  return (
    <div>
      <p>{message}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <PopUp />
    </div>
  );
}

export default PopUp;