import React from "react";
import { Image } from "react-native";
import icon from "../../../assets/IconHome.png";
import { Button, Text, Container } from "../../components";
import { withNavigation } from "react-navigation";
import { useTheme } from "../../../main/theme/index";

const Home = ({ navigation }) => {
  const { changeTheme } = useTheme();

  const handleClick = () => {
    navigation.navigate("Indexing");
    changeTheme("red");
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
          BrSafe
        </Text>
        <Text size={16}>Bioface</Text>
      </Container>
      <Button title="INICIAR" handleClick={handleClick} />
    </>
  );
};
export default withNavigation(Home);
