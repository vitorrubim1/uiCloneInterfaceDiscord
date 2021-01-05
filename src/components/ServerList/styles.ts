import styled from 'styled-components';

export const Container = styled.div`
  grid-area: SL; //No arquivo layout defini que este arquivo ServerList teria essa sigla e quais areas ela ocuparia

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: var(--tertiary);

  padding: 11px 0;
  max-height: 100vh;
  overflow-y: scroll; //se houver muitos servidores, que ultrapasse o 100vh, a sidebar torna-se scrollavel

  ::-webkit-scrollbar { //deixando a barra de rolagem não visivel
    display: none;
  }
`;
  
export const Separator = styled.div`
  width: 32px;

  border-bottom: 2px solid var(--quaternary);
  
  margin-bottom: 8px;
`;