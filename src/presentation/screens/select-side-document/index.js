import React, { useEffect } from "react";
import { FlatList, Image, BackHandler } from "react-native";
import { Text, Container, Card } from "../../components";
import separatorImage from "../../../assets/Doc/Line.png";
import { withNavigation } from "react-navigation";
import { useApp } from "../../../main/contexts/appContext";

const SelectSideDocument = ({ navigation }) => {
  const { handleNextScreen, handleBackScreen, document } = useApp();

  const handleGoBack = () => {
    handleBackScreen("ChooseTypeDocument", navigation);
  };

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", handleGoBack);

    return () =>
      BackHandler.removeEventListener("hardwareBackPress", handleGoBack);
  }, [navigation]);

  const renderCard = ({ item }) => {
    return (
      <Card
        title={item.title}
        resource={item.resource}
        onPress={handleSelectSideDocument}
      />
    );
  };

  const handleSelectSideDocument = () => {
    handleNextScreen("SelectSideDocument", navigation);
  };

  const renderSeparator = () => {
    return <Image source={separatorImage} style={{ width: "100%" }} />;
  };

  if (!document) return <></>;

  return (
    <Container
      style={{
        padding: 16,
      }}
      porcet={10}
    >
      <FlatList
        ListHeaderComponent={
          <Text size={16} weight="bold">
            {document.title}
          </Text>
        }
        ItemSeparatorComponent={renderSeparator}
        style={{ flex: 1 }}
        data={document.value}
        renderItem={renderCard}
        keyExtractor={(item) => item.title}
      />
    </Container>
  );
};

export default withNavigation(SelectSideDocument);
