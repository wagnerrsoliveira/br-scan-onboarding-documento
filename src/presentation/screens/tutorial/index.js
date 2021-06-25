import React, { useState } from "react";
import { Image, View } from "react-native";
import Swiper from "react-native-swiper";
import icon from "../../../assets/IconHome.png";
import { Button, Text, Container } from "../../components";

const Tutorial = () => {
  const [step, setStep] = useState(0);
  const [pages, setPages] = useState([
    {
      title: "Vamos lá!",
      subtitle: "Tenha seus documentos em mãos, RG ou CNH",
      source: require("../../../assets/Doc/IconCNH.png"),
    },
    {
      title:
        "Você precisa liberar o acesso à câmera para fotografar os documentos.",
      source: require("../../../assets/Doc/DicoIconCamera.png"),
    },
  ]);
  const renderPageTutorial = ({ title, subtitle, source }, index) => {
    return (
      <View
        key={`CARD${index}`}
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <Image source={source} tintColor="black" />
        <Container>
          <Text size={24} weight="bold">
            {title}
          </Text>
          {subtitle && <Text>{subtitle}</Text>}
        </Container>
      </View>
    );
  };

  const handleClick = () => {
    setStep((old) => old + 1);
  };

  return (
    <>
      <Swiper
        showsPagination={false}
        loop={false}
        index={step}
        onIndexChanged={setStep}
        buttonWrapperStyle={{
          position: "absolute",
          bottom: 0,
        }}
      >
        {pages.map(renderPageTutorial)}
      </Swiper>
      <Button title={`INICIAR${step}`} handleClick={handleClick} />
    </>
  );
};

export default Tutorial;
