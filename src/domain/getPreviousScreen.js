import { routes } from "../data/rotes";

const getPreviousScreen = (currentScreen) => {
  const currentIndex = routes.findIndex(
    (route) => route.screen === currentScreen
  );
  if (currentIndex > -1 && currentIndex - 1 < -1) {
    return routes[currentIndex - 1];
  }
  return "";
};

export default getPreviousScreen;
