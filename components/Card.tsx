import React from 'react';
import {Dimensions, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface CardProps {
    value: string;
    isFlipped: boolean;
    onClick: () => void;
}

const {width} = Dimensions.get('window');
const cardSize = width * 0.2;

const Card: React.FC<CardProps> = ({value, isFlipped, onClick}) => {
    return (
        <TouchableOpacity
            style={[styles.card, {width: cardSize, height: cardSize}, isFlipped && styles.flipped]}
            onPress={onClick}
        >
            <View style={styles.cardContent}>
                {isFlipped ? (
                    <Text style={styles.cardText}>{value}</Text>
                ) : null}
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'lightblue',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
    },
    flipped: {
        backgroundColor: 'lightgreen',
    },
    cardContent: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default Card;
