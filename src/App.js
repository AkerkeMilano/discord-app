import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ServerBlock from "./containers/ServerBlock/ServerBlock";
import ChatBlock from "./containers/ChatBlock/ChatBlock";
import { ChannelProvider } from "./context/ChannelContext";
import { ServerProvider } from "./context/ServerContext";

function App() {
  return (
    <ServerProvider>
      <ChannelProvider>
        <div style={{ display: "flex" }}>
          <Navbar />
          <ServerBlock />
          <ChatBlock />
        </div>
      </ChannelProvider>
    </ServerProvider>
  );
}

export default App;
