import DateTimePicker from "@react-native-community/datetimepicker";
import { Calendar, Clock, MapPin, X } from "phosphor-react-native";
import React, { useState } from "react";
import { DefaultButton } from "../DefaultButton";

import {
  CloseModalButton,
  Container,
  DateTimePickerWrapper,
  Input,
  InputWrapper,
  LineDivider,
  TimePickerWrapper,
} from "./styles";

export function SearchRidesModal({ ...props }) {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");

  const onChangeDateTime = (event, selectedDate) => {
    setDate(selectedDate);
  };

  const onChangeTime = (event, selectedTime) => {
    setTime(selectedTime);
  };

  const handleFormatDateAndTimeAndSearch = () => {
    //timeFormat
    const dataTimeUtc = new Date(time);
    const timeBrasilia = dataTimeUtc.toLocaleString("en-US", {
      timeZone: "America/Sao_Paulo",
    });
    const horarioBrasilia = timeBrasilia.split(" ")[1];

    // dataFormat
    const dataUtc = new Date(date);
    const year = dataUtc.getFullYear();
    const month = ("0" + (dataUtc.getMonth() + 1)).slice(-2);
    const day = ("0" + dataUtc.getDate()).slice(-2);
    const dateFormatted = `${year}-${month}-${day}`;

    props.onRequestChangeStateModal();
    props.onRequestGetRides({
      start_date: dateFormatted,
      start_time: horarioBrasilia,
      origin: origin,
      destination: destination,
    });
  };

  return (
    <Container>
      <CloseModalButton onPress={() => props.onRequestChangeStateModal()}>
        <X size={32} color="#064652" />
      </CloseModalButton>
      <InputWrapper>
        <MapPin size={32} color="#064652" />
        <Input
          value={origin}
          onChangeText={setOrigin}
          placeholder="Saindo de..."
          autoCorrect={false}
          autoCapitalize="none"
          placeholderTextColor="#064652"
        />
      </InputWrapper>
      <LineDivider />
      <InputWrapper>
        <MapPin size={32} color="#064652" />
        <Input
          value={destination}
          onChangeText={setDestination}
          placeholder="Indo para..."
          autoCorrect={false}
          autoCapitalize="none"
          placeholderTextColor="#064652"
        />
      </InputWrapper>
      <LineDivider />
      <DateTimePickerWrapper>
        <Calendar size={32} color="#064652" />
        <DateTimePicker
          value={date}
          mode={"date"}
          is24Hour={true}
          onChange={onChangeDateTime}
          minimumDate={new Date()}
        />
      </DateTimePickerWrapper>
      <TimePickerWrapper>
        <Clock size={32} color="#064652" />
        <DateTimePicker
          value={time}
          mode={"time"}
          onChange={onChangeTime}
          is24Hour={true}
        />
      </TimePickerWrapper>
      <DefaultButton
        title={"Procurar"}
        onPress={handleFormatDateAndTimeAndSearch}
      />
    </Container>
  );
}
