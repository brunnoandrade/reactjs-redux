import React from 'react';
import { useHistory } from 'react-router-dom';
// import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';

function Home(props) {

    let history =  useHistory();
    const dispatch = useDispatch();

    const name =  useSelector(state => state.usuario.name);
    const contador =  useSelector(state => state.usuario.contador);

    const handleButton = () => {
        setTimeout(() => {
            history.replace('/sobre');
        }, 2000);
    };

    // const handleBruno = () => {
    //     props.setName('Bruno Andrade');
    // }

    // const handleIncrement = () => {
    //     props.increment();
    // }

    const handleBruno = () => {
        dispatch({
            type: 'SET_NAME',
            payload: { name: 'ANDRADE' }
        })
    }

    const handleIncrement = () => {
        dispatch({
            type: 'INCREMENT_CONTADOR'
        });
    }

    return (
        <div>
            <h4>Página inicial</h4>

            {/* NOME: {props.name}<br/>
            CONTADOR: {props.contador} */}

            NOME: {name}<br/>
            CONTADOR: {contador}

            <br/>

            <button onClick={handleBruno}>Setar nome para Bruno</button>
            <button onClick={handleIncrement}>+ 1</button>

            <br/><br/>

            <button onClick={handleButton}>Ir para a página sobre</button>
        </div>
    )
}

// const mapStateToProps = (state) => {
//     return {
//         name: state.usuario.name,
//         contador: state.usuario.contador
//     };
// };

// const mapDispatch = (dispatch) => {
//     return {
//         setName: (newName) => dispatch({
//             type: 'SET_NAME',
//             payload: { name: newName }
//         }),
//         increment: () => dispatch({
//             type: 'INCREMENT_CONTADOR'
//         })
//     };
// };

// export default connect(mapStateToProps, mapDispatch)(Home);

export default Home;