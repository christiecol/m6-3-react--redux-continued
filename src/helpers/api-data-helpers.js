export const NumberShorten = (num) => {
  const splitNum = num.toString().split("");
  switch (splitNum.length) {
    case 1 || 2 || 3:
      return num;
    case 4:
      return `${splitNum[0]}.${splitNum[1]}K`;
    case 5:
      return `${splitNum[0]}${splitNum[1]}.${splitNum[2]}K`;
    case 6:
      return `${splitNum[0]}${splitNum[1]}${splitNum[2]}K`;
    case 7:
      return `${splitNum[0]}.${splitNum[1]}M`;
    case 8:
      return `${splitNum[0]}${splitNum[1]}.${splitNum[2]}M`;
    case 9:
      return `${splitNum[0]}${splitNum[1]}${splitNum[2]}M`;
    default:
      return;
  }
};
