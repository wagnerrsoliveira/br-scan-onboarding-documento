import React from "react";
import { Image, View, Text, TouchableOpacity } from "react-native";

const Card = ({ uri, title }) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        height: 200,
      }}
    >
      <Image source={{ uri }} />
      <Text style={{ color: "white", marginLeft: 56 }}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Card;
