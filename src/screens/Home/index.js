import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import { FlatList } from 'react-native';
import Modal from "react-native-modal";
import { Loader } from '../../components/Loader';
import { SearchRidesButton } from '../../components/SearchRidesButton';
import { SearchRidesModal } from '../../components/SearchRidesModal';
import { api } from '../../services/api';

import {
    AvailableRides,
    AvailableRidesTitle,
    CardsWrapper,
    Container,
    SearchWrapper,
    WarningWrapper
} from './styles';

import { SmileySad } from 'phosphor-react-native';

import { RideCard } from '../../components/RideCard';

export function Home() {

    const [rides, setRides] = useState();
    const [isLoading, setIsLoading] = useState();
    const [modalVisible, setModalVisible] = useState(false);

    async function getRides(params) {

        setIsLoading(true)

        await api.get('/rides/', { params })
            .then(response => {
                setRides(response.data);
                setIsLoading(false);
            })
            .catch(error => {
                setIsLoading(false)
            })
    }

    function handleChangeStateModal() {
        setModalVisible(!modalVisible)
    }

    useFocusEffect(
        useCallback(() => {
            const dataUtc = new Date();
            const year = dataUtc.getFullYear();
            const month = ("0" + (dataUtc.getMonth() + 1)).slice(-2);
            const day = ("0" + dataUtc.getDate()).slice(-2);
            const dateFormatted = `${year}-${month}-${day}`;
             
            getRides(
                {
                    start_date: dateFormatted
                }
            );
        }, [])
      );

    return (
        <Container>
            <SearchWrapper>
                <SearchRidesButton onPress={handleChangeStateModal} />
            </SearchWrapper>

            {!isLoading && rides && rides.length >= 1 &&
                <AvailableRides>
                    <AvailableRidesTitle>{rides.length} {rides.length > 1 ? "caronas disponíveis" : "carona disponível"}</AvailableRidesTitle>
                </AvailableRides>
            }
            {isLoading ? <Loader /> :

                <CardsWrapper>
                    {rides && rides.length > 0 ?
                        <FlatList
                            data={rides}
                            renderItem={({ item }) => <RideCard item={item} />}
                            contentContainerStyle={{ paddingVertical: 16 }}
                            showsVerticalScrollIndicator={false}
                        />
                        : <WarningWrapper>
                            <SmileySad size={64} color='#6F8B90' />
                            <AvailableRidesTitle>Nenhuma carona disponível.</AvailableRidesTitle>
                        </WarningWrapper>
                    }
                </CardsWrapper>
            }
            <Modal 
                isVisible={modalVisible} 
                swipeDirection="down" 
                propagateSwipe={true} 
                onSwipeComplete={handleChangeStateModal}>
                <SearchRidesModal 
                    onRequestChangeStateModal={handleChangeStateModal}
                    onRequestGetRides={getRides}
                />
            </Modal>
        </Container>
    );
}
