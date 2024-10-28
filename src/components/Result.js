import React from 'react';

const Result = ({changePage, gameRes}) => {
    let resText;
    if(gameRes[0] > gameRes[1]) resText = "You LOOSE!";
    else if(gameRes[0] < gameRes[1]) resText = "You WIN! Congratulations!";
    else resText = "DRAW"
    return (
        <div className={'field'}>
            <h2>{resText}</h2>
            <h3>Score: {gameRes[1]} : {gameRes[0]}</h3>
            <button className={'btn'}
                    onClick={() => {
                        changePage('game')
                    }}>Again</button>
        </div>
    );
};

export default Result;