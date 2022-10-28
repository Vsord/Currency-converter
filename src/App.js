import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import React, { useEffect, useState } from "react";
import "./App.css";
import Convert from "./components/Convert/Convert";
import Header from "./components/Header/Header";
import {
  convertFuncFirstInput,
  convertFuncSecondInput,
} from "./utils/convertFunc";

const App = () => {
  const [currency, setCurrency] = useState([]);

  useEffect(() => {
    fetch("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json")
      .then((res) => res.json())
      .then((data) => setCurrency(data))
      .catch((err) => console.error(err));
  }, []);

  const [inputSelect, setInputSelect] = useState("USD");
  const [outputSelect, setOutputSelect] = useState("RUB");

  const [currencyInput, setCurrencyInput] = useState(0);
  const [currencyOutput, setCurrencyOutput] = useState(0);

  const InputHandler = (event) => {
    const e = event.target.value;
    setCurrencyOutput(
      convertFuncFirstInput(e, currency, inputSelect, outputSelect)
    );
    setCurrencyInput(event.target.value);
  };

  const OtputHandler = (event) => {
    const e = event.target.value;
    setCurrencyInput(
      convertFuncSecondInput(e, currency, inputSelect, outputSelect)
    );
    setCurrencyOutput(event.target.value);
  };

  const InputSelectHandler = (event) => {
    setInputSelect(event.target.value);
  };

  const OutputSelectHandler = (event) => {
    setOutputSelect(event.target.value);
  };

  return (
    <div className="App">
      <Header currency={currency} />
      <div className="convertBlock">
        <div className="convertBlockInner">
          <Convert
            label={"From"}
            currency={currency}
            selectValue={inputSelect}
            inputValue={currencyInput}
            OnInputHandler={InputHandler}
            OnSelectHandler={InputSelectHandler}
          />
          <CurrencyExchangeIcon sx={{ fontSize: "40px" }} />
          <Convert
            label={"To"}
            currency={currency}
            selectValue={outputSelect}
            inputValue={currencyOutput}
            OnInputHandler={OtputHandler}
            OnSelectHandler={OutputSelectHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
