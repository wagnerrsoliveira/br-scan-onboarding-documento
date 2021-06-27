import React from "react";
import { TouchableOpacity, View, Image, Text } from "react-native";
import iconArrowBack from "../../../assets/IconLeft.png";

const Header = ({ handleLeft, handleRight }) => {
  return (
    <View
      style={{
        padding: 24,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <TouchableOpacity onPress={handleLeft}>
        <Image source={iconArrowBack} tintColor="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleRight}>
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "black" }}>
          X
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;
