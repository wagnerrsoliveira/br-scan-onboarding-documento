import React from "react";
import { createStackNavigator } from "react-navigation";

import Home from "../presentation/screens/home";
import Indexing from "../presentation/screens/indexing";
import Tutorial from "../presentation/screens/tutorial";
import ChooseTypeDocument from "../presentation/screens/choose-type-document";
import SelectSideDocument from "../presentation/screens/select-side-document";
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
    Tutorial: {
      screen: Tutorial,
    },
    ChooseTypeDocument: {
      screen: ChooseTypeDocument,
    },
    SelectSideDocument: {
      screen: SelectSideDocument,
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
