import { Link } from 'react-router-dom'

export function CategoriaCard({categoria}){
    return (
        <article>
            <h2>{categoria.nome}</h2>
            <Link to={`/categoria/${categoria.id}`}> Ver Detalhes </Link>
        </article>
    )
}