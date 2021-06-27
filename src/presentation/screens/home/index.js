import React from "react";
import { Image } from "react-native";
import icon from "../../../assets/IconHome.png";
import { Button, Text, Container } from "../../components";
import { withNavigation } from "react-navigation";
import { useApp } from "../../../main/contexts/appContext";

const Home = ({ navigation }) => {
  const { handleNextScreen } = useApp();

  const handleClick = () => {
    handleNextScreen("Home", navigation);
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
export default withNavigation(Home);
