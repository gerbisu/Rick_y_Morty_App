import { useParams } from "react-router-dom"

const Detail = () => {
    const aux = useParams();
    console.log(aux)
    return (
        <div>Hola</div>
    )
}