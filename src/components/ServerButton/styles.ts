import styled from "styled-components";

import { Props } from "./index"; //inteface

export const Button = styled.button<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  width: 48px;
  height: 48px;

  margin-bottom: 8px;

  background-color: ${(props) =>
    props.isHome ? "var(--rocketseat)" : "var(--primary)"};

  position: relative;
  cursor: pointer;
  border-radius: 50%;
  transition: all 300ms;

  > img {
    width: 24px;
    height: 24px;
  }

  &::before {//Notificação
    content: "";

    display: ${(props) =>
      props.hasNotifications
        ? "inline"
        : "none"}; //só aparecer nos que tiver notificação

    position: absolute;
    left: -17px;
    top: calc(
      50% - 4.5px
    ); //metade de nove, pra ficar no meio e no canto esquerdo

    width: 9px;
    height: 9px;

    background-color: var(--white);

    border-radius: 50%;
  }

  &::after {//Menções no servidor
    content: "${(props) => props.mentions && props.mentions}";

    display: ${(props) =>
      props.mentions && props.mentions > 0 ? "inline" : "none"};

    position: absolute;
    bottom: -4px;
    right: -4px;

    background-color: var(--notification);
    width: auto; //pq dependendo da quantidade de menções a bolinha cresce
    height: 16px;

    padding: 0 4px;

    border-radius: 12px;
    border: 4px solid var(--quaternary);

    text-align: right;
    font-size: 13px;
    font-weight: bold;
    color: var(--white);
  }

  &.active,
  &:hover {
    border-radius: 16px;
    background-color: ${(props) =>
      props.isHome ? "var(--rocketseat)" : "var(--discord)"};
  }
`;
