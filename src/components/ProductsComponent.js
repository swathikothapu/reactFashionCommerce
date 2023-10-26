
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './_products.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getProducts } from '../Redux/Product/actions';
const Products=()=>{

    let productData= useSelector(state=>state.productReducer.products);
    
    let dispatch= useDispatch();
    useEffect(()=>{

         dispatch(getProducts());

    },[] )
    return(
 
        <div className='product-container'>
    {productData.map((eachProduct,index)=>{

            
return(
          <div className='mx-5 p-3 product-card'>
  
            <div className='product-image-container'>

                 <img src={require('../assets/images/shop/'+  eachProduct.product_img)}/>


            </div>


            <div className='product-info'>
              <h5> <a href='#'>{eachProduct.product_name}</a></h5>
              <p className='product-price'>${eachProduct.price}</p>
              <div className='product-rating'>
                  <FontAwesomeIcon  icon='fa fa-star' className='rating' />
                  <FontAwesomeIcon  icon='fa fa-star' className='rating' />
                  <FontAwesomeIcon  icon='fa fa-star' className='rating' />
               </div>
             <div className='my-3'>
              <div className='cart-button'>
                    <div className='cart-icon-container'>
               <FontAwesomeIcon icon="fa fa-shopping-cart" className="mx-4 cart-icon" />
                </div>
                <div className='cart-text-container mx-3'>
                 <p className=''>Add to Cart </p>
                </div>
              </div>
               </div>

            </div>



          </div>)
   
       })}  
        </div>


    )



}

export default Products;