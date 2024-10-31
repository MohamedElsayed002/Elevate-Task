import axios  from "axios"
import { NavLink, useLoaderData } from "react-router-dom"

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


export const loader = async  () : Promise<Products[]> => {
    const response = await axios('https://fakestoreapi.com/products')
    return response.data
}

const Home = () => {

    const data = useLoaderData() as Products[]


    return (
        <main className="w-4/5 mx-auto">  
            <h1>All Products</h1>
            <h2>Avilable:  {data.length}</h2>
            <div className="grid md:grid-cols-3 gap-10">
            {
                data.map((product) => {
                    return (
                        <div className="card p-4 card-compact bg-base-100 w-96  shadow-xl hover:shadow-2xl " key={product.id}>
                            <figure>
                                <img className="md:w-[300px] md:h-[400px] object-cover" src={product.image} alt={product.title} />
                            </figure>
                            <div className='card-body'>
                                <h2 className="card-title">{product.title}</h2>
                                <p>{product.description.length > 150 ? `${product.description.substring(0,150)}...` : product.description }</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <p>Price: ${product.price}</p>
                                <NavLink className='btn' to={`/products/${product.id}`}>
                                    Learn More
                                </NavLink>
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </main>
    )
}

export default Home;


{/* <h2>{product.title}</h2>
<img src={product.image} alt={product.title} />
<p>{product.description}</p>
<p>Price: ${product.price}</p>
<p>Rating: {product.rating.rate} / {product.rating.count}</p> */}