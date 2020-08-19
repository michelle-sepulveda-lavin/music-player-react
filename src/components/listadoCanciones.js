import React from 'react';
import PropTypes from 'prop-types';

const ListadoCanciones = ({ canciones, setMusic }) => {
    return (
        <>
            <ul className="scrollbar force-overflow" id="style-1" >
                { canciones.length >0? canciones.map((cancion, index) => {
                    return (
                        <li key={index} onClick={() => { setMusic(index) }}>
                            <span>{cancion.id}</span>
                            {cancion.name}
                        </li>
                    )
                }) : <h3 className="text-white text-center pr-5">Lista Vacia</h3> }
            </ul>
        </>
    )
};

ListadoCanciones.propTypes = {
    canciones: PropTypes.array.isRequired,
    setMusic: PropTypes.func.isRequired,

}

export default ListadoCanciones;