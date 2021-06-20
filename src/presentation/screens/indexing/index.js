import React, { useState } from "react";
import { TextInputMask } from "react-native-masked-text";
import { Button, Container, Text } from "../../components";

const Indexing = () => {
  const [cpf, setCpf] = useState("");

  const handleChangeCpf = (value) => {
    setCpf(value);
  };

  const handleClick = () => {
    console.log("pass here");
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
        />
      </Container>
      <Button title="INICIAR" handleClick={handleClick} />
    </>
  );
};

export default Indexing;
