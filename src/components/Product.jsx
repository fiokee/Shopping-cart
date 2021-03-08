const Product = ({product, onAdd}) =>{
    // const {product}= props
    return(
    <div>
    <img className="small" src={product.image} alt={product.name}/>
    <h2>{product.name}</h2>
    <h3>${product.Price}</h3>
    <div>
    <button onClick={()=>onAdd(product)}>Buy Now</button>
    </div>
    </div>

)}

export default Product