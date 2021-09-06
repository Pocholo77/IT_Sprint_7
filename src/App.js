import React, { useState, useEffect } from "react";
import { Panel } from "./components/Panel";

export default function App() {
  const [number, setNumber] = useState({
    one: 0,
    two: 0,
    three: 0,
    aditionalPrice: 0,
  });

  const [checked, setChecked] = useState({
    one: false,
    two: false,
    three: false,
  });

  const [suma, setSuma] = useState(0);

  const [pages, setPages] = useState(1);
  const [languages, setLanguages] = useState(1);
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    let isData = localStorage.getItem("data");
    let isPrecio = localStorage.getItem("precio");
    let isPages = localStorage.getItem("pages");
    let isLanguages = localStorage.getItem("languages");
    let isDisplay = localStorage.getItem("display");
    let isChecked = localStorage.getItem("isChecked");

    if (isData != null) {
      setNumber(JSON.parse(isData));
      setSuma(isPrecio);
      setPages(isPages);
      setLanguages(isLanguages);
      setDisplay(JSON.parse(isDisplay));
      setChecked(JSON.parse(isChecked));
    } else {
      setNumber({
        one: 0,
        two: 0,
        three: 0,
        aditionalPrice: 0,
      });
      setChecked({
        one: false,
        two: false,
        three: false,
      });
      setSuma(0);
      setPages(1);
      setLanguages(1);
      setDisplay(false);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(number));
    localStorage.setItem("precio", suma);
    localStorage.setItem("display", display);
    localStorage.setItem("pages", pages);
    localStorage.setItem("languages", languages);
    localStorage.setItem("isChecked", JSON.stringify(checked));
  }, [number]);

  useEffect(() => {
    const { one, two, three, aditionalPrice } = number;
    setSuma(
      parseInt(one) + parseInt(two) + parseInt(three) + parseInt(aditionalPrice)
    );
  }, [number]);

  useEffect(() => {
    if (number["one"] > 0) {
      setNumber({ ...number, aditionalPrice: pages * languages * 30 });
    }
  }, [pages, languages]);

  const handleInput = (event) => {
    const { name, value, checked: isChecked } = event.target;

    if (isChecked && name === "one") {
      setDisplay(true);
    }
    if (!isChecked && name === "one") {
      setDisplay(false);
    }

    if (isChecked) {
      setNumber({ ...number, [name]: value });
    }
    if (!isChecked) {
      const aditionalPrice = name === "one" ? 0 : number.aditionalPrice;
      setNumber({ ...number, [name]: 0, aditionalPrice: aditionalPrice });
    }
    setChecked({ ...checked, [name]: isChecked });
  };

  const handleClick = (event) => {
    const { innerText, name } = event.target;

    if (innerText === "+") {
      name === "four"
        ? setPages(parseInt(pages) + 1)
        : setLanguages(parseInt(languages) + 1);
    }
    if (innerText === "-") {
      name === "four" ? setPages(pages - 1) : setLanguages(languages - 1);
    }
  };

  const handlePage = (event) => {
    setPages(event.target.value);
  };
  const handleLanguages = (event) => {
    setLanguages(event.target.value);
  };

  return (
    <div className="App">
      <p>Que quieres hacer?</p>
      <div className="CheckList">
        <div className="CheckClass">
          <input
            type="checkbox"
            checked={checked.one}
            onChange={handleInput}
            name="one"
            value={500}
          />{" "}
          <p>Una Pagina web (500€)</p>
        </div>
        {display && (
          <Panel
            pages={pages}
            languages={languages}
            handleLanguages={handleLanguages}
            handlePage={handlePage}
            handleClick={handleClick}
          ></Panel>
        )}
        <div className="CheckClass">
          <input
            type="checkbox"
            checked={checked.two}
            onChange={handleInput}
            name="two"
            value={300}
          />
          <p>Consulteria SEO (300€)</p>
        </div>
        <div className="CheckClass">
          <input
            type="checkbox"
            checked={checked.three}
            onChange={handleInput}
            name="three"
            value={200}
          />
          <p>Campanya ADS (200€)</p>
        </div>
      </div>
      <h3>Total: {suma} €</h3>
    </div>
  );
}
