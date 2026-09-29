import { CategoriaCard } from "../components/CategoriaCard";
import { useCategoria } from "../contexts/CategoriaContext";

export function Categoria(){
    const { categorias } = useCategoria();

    return (
        <main>
            <h1>Categoria</h1>
            {categorias?.map((item) => (
                <CategoriaCard key={item.id} categoria={item}/>
            ))}
        </main>
    );
}