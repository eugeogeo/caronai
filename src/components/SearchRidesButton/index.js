import { MagnifyingGlass } from "phosphor-react-native";
import React from "react";

import { Container } from "./styles";

export function SearchRidesButton({ ...props }) {
  return (
    <Container activeOpacity={0.8} {...props}>
      <MagnifyingGlass size={32} color="#6F8B90" />
    </Container>
  );
}
