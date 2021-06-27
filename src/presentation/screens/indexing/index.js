import React, { useRef, useState, useEffect } from "react";
import { BackHandler } from "react-native";
import { TextInputMask } from "react-native-masked-text";
import { TextInput } from "react-native-paper";
import { Button, Text } from "../../components";
import { withNavigation } from "react-navigation";
import { ScrollView } from "react-native";
import { useApp } from "../../../main/contexts/appContext";

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
    BackHandler.addEventListener("indexingBackPress", handleGoBack);

    return () =>
      BackHandler.removeEventListener("indexingBackPress", handleGoBack);
  }, []);

  const refCpf = useRef();
  const [cpf, setCpf] = useState("");

  const handleChangeCpf = (value) => {
    setCpf(value);
  };

  return (
    <>
      <ScrollView style={{ backgroundColor: "red" }}>
        <Text size={24}>Para começar, preencha as informações abaixo.</Text>

        {/* <TextInputMask
          type="cpf"
          placeholder="000.000.000-00"
          maxLength={14}
          value={cpf}
          onChangeText={handleChangeCpf}
          keyboardType="numeric"
          style={{ width: "100%", fontSize: 18 }}
          ref={(ref) => (refCpf.current = ref)}
          placeholderTextColor="#fff"
          style={{ borderBottomColor: "#fff", borderBottomWidth: 2 }}
        /> */}
        <TextInput
          label="Email"
          value={text}
          onChangeText={(text) => setText(text)}
        />
        <Button title="INICIAR" handleClick={handleClick} />
      </ScrollView>
    </>
  );
};

export default withNavigation(Indexing);
