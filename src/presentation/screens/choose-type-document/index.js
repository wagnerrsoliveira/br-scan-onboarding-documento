import React, { useEffect } from "react";
import { FlatList, Image, BackHandler } from "react-native";
import { Text, Container, Card } from "../../components";
import { chooses } from "../../../data/chooses";
import separatorImage from "../../../assets/Doc/Line.png";
import { withNavigation } from "react-navigation";
import { useApp } from "../../../main/contexts/appContext";

const ChooseTypeDocument = ({ navigation }) => {
  const { handleNextScreen, handleBackScreen, handleSelectDocument } = useApp();

  const handleGoBack = () => {
    handleBackScreen("ChooseTypeDocument", navigation);
  };

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", handleGoBack);

    return () =>
      BackHandler.removeEventListener("hardwareBackPress", handleGoBack);
  }, []);

  const renderCard = ({ item }) => {
    return (
      <Card
        title={item.title}
        resource={item.resource}
        onPress={() => handleChooseTypeDocument(item.document)}
      />
    );
  };

  const handleChooseTypeDocument = (document) => {
    handleSelectDocument(document);
    handleNextScreen("ChooseTypeDocument", navigation);
  };

  const renderSeparator = () => {
    return <Image source={separatorImage} style={{ width: "100%" }} />;
  };

  return (
    <Container
      style={{
        padding: 16,
      }}
      porcet={10}
    >
      <FlatList
        ListHeaderComponent={
          <Text size={24} weight="bold">
            Selecione o tipo de documento.
          </Text>
        }
        ItemSeparatorComponent={renderSeparator}
        style={{ flex: 1 }}
        data={chooses}
        renderItem={renderCard}
        keyExtractor={(item) => item.title}
      />
    </Container>
  );
};

export default withNavigation(ChooseTypeDocument);
