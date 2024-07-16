export default (api) => {
  api.cache(true); //plugin이나 preset을 캐시하여 다시 실행하지 않도록
  return {
    presets: [
      "@babel/preset-react",
      "@babel/preset-env",
      "@babel/preset-typescript",
    ],
  };
};
