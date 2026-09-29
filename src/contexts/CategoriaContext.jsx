import { createContext, useContext, useState } from 'react';

const CategoriasContext = createContext();

export function CategoriasProvider({ children }){
    const [categorias, setCategorias] = useState([
        {id: 1, nome: 'categoria1'},
        {id: 2, nome: 'categoria2'},
        {id: 3, nome: 'categoria3'}
    ]);

    function cadastrarCategoria(novaCategoria){
        setProdutos((categoriasAtuais) =>[
            ...categoriasAtuais,
            {...novaCategoria, id: Date.now()}
        ]);
    }
    return (
        <CategoriasContext.Provider value={{ categorias, setCategorias }}>
            {children}
        </CategoriasContext.Provider>
    )
}

export function useCategoria(){
    return useContext(CategoriasContext)
}