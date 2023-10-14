import React from 'react';
import {StyleSheet, View} from 'react-native';

interface CardContainerProps {
    children: React.ReactNode;
}

const CardContainer: React.FC<CardContainerProps> = ({children}) => {
    return (
        <View style={styles.container}>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
});

export default CardContainer;
