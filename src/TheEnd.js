import React from "react";

function PopUp() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const currentUrl = window.location.href;
    if (currentUrl.indexOf("/hydrate") !== -1) {
      setMessage("Keep staying hydrated!");

    } else if (currentUrl.indexOf("/social") !== -1) {
      setMessage("Keep staying socially balanced!");

    } else {
      console.log("[!} URL does not match a pop-up URL");
    }
  }, []);

  return (
    <div>
      <p>{message}</p>
    </div>
  );
}

function DisplayPopUp() {
  return (
    <div>
      <PopUp />
    </div>
  );
}

export default App;

