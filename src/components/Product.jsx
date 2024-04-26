import goBack from '../assets/back-chevron.png';

const Product = ({productId, title, image, description, price}) => {
    return(
        <div>
            <div id='go-back'>
                <img src={goBack} alt="" />
            </div>
            <img src={image} alt="" />
            <div id='vertical-data' className="flex flex-col">
                <h1>{title}</h1>

            </div>
        </div>
    )
}

export default Product;