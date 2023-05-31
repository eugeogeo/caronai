export const Container = styled(TouchableOpacity)`
    width: 80%;
    justify-content: center;
    align-items: center;
    background-color: #173EA5;
    border-radius: 50px;
    padding: 12px 0px;
    flex-direction: row;
    margin-top: 16px;
`;

export const ButtonTitle = styled.Text`
    color: #FFFFFF;
    font-weight: 600;
    font-size: ${RFValue(14)}px;
`;

export const Loader = styled(ActivityIndicator)`
    margin-left: 8px;
`;