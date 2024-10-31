import axios from "axios"
import { useLoaderData } from "react-router-dom"


type Products = {
    id : number,
    title : string,
    price : number,
    description : string,
    category : string,
    image : string,
    rating : {
        rate : number,
        count : number
    }
}


export const loader = async ({params} : {params : any}) => {
    const response = await axios.get(`https://fakestoreapi.com/products/${params.id}`)
    return response.data
}

const SingleProduct = () => {

    const data = useLoaderData() as Products



    return (
        <section className="w-4/5 mx-auto gap-20 grid mt-20 md:grid-cols-2">
                <img className="rounded-md" src={data.image} alt={data.title} />
                <div>
                    <h1 className="text-5xl font-bold">Title: {data.title}</h1>
                    <h2 className="text-3xl mt-5">Description : {data.description}</h2>
                    <h3 className="text-2xl">Price : {data.price}</h3>
                    <h4 className="text-2xl">Category : {data.category}</h4>
                    <h5 className="text-2xl">Rating : {data.rating.rate}</h5>
                    <h6 className="text-2xl">Rating Count : {data.rating.count}</h6>
                    <button className="btn  mt-2 btn-primary" onClick={() => alert('Hello World')}>Add to cart</button>
                </div>
        </section>
    )
}

export default SingleProduct