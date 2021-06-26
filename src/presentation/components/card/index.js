import React from "react";
import { Image, Text, TouchableOpacity } from "react-native";

const Card = ({ uri, title, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        height: 200,
      }}
      onPress={onPress}
    >
      <Image source={{ uri }} />
      <Text style={{ color: "white", marginLeft: 56 }}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Card;
