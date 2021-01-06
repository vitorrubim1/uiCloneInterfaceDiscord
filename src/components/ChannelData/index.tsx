import * as React from "react";

import ChannelMessage, { Mention } from "../ChannelMessage";

import { Container, Messages, InputWrapper, Input, InputIcon } from "./styles";

const ChannelData: React.FC = () => {
  const messagesRef = React.useRef() as React.MutableRefObject<HTMLDivElement>;

  React.useEffect(() => {
    const div = messagesRef.current; //o tamanho da div

    if (div) {
      div.scrollTop = div.scrollHeight; //pra jogar pra mensagem mais recente
    }
  }, [messagesRef]);

  return (
    <Container>
      <Messages ref={messagesRef}>
        {Array.from(Array(15).keys()).map((item) => (
          <ChannelMessage
            key={item}
            author="Vitor Rubim"
            date="05/01/2021"
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
          />
        ))}

        <ChannelMessage
          author="Lorem Ipsum"
          date="04/01/2021"
          hasMention
          isBot
          content={
            <>
              <Mention>@Vitor Rubim</Mention>, Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Commodi nam exercitationem
              consequuntur ea harum odio soluta quas expedita minima in ad,
              animi architecto, doloremque cumque voluptatem possimus natus
              quibusdam quam!
            </>
          }
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar em #Chat livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;
