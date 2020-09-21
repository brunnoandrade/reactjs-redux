import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

function useQuery() {
    return new URLSearchParams( useLocation().search );
}

function Categoria() {

    // let { cat, subcat } = useParams();

    let query = useQuery();

    let cat = query.get('tipo');
    let subcat = query.get('subcat');

    return (
        <div>
            <h4>Página categoria</h4>
            Exibindo items da categoria: {cat} - {subcat}
        </div>
    )
}

export default Categoria;