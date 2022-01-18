const abbrNumberFormat = (num: number) => {
  const unit = ["K", "M", "B", "T"];

  let tempNum = num;
  let i = 0;
  for (; i < unit.length; i++) {
    if (tempNum < 999) {
      break;
    }
    tempNum = Number(Number(tempNum / 1000).toFixed(2));
  }

  return i === 0 ? tempNum : `${tempNum}${unit[i - 1]}`;
};

export default abbrNumberFormat;
