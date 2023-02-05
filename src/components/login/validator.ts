const MIN_ORDER_NUMBER_LENGTH = 5;
const ZIP_CODE_LENGTH = 5;

export const isValidOrderNumber = (orderNumber: string) => {
  return orderNumber.length >= MIN_ORDER_NUMBER_LENGTH;
};

export const isValidZipCode = (zipCode: string) => {
  return zipCode.length === ZIP_CODE_LENGTH;
};
