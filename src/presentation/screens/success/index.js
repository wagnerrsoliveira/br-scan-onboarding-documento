import React from "react";
import { Image } from "react-native";
import icon from "../../../assets/IconHome.png";
import { Button, Text, Container } from "../../components";

const Success = () => {
  const handleClick = () => {
    console.log("pass here");
  };
  return (
    <>
      <Container>
        <Image
          source={require("../../../assets/IconHome.png")}
          tintColor="black"
          style={{ flex: 0, marginBottom: 32 }}
        />
        <Text size={24} weight="bold">
          Pronto
        </Text>
        <Text size={16}>Seu documento foi recebido.</Text>
      </Container>
      <Button title="FINALIZAR" handleClick={handleClick} />
    </>
  );
};

export default Success;
