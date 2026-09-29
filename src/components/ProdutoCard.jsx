import { Link } from 'react-router-dom'

export function ProdutoCard({produto}){
    return (
        <article>
            <h2>{produto.nome}</h2>
            <p>
                {produto.preco.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                })}
            </p>
            <Link to={`/produtos/${produto.id}`}> Ver Detalhes </Link>
        </article>
    )
}