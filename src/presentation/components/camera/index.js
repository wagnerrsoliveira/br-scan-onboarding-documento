import React, { useRef } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { RNCamera } from "react-native-camera";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen");

const Camera = () => {
  const camera = useRef();
  takePicture = async () => {
    if (camera.current) {
      const options = { quality: 0.5, base64: true };
      const data = await camera.current.takePictureAsync(options);
      console.log(data.uri);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Aperte o botão para capturar a foto</Text>
        <Text style={styles.text}>X</Text>
      </View>
      <RNCamera
        ref={(ref) => {
          camera.current = ref;
        }}
        style={styles.preview}
        captureAudio={false}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.on}
        androidCameraPermissionOptions={{
          title: "Permission to use camera",
          message: "We need your permission to use your camera",
          buttonPositive: "Ok",
          buttonNegative: "Cancel",
        }}
      />
      <View style={styles.footer}>
        <View style={styles.containerCapture}>
          <TouchableOpacity
            onPress={takePicture}
            style={styles.capture}
          ></TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "black",
    padding: 24,
    paddingTop: 32,
    borderColor: "#000",
  },
  header: {
    padding: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    color: "#fff",
  },
  preview: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  footer: {
    position: "absolute",
    bottom: 48,
    width,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  containerCapture: {
    backgroundColor: "transparent",
    borderRadius: 60,
    padding: 8,
    borderStyle: "dotted",
    borderColor: "#c72825",
    borderWidth: 3,
  },
  capture: {
    flex: 0,
    backgroundColor: "#c72825",
    borderRadius: 25,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: "center",
    width: 50,
    height: 50,
  },
});

export default Camera;
