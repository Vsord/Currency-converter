export const convertFuncFirstInput = (
  e,
  currency,
  inputSelect,
  outputSelect
) => {
  let firstSelectSum = 0;
  let result = 0;

  for (let i = 0; i < currency.length - 1; i++) {
    if (currency[i].cc === inputSelect) {
      firstSelectSum += e * currency[i].rate;
    }
  }

  for (let i = 0; i < currency.length - 1; i++) {
    if (currency[i].cc === outputSelect) {
      result += firstSelectSum / currency[i].rate;
    }
  }

  return result.toFixed(2);
};

export const convertFuncSecondInput = (
  e,
  currency,
  inputSelect,
  outputSelect
) => {
  let firstSelectSum = 0;
  let result = 0;

  for (let i = 0; i < currency.length - 1; i++) {
    if (currency[i].cc === inputSelect) {
      firstSelectSum += e / currency[i].rate;
    }
  }

  for (let i = 0; i < currency.length - 1; i++) {
    if (currency[i].cc === outputSelect) {
      result += firstSelectSum * currency[i].rate;
    }
  }

  return result.toFixed(2);
};
