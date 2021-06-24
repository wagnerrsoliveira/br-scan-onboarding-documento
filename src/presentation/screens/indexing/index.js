import React, { useRef, useState, useEffect } from "react";
import { TextInputMask } from "react-native-masked-text";
import { Button, Container, Text } from "../../components";
import { withNavigation } from "react-navigation";
import { useTheme } from "../../../main/theme/index";

const Indexing = ({ navigation }) => {
  const { changeTheme } = useTheme();

  useEffect(() => {
    changeTheme("red");
  }, []);

  const refCpf = useRef();
  const [cpf, setCpf] = useState("");

  const handleChangeCpf = (value) => {
    setCpf(value);
  };

  const handleClick = () => {
    if (refCpf.current?.isValid()) {
      navigation.navigate("ChooseDocument");
    }
  };

  return (
    <>
      <Container style={{ padding: 16 }}>
        <Text size={24}>Para começar, preencha as informações abaixo.</Text>
        <TextInputMask
          type="cpf"
          placeholder="000.000.000-00"
          maxLength={14}
          value={cpf}
          onChangeText={handleChangeCpf}
          keyboardType="numeric"
          style={{ width: "100%", fontSize: 18 }}
          ref={(ref) => (refCpf.current = ref)}
        />
      </Container>
      <Button title="INICIAR" handleClick={handleClick} />
    </>
  );
};

export default withNavigation(Indexing);
