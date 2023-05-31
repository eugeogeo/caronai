import React from "react";
import { ButtonTitle, Container } from "./styles";

export function RegisterButton({ ...props }) {
  return (
    <Container activeOpacity={0.7} {...props}>
      <ButtonTitle>Criar uma conta</ButtonTitle>
    </Container>
  );
}
