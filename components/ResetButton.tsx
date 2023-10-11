import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

interface ResetButtonProps {
    onPress: () => void;
}

const ResetButton: React.FC<ResetButtonProps> = ({onPress}) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>Reset Game</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'lightblue',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        fontSize: 16,
        color: 'white',
    },
});

export default ResetButton;
