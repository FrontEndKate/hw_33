import React from 'react';

const Start = ({changePage, changeName}) => {

    const[name, setName] = React.useState('');

    return (
            <div className={'field'}>
                <h1 className={'header'}>Ready for War Game?</h1>
                <input type="text" className={'nameInp'} placeholder={"Enter your name"}
                onChange={e => setName(e.target.value)}/>
                <button className={'btn'}
                        onClick={() => {
                            changeName(name);
                            changePage('game');
                        }}>Start Game
                </button>
            </div>
        );
};

export default Start;