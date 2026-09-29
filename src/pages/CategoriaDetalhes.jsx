import { Link, useParams } from 'react-router-dom';
import { useCategoria } from '../contexts/CategoriaContext';

export function CategoriaDetalhes() {
    const { id } = useParams();
    const { categorias } = useCategoria();

    // Se as categorias ainda não carregaram ou estão vazias
    if (!categorias) {
        return <p>Carregando...</p>;
    }

    // Converte ambos para string ou number para garantir que encontre
    const categoria = categorias.find(
        (item) => String(item.id) === String(id)
    );

    return (
        <>
            {!categoria ? (
                <main>
                    <h1>Categoria não encontrada</h1>
                    <Link to="/categoria">Voltar para o Início</Link>
                </main>
            ) : (
                <main>
                    <h1>{categoria.nome}</h1>
                    <p>Código: {categoria.id}</p>
                    <Link to="/categoria">Voltar</Link>
                </main>
            )}
        </>
    );
}