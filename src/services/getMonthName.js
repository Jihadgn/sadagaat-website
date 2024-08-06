export function getMonthName(d) {
  if (d) {
    const date = new Date(d);
    const month = date.toLocaleString("en-US", { month: "short" });
    return month;
  }
}

export function getNumberWithComma(num) {
  if (num) {
    const number = num?.toLocaleString("en-US", {
      style: "currency",
      currency: "SDG",
    });
    return number;
  }
}

export function getNumber(num) {
  if (num) {
    const number = num?.toLocaleString("en-US");
    return number;
  }
}

export function getCurrentDate() {
  const date = new Date();
  const now = date.toLocaleString("en-US");
  return now;
}

export function Precision(percentage) {
  if (percentage) {
    let shortPercentage = percentage?.toPrecision(3);
    return shortPercentage;
  }
}
