import React from "react";
import Camera from "../../components/camera";
import { withNavigation } from "react-navigation";

const CaptureImage = ({ navigation }) => {
  const handleCaptureImage = () => {
    navigation.navigate("Success");
  };

  return <Camera onPress={handleCaptureImage} />;
};

export default withNavigation(CaptureImage);
