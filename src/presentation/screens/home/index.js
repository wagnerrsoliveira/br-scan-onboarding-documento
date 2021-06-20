import React from "react";
import { Image } from "react-native";
import icon from "../../../assets/IconHome.png";
import { Button, Text, Container } from "../../components";

const Home = () => {
  const handleClick = () => {
    console.log("pass here");
  };

  return (
    <>
      <Container>
        <Image
          source={icon}
          tintColor="black"
          style={{ flex: 0, marginBottom: 32 }}
        />
        <Text size={24} weight="bold">
          BrSafe
        </Text>
        <Text size={16}>Bioface</Text>
      </Container>
      <Button title="INICIAR" handleClick={handleClick} />
    </>
  );
};

export default Home;
