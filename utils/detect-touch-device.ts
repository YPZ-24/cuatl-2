const isTouchEnabled = () => {
  return ('touchstart' in window) || navigator.maxTouchPoints;
};

export default isTouchEnabled;
