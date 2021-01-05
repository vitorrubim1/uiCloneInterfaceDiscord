import styled from "styled-components";

export const Container = styled.div`
  grid-area: UL;

  display: flex;
  flex-direction: column;

  padding: 3px 6px 0 16px;

  background-color: var(--secondary);

  max-height: calc(100vh - 46px);
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--tertiary);
    border-radius: 4px;
  }
  ::-webkit-scrollbar-track {
    //parte de baixo da scrollbar
    background-color: var(--secondary);
  }
`;

export const Role = styled.div`
  margin-top: 20px;

  text-transform: uppercase;
  font-size: 12px;
  font-weight: 500;
  color: var(--gray);
`;

export const User = styled.div`
  display: flex;
  align-items: center;

  margin-top: 5px;
  padding: 5px;
  border-radius: 4px;
  transition: all 200ms;

  background-color: transparent;

  cursor: pointer;

  > strong {
    margin-left: 13px;
    font-weight: 500;
    color: var(--white);
    opacity: 0.7;
    white-space: nowrap;
    text-overflow: ellipsis; //...
    overflow: hidden;
  }

  > span { //tag de bot
    margin-left: 9px;
    border-radius: 4px;

    padding: 4px 5px;

    background-color: var(--discord);
    color: var(--white);
    font-weight: bold;
    font-size: 11px;
    text-transform: uppercase;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export const Avatar = styled.div`
  flex-shrink: 0; //pra não "esmagar", ficar oval
  width: 32px;
  height: 32px;
  background-color: var(--primary);

  border-radius: 50%;

  &.bot{
    background-color: var(--mention-detail);
  }
`;
