/*global chrome*/

import "./App.css";
import Routes from "./Routes";
import BlockchainProvider from "./context";

function App() {
  return (
    <BlockchainProvider>
      <Routes />
    </BlockchainProvider>
  );
}

export default App;
