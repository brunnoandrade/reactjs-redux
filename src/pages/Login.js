import React from 'react';
import { connect } from 'react-redux';

function Login(props) {

    const handleAndrade = () => {
        props.setName('Teste');
    }

    return (
        <div>
            <h4>Página login</h4>

            O nome é: {props.name}

            <br/><br/>
            <button onClick={handleAndrade}>Alterar nome</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        name: state.usuario.name
    };
};

const mapDispatch = (dispatch) => {
    return {
        setName: (newName) => dispatch({
            type: 'SET_NAME',
            payload: { name: newName }
        })
    };
};

export default connect(mapStateToProps, mapDispatch)(Login);