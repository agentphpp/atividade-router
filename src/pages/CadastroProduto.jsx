import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {useProdutos} from '../contexts/ProdutosContext'

export function CadastroProduto(){
    const[nome, setNome] = useState("")
    const[preco, setPreco] = useState("")
    const { cadastrarProduto } = useProdutos()
    const navigate = useNavigate()
    
    function salvarProdutos(evento){
        evento.preventDefault()

        cadastrarProduto({
            nome,
            preco: Number(preco)
        })

        navigate("/produtos")
    }

    return (
        <main>
            <h1>Cadastrar Produto</h1>
            <form onSubmit={salvarProdutos}>
                <label>
                    Nome
                    <input
                        value={nome}
                        onChange={(evento) => setNome(evento.target.value)}  
                        required/>
                </label>
                <label>
                    Preço
                    <input
                        type="number"
                        min="0.1"
                        step="0.01"
                        value={nome}
                        onChange={(evento) => setPreco(evento.target.value)} 
                        required/>
                </label>
                <button type='submit'>Cadastrar</button>
            </form>
        </main>
    )
}