import React from "react";
import { TouchableOpacity, View, Image, Text } from "react-native";
import iconArrowBack from "../../../assets/IconLeft.png";
import { ImageStyled } from "./styles";

const Header = ({ handleLeft, handleRight }) => {
  return (
    <View
      style={{
        padding: 24,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      {handleLeft ? (
        <TouchableOpacity onPress={handleLeft}>
          <ImageStyled source={iconArrowBack} />
        </TouchableOpacity>
      ) : (
        <View />
      )}
      {handleRight ? (
        <TouchableOpacity onPress={handleRight}>
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "black" }}>
            X
          </Text>
        </TouchableOpacity>
      ) : (
        <View />
      )}
    </View>
  );
};

export default Header;
