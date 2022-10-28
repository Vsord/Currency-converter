import React from "react";
import styles from "./Header.module.scss";

const Header = (props) => {
  const { currency } = props;

  const headerCurrencies = currency.map((item, index) => {
    if (item.cc === "USD" || item.cc === "EUR") {
      return (
        <div className={styles.headerRates} key={index}>
          <span>
            {item.cc} {item.rate}
          </span>
        </div>
      );
    }
  });

  return <div className={styles.header}>{headerCurrencies}</div>;
};

export default Header;
