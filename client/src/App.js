import { useEffect, useState } from "react";
import Home from "./pages/home";

function App() {
  // const [installEvent, setinstallEvent] = useState();
  // useEffect(() => {
  //   window.addEventListener("beforeinstallprompt", (e) => {
  //     e.preventDefault();
  //     setinstallEvent(e);
  //   });
  // }, []);

  // const insatllApp = () => {
  //   installEvent.prompt();
  //   installEvent.userChoice.then((choiceResult) => {
  //     if (choiceResult.outcome === "accepted") {
  //       console.log("User accepted the install prompt");
  //     } else {
  //       console.log("User dismissed the install prompt");
  //     }
  //   });
  //   // We no longer need the prompt.  Clear it up.
  //   setinstallEvent(null);
  // };

  return (
    <div className="text-white bg-sprim-300 md:py-3 flex justify-center item-center overflow-y-auto h-screen font-poppins">
      <Home />
    </div>
  );
}

export default App;
