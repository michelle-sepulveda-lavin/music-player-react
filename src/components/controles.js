import React from 'react';

const Controles = ({ playMusic, pauseMusic, nextSong, previousSong, downVolumen, upVolumen, repeatSong, randomSong}) => {

    return (
        <>
            <div id="botones">
                <button id="random" onClick={randomSong}><i className="fas fa-random"></i></button>
                <button id="repeat" onClick={repeatSong}><i className="fas fa-redo"></i></button>
                <button id="backward" onClick={previousSong}><i className="fas fa-backward"></i></button>
                <button id="play" onClick={playMusic}><i className="far fa-play-circle fa-2x"></i></button>
                <button id="pause" onClick={pauseMusic}><i className="far fa-pause-circle fa-2x"></i></button>
                <button id="forward" onClick={nextSong}><i className="fas fa-forward"></i></button>
                <button id="downVolumen" onClick={downVolumen}><i className="fas fa-volume-down"></i></button>
                <button id="maxVolumen" onClick={upVolumen}><i className="fas fa-volume-up"></i></button>
            </div>
        </>
    )
};

export default Controles;