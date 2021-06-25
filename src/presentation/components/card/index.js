import React from "react";
import { Image, View, Text, TouchableOpacity } from "react-native";

const Card = ({ source, title }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        height: 200,
        borderBottomWidth: 2,
        borderBottomColor: "black",
      }}
    >
      <Image source={require("../../../assets/Doc/IconRG.png")} />
      <Text style={{ color: "white", marginLeft: 56 }}>{title}</Text>
    </View>
  );
};

export default Card;
