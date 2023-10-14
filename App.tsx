import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Card from './components/Card';
import ResetButton from "./components/ResetButton";
import CardContainer from "./components/CardContainer";
import Attempts from "./components/Attempts";
import WonMessage from "./components/WonMessage";

const CARDS_COUNT = 10

const getCards = () => {
    const array = []

    for (let i = 1; i <= CARDS_COUNT; i++) {
        array.push(`${i}`)
        array.push(`${i}`)
    }

    return array;
}

const App: React.FC = () => {
    const [cards, setCards] = useState(getCards().slice().sort(() => Math.random() - 0.5));
    const [flippedIndices, setFlippedIndices] = useState<number[]>([]);
    const [matchedPairs, setMatchedPairs] = useState<string[]>([]);
    const [attempts, setAttempts] = useState<number>(0);
    const [won, setWon] = useState(false);

    useEffect(() => {
        if (flippedIndices.length === 2) {
            const [index1, index2] = flippedIndices;
            if (cards[index1] === cards[index2]) {
                setMatchedPairs([...matchedPairs, cards[index1]]);
            }

            setTimeout(() => {
                setFlippedIndices([]);
            }, 650);

            if (matchedPairs.length === CARDS_COUNT - 1) {
                setWon(true);
            }
        }
    }, [flippedIndices]);

    const handleCardClick = (index: number) => {
        if (won) return;
        setAttempts(attempts + 1)
        if (flippedIndices.length < 2 && !flippedIndices.includes(index) && !matchedPairs.includes(cards[index])) {
            setFlippedIndices([...flippedIndices, index]);
        }
    };
    const handleResetGame = () => {
        setCards(getCards().slice().sort(() => Math.random() - 0.5));
        setAttempts(0)
        setFlippedIndices([]);
        setMatchedPairs([]);
        setWon(false);
    };

    return (
        <View style={styles.container}>
            <Attempts attempts={Math.round(attempts / 2)}></Attempts>
            <CardContainer>
                {cards.map((value, index) => (
                    <Card
                        key={index}
                        value={value}
                        isFlipped={flippedIndices.includes(index) || matchedPairs.includes(value)}
                        onClick={() => handleCardClick(index)}
                    />
                ))}
            </CardContainer>
            <ResetButton onPress={handleResetGame}/>
            <WonMessage visible={won} onClose={() => handleResetGame()}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: "10%",
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
});

export default App;
