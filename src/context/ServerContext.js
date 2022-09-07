import { createContext, useState, useContext } from "react";
import { mock } from "../data";

export const ServerContext = createContext();

export const ServerProvider = ({ children }) => {
    const [serverId, setServerId] = useState(mock[0].id);
    return (
      <ServerContext.Provider value={{ serverId, setServerId }}>
        {children}
      </ServerContext.Provider>
    );
  };
  
  export const useServerContext = () => useContext(ServerContext);
