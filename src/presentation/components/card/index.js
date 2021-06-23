import React from "react";
import { Image, View, Text, TouchableOpacity } from "react-native";

const Card = ({ source, title }) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        height: 200,
        borderBottomWidth: 2,
        borderBottomColor: "black",
        width: "100%",
      }}
    >
      <Image source={require("../../../assets/Doc/IconRG.png")} />
      <Text style={{ color: "white", marginLeft: 56 }}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Card;
