import { createContext, useState, useContext } from "react";
import { mock } from "../data";

export const ChannelContext = createContext();

export const ChannelProvider = ({ children, serverId }) => {
    const [channelData, setChannelData] = useState(mock[0].categories[0].channels[0]);
    return (
      <ChannelContext.Provider value={{ channelData, setChannelData }}>
        {children}
      </ChannelContext.Provider>
    );
  };
  
  export const useChannelContext = () => useContext(ChannelContext);
