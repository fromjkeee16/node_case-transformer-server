const CASES_ENUM = {
  KEBAB: 'KEBAB',
  SNAKE: 'SNAKE',
  CAMEL: 'CAMEL',
  PASCAL: 'PASCAL',
  UPPER: 'UPPER',
};

const SEARCH_PARAM_ENUM = {
  TO_CASE: 'toCase',
};

const ERROR_MESSAGES = {
  BAD_REQUEST: 'BAD REQUEST!',
  EMPTY_QUERY:
    // eslint-disable-next-line max-len
    'Text to convert is required. Correct request is: "/<TEXT_TO_CONVERT>?toCase=<CASE_NAME>".',
  CASE_MISSING:
    // eslint-disable-next-line max-len
    'This case is not supported. Available cases: SNAKE, KEBAB, CAMEL, PASCAL, UPPER.',
  WRONG_CASE:
    // eslint-disable-next-line max-len
    '"toCase" query param is required. Correct request is: "/<TEXT_TO_CONVERT>?toCase=<CASE_NAME>".',
};

const RESPONSE_KEYS = {
  ORIGINAL_CASE: 'originalCase',
  TARGET_CASE: 'targetCase',
  ORIGINAL_TEXT: 'originalText',
  CONVERTED_TEXT: 'convertedText',
};

module.exports = {
  CASES_ENUM,
  SEARCH_PARAM_ENUM,
  ERROR_MESSAGES,
  RESPONSE_KEYS,
};
