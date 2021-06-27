import React, { useRef, useState, useEffect } from "react";
import { BackHandler, KeyboardAvoidingView, View } from "react-native";
import { TextInputMask } from "react-native-masked-text";
import { Button, Text, Container } from "../../components";
import { withNavigation } from "react-navigation";
import { useApp } from "../../../main/contexts/appContext";
import { TextBlack, TextWhite } from "./styles";

const Indexing = ({ navigation }) => {
  const { handleNextScreen, handleBackScreen } = useApp();

  const handleClick = () => {
    handleNextScreen("Indexing", navigation);
    if (refCpf.current?.isValid()) {
    }
  };

  const handleGoBack = () => {
    handleBackScreen("Indexing", navigation);
  };

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", handleGoBack);

    return () =>
      BackHandler.removeEventListener("hardwareBackPress", handleGoBack);
  }, [navigation]);

  const refCpf = useRef();
  const [cpf, setCpf] = useState("");

  const handleChangeCpf = (value) => {
    setCpf(value);
  };

  return (
    <>
      <Container>
        <View
          style={{
            height: "100%",
            flexDirection: "column",
            backgroundColor: "red",
            justifyContent: "space-between",
            paddingTop: 81,
            paddingBottom: 16,
          }}
        >
          <View style={{ paddingTop: 32 }}>
            <Text size={24} align="left">
              Para começar, preencha as informações abaixo.
            </Text>
            <View style={{ padding: 16, paddingTop: 56, width: "100%" }}>
              <TextBlack>CPF</TextBlack>
              <TextInputMask
                type="cpf"
                placeholder="000.000.000-00"
                maxLength={14}
                value={cpf}
                onChangeText={handleChangeCpf}
                keyboardType="numeric"
                style={{ width: "100%", fontSize: 18 }}
                ref={(ref) => (refCpf.current = ref)}
                placeholderTextColor="#fff"
                style={{
                  borderBottomColor: "#fff",
                  borderBottomWidth: 2,
                  width: "100%",
                }}
              />
            </View>
          </View>
          <View>
            <TextBlack align="center">
              Ao comfirmar você estará de acordo com nossa
            </TextBlack>
            <TextWhite>Politica e Privacidade</TextWhite>
          </View>
        </View>
      </Container>
      <Button title="INICIAR" handleClick={handleClick} />
    </>
  );
};

export default withNavigation(Indexing);
