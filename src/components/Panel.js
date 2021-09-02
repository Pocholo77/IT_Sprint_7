import styled from "styled-components";

export const PanelStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  background: white;
  border: 2px solid black;
  border-radius: 10px;
  height: 9em;

  & .PanelInputGroup {
    display: flex;
    flex-direction: row;
    align-items: center;
    
  }
  & div input {
    margin: 5px;
  }
`;
export function Panel({ children , pages, languages, handleLanguages, handlePage}) {
  return (
    <PanelStyled>
      <div className="PanelInputGroup">
        <p>Numeros de Paginas:</p>
        <input type="text" 
        name="four" 
        value={pages} 
        onChange={handlePage} />
      </div>
      <div className="PanelInputGroup">
        <p>Numeros de Idiomas:</p>
        <input
          type="text"
          name="five"
          value={languages}
          onChange={handleLanguages}
        />
      </div>
    </PanelStyled>
  );
}
