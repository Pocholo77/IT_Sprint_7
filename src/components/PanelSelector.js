import React from "react";
import styled from "styled-components";

export const PanelSelectorStyled = styled.div`
& div input{
    margin: 0 ;
    border: none;
    height: 30px;
}
& button{
    height: 30px;
    width: 30px;
    border-radius: 4px;
    background-color: rgb(221, 129, 8);;
    color: white;
    border: none;
    margin: 0 ;
}
`;

export function PanelSelector( {name, value, onChange, handleClick }){

    return(
        <PanelSelectorStyled>           {/* Preguntar como manejar el tema del name ( COMBINAR NAMES DEL BUTTON Y INPUT), o como manejarlo*/}
        <div>
            <button name={name} onClick={handleClick}>+</button>
            <input type='text' name={name} value={value} onChange={onChange}></input>
            <button name={name} onClick={handleClick}>-</button> 
        </div>
        </PanelSelectorStyled>
    )
}