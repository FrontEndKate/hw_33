import './App.css';
import Game from "./components/Game";
import Result from "./components/Result";
import Start from "./components/Start";
import React from 'react';

const App = () => {
    const [activePage, setActivePage] = React.useState('start');
    const [player, setPlayer] = React.useState('');
    const [gameRes, setGameRes] = React.useState([0,0]);

    const changePage = page => setActivePage( page );
    const changeName = name => setPlayer(name);
    const setResult = res => setGameRes(res);

    switch (activePage) {
        case 'game':
            return <Game changePage={changePage} player={player}
                         setResult={setResult}/>
        case 'result':
            return <Result changePage={changePage} gameRes={gameRes}/>
        default:
            return <Start changePage={changePage} changeName={changeName}/>
    }
};

export default App;