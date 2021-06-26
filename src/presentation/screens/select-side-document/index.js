import React, { useEffect } from "react";
import { FlatList, Image } from "react-native";
import { Text, Container, Card } from "../../components";
import { useTheme } from "../../../main/theme/index";
import { rg } from "./staticData";
import separatorImage from "../../../assets/Doc/Line.png";
import { withNavigation } from "react-navigation";

const SelectSideDocument = ({ navigation }) => {
  const { changeTheme } = useTheme();

  useEffect(() => {
    changeTheme("red");
  }, []);

  const renderCard = ({ item }) => {
    return (
      <Card
        title={item.title}
        uri={item.uri}
        onPress={handleSelectSideDocument}
      />
    );
  };

  const handleSelectSideDocument = () => {
    navigation.navigate("CaptureImage");
  };

  const renderSeparator = () => {
    return <Image source={separatorImage} width="100%" />;
  };

  return (
    <Container
      style={{
        padding: 16,
      }}
    >
      <FlatList
        ListHeaderComponent={
          <Text size={24} weight="bold">
            Selecione o tipo de documento.
          </Text>
        }
        ItemSeparatorComponent={renderSeparator}
        style={{ flex: 1 }}
        data={rg}
        renderItem={renderCard}
        keyExtractor={(item) => item.title}
      />
    </Container>
  );
};

export default withNavigation(SelectSideDocument);
