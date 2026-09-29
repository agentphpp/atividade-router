import { Link } from 'react-router-dom'

export function PaginaNaoEncontrada() {
    return(
        <main>
            
            <h1>404</h1>
            <p>A pagina informada nao existe</p>
            <Link to="/"> Inicio </Link>
        </main>
    )
}

