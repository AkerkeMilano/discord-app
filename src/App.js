import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ServerBlock from "./containers/ServerBlock/ServerBlock";
import ChatBlock from "./containers/ChatBlock/ChatBlock";
import UsersBlock from "./containers/UsersBlock/UsersBlock";
import { ChannelProvider } from "./context/ChannelContext";
import { ServerProvider } from "./context/ServerContext";

function App() {
  return (
    <ServerProvider>
      <ChannelProvider>
        <div className="App">
          <Navbar />
          <ServerBlock />
          <ChatBlock />
          <UsersBlock />
        </div>
      </ChannelProvider>
    </ServerProvider>
  );
}

export default App;
