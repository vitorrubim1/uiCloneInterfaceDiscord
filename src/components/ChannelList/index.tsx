import * as React from "react";

import ChannelButton from "../ChannelButton";

import { Container, Category, AddCategoryIcon } from "./styles";

const ChanneList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>Canais de texto</span>

        <AddCategoryIcon />
      </Category>

      <ChannelButton channelName="Chat livre" />
      <ChannelButton channelName="Trabalho" />
      <ChannelButton channelName="CSGO" />
      <ChannelButton channelName="Valorant" />
      <ChannelButton channelName="Fogareu grátis" />
    </Container>
  );
};

export default ChanneList;
