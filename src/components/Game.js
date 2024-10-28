import React, {useEffect, useRef, useState} from 'react';
import {cards} from "../utils/constants";

const Game = ({changePage, player, setResult}) => {

    const [cardsCover, setCards] = React.useState({
            compCard: {src: require('../images/cardBackSide.jpg')},
            playerCard: {src: require('../images/cardBackSide.jpg')}
         });

    const [hasNext, setHasNext] = useState(true);

    const deck = useRef(cards.slice());
    const currentRes = useRef([0, 0]);

    useEffect(() => {
        deck.current.sort((card1, card2) => Math.random() - 0.5)
    }, []);

    const handleClickNext =()=>{ hasNext? nextMove() : sendRes()}

    const nextMove = () => {
        let compCard = deck.current.pop();
        let playerCard = deck.current.shift();
        setCards({compCard:compCard, playerCard:playerCard})
        calcResult(compCard.value, playerCard.value)
        if(deck.current.length === 0) setHasNext(false);
    }

    const sendRes = () => {
        setResult(currentRes.current);
        changePage('result');
    }

    const calcResult = (val1, val2) => {
        if(val1 > val2) currentRes.current[0]++;
        else if(val1 < val2) currentRes.current[1]++;
    }

    return (
            <div className={'field'}>
                <h3>Computer</h3>
                <img className={'card'} src={cardsCover.compCard.src} alt=""/>
                <img className={'card'} src={cardsCover.playerCard.src} alt=""/>
                <h3>{player}</h3>
                <button className={'btn'}
                        onClick={handleClickNext}>Next
                </button>
            </div>
        );
};

export default Game;