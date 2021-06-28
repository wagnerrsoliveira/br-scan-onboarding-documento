import React, { useState, useEffect, useRef } from "react";
import { Image, View, BackHandler } from "react-native";
import Swiper from "react-native-swiper";
import { withNavigation } from "react-navigation";
import { Button, Text, Container, Header } from "../../components";
import { useApp } from "../../../main/contexts/appContext";
import { tutorialList } from "./staticData";

const Tutorial = ({ navigation }) => {
  const { handleNextScreen, handleBackScreen } = useApp();
  const swiper = useRef();
  const [step, setStep] = useState(0);

  const handleGoBack = () => {
    handleBackScreen("Tutorial", navigation);
  };

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", handleGoBack);

    return () =>
      BackHandler.removeEventListener("hardwareBackPress", handleGoBack);
  }, []);

  const renderPageTutorial = ({ title, subtitle, source }, index) => {
    return (
      <View
        key={`CARD${index}`}
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
          paddingTop: 48,
        }}
      >
        <Image source={source} tintColor="black" />
        <View>
          <Text size={24} weight="bold">
            {title}
          </Text>
          {subtitle && <Text>{subtitle}</Text>}
        </View>
      </View>
    );
  };

  const handleClick = () => {
    if (step >= tutorialList.length - 1) {
      handleNextScreen("Tutorial", navigation);
    } else {
      swiper.current?.scrollBy(1, true);
    }
  };

  const handleBack = () => {
    swiper.current?.scrollBy(-1, true);
  };

  return (
    <>
      <Header handleLeft={handleBack} />
      <Swiper
        showsPagination={false}
        loop={false}
        index={step}
        onIndexChanged={setStep}
        ref={(ref) => {
          swiper.current = ref;
        }}
      >
        {tutorialList.map(renderPageTutorial)}
      </Swiper>
      <Button
        title={tutorialList[step].buttonTitle || ""}
        handleClick={handleClick}
      />
    </>
  );
};

export default withNavigation(Tutorial);
