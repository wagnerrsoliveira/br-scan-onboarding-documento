import React, { useState, useEffect, useRef } from "react";
import { Image, View } from "react-native";
import Swiper from "react-native-swiper";
import { withNavigation } from "react-navigation";
import { Button, Text, Container } from "../../components";
import { useTheme } from "../../../main/theme/index";
import { tutorialList } from "./staticData";

const Tutorial = ({ navigation }) => {
  const { changeTheme } = useTheme();

  const swiper = useRef();
  const [step, setStep] = useState(0);

  useEffect(() => {
    changeTheme("light");
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
      navigation.navigate("ChooseDocument");
    } else {
      swiper.current?.scrollBy(step + 1, true);
    }
  };

  return (
    <>
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
