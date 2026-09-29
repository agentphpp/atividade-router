import { Menu } from './components/Menu';
import { Home } from './pages/Home';
import { Sobre } from './pages/Sobre';
import { Produtos } from './pages/Produtos';
import { ProdutosDetalhes } from './pages/ProdutoDetalhes';
import { PaginaNaoEncontrada } from './pages/PaginaNaoEncontrada';
import { CadastroProduto } from './pages/CadastroProduto';
import { Routes, Route } from 'react-router-dom';
import { Categoria } from './pages/Categorias';
import { CategoriaDetalhes } from './pages/CategoriaDetalhes';

export default function App() {
  return (
   <>
    <Menu />
    <Routes>
      <Route path="/" element={ <Home/> } />
      <Route path="/produtos" element={ <Produtos/> } />
      <Route path="/produtos/cadastrar" element={ <CadastroProduto/> } />
      <Route path="/produtos/:id" element={ <ProdutosDetalhes/> } />
      <Route path="/sobre" element={ <Sobre/> } />
      <Route path="/categoria" element={ <Categoria/> } />
      <Route path="/categoria/:id" element={ <CategoriaDetalhes/> } />
      <Route path="*" element={ <PaginaNaoEncontrada/> } />
    </Routes>
   </>
  )
}