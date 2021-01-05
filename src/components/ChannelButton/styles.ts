import styled from "styled-components";
import { Hashtag } from "styled-icons/heroicons-outline";
import { PersonAdd, Settings } from "styled-icons/material";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;
  padding: 5px 3px;
  border-radius: 5px;

  background-color: transparent;

  transition: all 200ms;

  > div {
    //cada uma das divs, ser flex
    display: flex;
    align-items: center;
    margin: 5px 0px;
  }

  > div span {
    color: var(--senary);
    margin-left: 5px;
  }

  &:hover,
  &.active {
    background-color: var(--quinary);

    > div span,
    div svg {
      color: var(--white);
      display: inline;
    }
  }

  > div svg {
    display: none;
  }
`;

export const HashtagIcon = styled(Hashtag)`
  width: 20px;
  height: 20px;
  color: var(--symbol);
`;

export const InviteIcon = styled(PersonAdd)`
  width: 18px;
  height: 18px;
  color: var(--symbol);
  transition: all 200ms;
  cursor: pointer;

  &:hover {
    color: var(--white);
  }
`;

export const SettingsIcon = styled(Settings)`
  width: 18px;
  height: 18px;
  margin-left: 4px;
  color: var(--symbol);
  transition: all 200ms;
  cursor: pointer;

  &:hover {
    color: var(--white);
  }
`;
