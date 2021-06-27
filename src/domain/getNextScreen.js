import { routes } from "../data/rotes";

const getNextScreen = (currentScreen) => {
  const currentIndex = routes.findIndex(
    (route) => route.screen === currentScreen
  );
  if (currentIndex > -1 && currentIndex + 1 < routes.length) {
    return routes[currentIndex + 1];
  }
  return "";
};

export default getNextScreen;
