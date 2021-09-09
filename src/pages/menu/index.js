import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const MenuStyled = styled.div`
  display: flex;
  text-align: center;
`;

export default function Menu() {
  return (
    <MenuStyled>
      <div>
        <h1>Bienvenido!!</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat aut
          mollitia quae consectetur dolor culpa deserunt ratione suscipit
          dignissimos expedita quasi voluptatem numquam, tenetur iste officiis
          quia rem alias architecto asperiores! Culpa molestias, hic
          exercitationem eos optio, delectus dolorum fuga asperiores
          praesentium, enim alias ducimus temporibus. Id obcaecati molestias
          quasi.
        </p>
        <br />
        <h3> Lorem ipsum dolor sit amet.</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam
          obcaecati molestias omnis, minima velit, consequuntur veniam adipisci
          magnam ex magni in et dolore voluptas aliquid eius cupiditate at,
          recusandae corporis.
        </p>
        <Link to="/presupuesto">
          <button type="button">Click Me!</button>
        </Link>
      </div>
    </MenuStyled>
  );
}
