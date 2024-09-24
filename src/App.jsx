import React from "react";
import WalletAddressChart from "./WalletAddressChart";

const App = () => {
  return (
    <div style={{ padding: "50px" }}>
      <h1 style={{ color: "#fff", textAlign: "center" }}>
        Real-Time Monitoring graph
      </h1>
      <WalletAddressChart />
    </div>
  );
};

export default App;
