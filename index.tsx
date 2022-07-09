import reactDom from "react-dom/client";

reactDom.createRoot(document.getElementById("root")!).render(
  <div
    style={{
      height: "100vh",
      width: "100vw",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <p>
      <strong>Watch this show!</strong> is coming soon.
    </p>
  </div>
);
