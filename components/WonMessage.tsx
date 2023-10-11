import React from 'react';
import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface WonMessageProps {
    visible: boolean;
    onClose: () => void;
}

const WonMessage: React.FC<WonMessageProps> = ({visible, onClose}) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text style={styles.messageText}>You Won!</Text>
                    <TouchableOpacity onPress={onClose}>
                        <Text style={styles.closeButton}>Close</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        elevation: 5,
    },
    messageText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    closeButton: {
        fontSize: 16,
        color: 'blue',
        marginTop: 20,
    },
});

export default WonMessage;
