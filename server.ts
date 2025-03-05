import index from "./index.html";

Bun.serve({
  routes: {
    "/": index,
    "/ws": (req, server) => {
      if (server.upgrade(req)) {
        return;
      }
      return new Response("Upgrade failed", { status: 500 });
    },
  },
  websocket: {
    open(ws) {
      ws.send("test");
    },
  },
});
