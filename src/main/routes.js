import React from "react";
import { createStackNavigator } from "react-navigation";

import Home from "../presentation/screens/home";
import Indexing from "../presentation/screens/indexing";
import ChooseDocument from "../presentation/screens/choose-document";
import CaptureImage from "../presentation/screens/capture-image";
import Success from "../presentation/screens/success";

const Routes = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
    Indexing: {
      screen: Indexing,
    },
    ChooseDocument: {
      screen: ChooseDocument,
    },
    CaptureImage: {
      screen: CaptureImage,
    },
    Success: {
      screen: Success,
    },
  },
  {
    headerMode: "none",
  }
);

export default Routes;
