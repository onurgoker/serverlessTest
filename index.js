export const handler = async (event) => {
  // TODO implement

//  return response;

const randomNumberOne = event.key1
const randomNumberTwo = event.key2;
const result = randomNumberOne + randomNumberTwo;

const response = {
    statusCode: 200,
    body: 'Key1: ' + event.key1 + ' Key2: ' + event.key2 + ' Result: ' + result,
};

return response;
};
