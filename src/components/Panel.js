import styled from "styled-components";
import { PanelSelector } from "./PanelSelector";

export const PanelStyled = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: white;
  border: 2px solid black;
  border-radius: 10px;
  height: 9em;
  width: 60%;

  & .PanelInputGroup {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
  }

  & div input {
    margin: 5px;
    width: 30%;
  }

  & p{
    margin-right: 5px;
  }
`;
export function Panel({ children , pages, languages, handleLanguages, handlePage , handleClick}) {
  return (
    <PanelStyled>
      <div className="PanelInputGroup">
        <p>Numeros de Paginas:</p>
        <PanelSelector name="four" value={pages} onChange={handlePage} handleClick={handleClick}/>
      </div>
      
      <div className="PanelInputGroup">
        <p>Numeros de Idiomas:</p>
        <PanelSelector name="five" value={languages} onChange={handleLanguages} handleClick={handleClick}/> 
      </div>
      
    </PanelStyled>
  );
}
