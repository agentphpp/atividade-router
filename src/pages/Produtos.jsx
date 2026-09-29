import { ProdutoCard } from "../components/ProdutoCard";
import { useProdutos } from "../contexts/ProdutosContext";

export function Produtos(){
    const { produtos } = useProdutos();

    return (
        <main>
            <h1>Produtos</h1>
            {produtos.map((produto) => (
                <ProdutoCard key={produto.id} produto={produto}/>
            ))}
        </main>
    )
}