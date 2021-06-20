import React, { useState } from "react";
import { Image } from "react-native";
import Swiper from "react-native-swiper";
import icon from "../../../assets/IconHome.png";
import { Button, Text, Container } from "../../components";

const Tutorial = () => {
  const [step, setStep] = useState(0);
  const renderPageTutorial = () => {
    return (
      <Container>
        <Image source={icon} tintColor="black" style={{ flex: 0 }} />
        <Container>
          <Text size={18} weight="bold">
            BrSafe
          </Text>
          <Text>Bioface</Text>
        </Container>
      </Container>
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
        {renderPageTutorial()}
        {renderPageTutorial()}
      </Swiper>
      <Button title={`INICIAR${step}`} handleClick={handleClick} />
    </>
  );
};

export default Tutorial;
