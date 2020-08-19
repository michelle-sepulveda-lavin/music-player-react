import React from 'react';
import PropTypes from 'prop-types';

const ListadoCanciones = ({ canciones, setMusic }) => {
    return (
        <>
            <ul>
                {canciones.map((cancion, index) => {
                    return (
                        <li key={index} onClick={() => { setMusic(index) }}>
                            <span>{cancion.id}</span>
                            {cancion.name}
                        </li>
                    )
                })}
            </ul>
        </>
    )
};

ListadoCanciones.propTypes = {
    canciones: PropTypes.array.isRequired,
    setMusic: PropTypes.func.isRequired,

}

export default ListadoCanciones;