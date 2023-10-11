import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface ScoreProps {
    attempts: number;
}

const Attempts: React.FC<ScoreProps> = ({attempts}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Attempts: {attempts}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginBottom: 20,
    },
    text: {
        fontSize: 20,
    },
});

export default Attempts;
