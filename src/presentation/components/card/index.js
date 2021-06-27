import React from "react";
import { Image, Text, TouchableOpacity } from "react-native";

const Card = ({ resource, title, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        height: 180,
      }}
      onPress={onPress}
    >
      <Image source={resource} style={{ marginLeft: 24 }} />
      <Text style={{ color: "white", marginLeft: 56 }}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Card;
