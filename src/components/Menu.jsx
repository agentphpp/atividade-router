import { NavLink } from "react-router-dom"
import "./Menu.css"

export function Menu(){
    return (
        <main className="menu" aria-label="Menu Principal">
            <NavLink to="/">Início</NavLink>
            <NavLink to="/produtos">Produtos</NavLink>
            <NavLink to="/produtos/cadastrar">Cadastrar</NavLink>
            <NavLink to="/sobre">Sobre</NavLink>
            <NavLink to="/categoria">Categorias</NavLink>
        </main>
    )
}