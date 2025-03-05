import { useEffect } from "react";
import { createRoot } from "react-dom/client";

function Component() {
  useEffect(() => {
    const ws_client = new WebSocket("/ws");
    ws_client.addListener("message", (data) => {
      console.log(data);
    });
  });
  return <p>abcde</p>;
}

const elem = document.getElementById("root")!;
const app = <Component />;
createRoot(elem).render(app);
