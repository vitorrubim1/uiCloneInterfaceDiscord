import styled from "styled-components";

/*
  SL - Server List (Sidebar);
  SN - Server Name (Nome dos servidores);
  CI - Channel Info (Informações do servidor atual, "header");
  CL - Channel List (Lista de servidores);
  CD - Channel Data (Dados do canal, as mensagens, o input de enviar msgns);
  UL - Users List (Os usuarios online, offlines na barra lateral direita);
  UI - User Info (Mostra os dados do usuário.. nome, mic);
*/

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 71px 240px auto 240px; //quatro colunas, três valores fixos e um ocupa oq puder
  grid-template-rows: 46px auto 52px; //header com valor fixo, conteúdo com valor automático e o footer com valor fixo
  grid-template-areas: "SL SN CI CI" //Primeira linha
    "SL CL CD UL" //Segunda linha
    "SL UI CD UL"; //Terceira linha

  height: 100vh; //pra grid ocupar toda a tela do user
`;
