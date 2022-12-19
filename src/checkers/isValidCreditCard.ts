const updateSalt = (salt?: number) => (salt === 1 ? 2 : 1);
const isTwoDigitsNumber = (n: number) => n > 9;

const luhnCheck = (creditCardNumbers: string): boolean => {
  let salt = updateSalt(); // takes value of 1 or 2

  const checksum = creditCardNumbers
    .split("")
    .reverse()
    .reduce((acc: any, val: any) => {
      let calc = 0;
      //Extract the next digit value and multiply by salt.
      calc = Number(val) * salt;

      //If the result is in two digits add 1 to the checksum total
      if (isTwoDigitsNumber(calc)) {
        acc = acc + 1;
        calc = calc - 10;
      }

      //Add the units element to the checksum total
      acc = acc + calc;

      //Update the salt value
      salt = updateSalt(salt);
      return acc;
    }, 0);

  //Check if it is divisible by 10 or not.
  return checksum % 10 == 0;
};

export default (input?: string): boolean => {
  //Check if the number contains only numeric value
  //and is of between 13 and 19 digits
  const regex = new RegExp("^[0-9]{13,19}$");
  return regex.test(input) && luhnCheck(input);
};
