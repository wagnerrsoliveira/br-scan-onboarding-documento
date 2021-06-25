import React from "react";
import { FlatList } from "react-native";
import { Text, Container, Card } from "../../components";
import chooses from "./staticData";

const ChooseDocument = () => {
  const renderCard = ({ item }) => {
    return <Card key={item} title={item.title} source={item.source} />;
  };

  return (
    <Container
      style={{
        padding: 16,
      }}
    >
      <Text size={24} weight="bold">
        Selecione o tipo de documento.
      </Text>
      <FlatList
        style={{ flex: 1 }}
        data={chooses}
        renderItem={renderCard}
        keyExtractor={(item) => item}
      />
    </Container>
  );
};

export default ChooseDocument;
