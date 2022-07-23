export const supportedTokens = [
  {
    contractAddress: "TG3XXyExBkPp9nzdajDZsozEu4BkaSJozs",
    decimal: 6,
    name: "usdt",
  },
];
export const supportedTokensMap = () => {
  let tokens = new Map();
  for (let i in supportedTokens) {
    tokens.set(supportedTokens[i].name, supportedTokens[i]);
  }
  return tokens;
};
