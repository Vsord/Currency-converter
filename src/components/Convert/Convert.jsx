import React from "react";
import styles from "./Convert.module.scss";

const Convert = (props) => {
  const {
    label,
    currency,
    selectValue,
    inputValue,
    OnInputHandler,
    OnSelectHandler,
  } = props;

  const optionCurrencies = currency.map((item, index) => {
    return <option key={index}>{item.cc}</option>;
  });

  return (
    <div className={styles.converter}>
      <label htmlFor="currency">{label}</label>
      <select id="currency" value={selectValue} onChange={OnSelectHandler}>
        {optionCurrencies}
      </select>
      <input value={inputValue} onChange={OnInputHandler} type="number" />
    </div>
  );
};

export default Convert;
