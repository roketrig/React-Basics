import { items } from "../data";
import Products from "./Product";

export default  function ProductList(){
   
    return( 
      <div>
        <h2>Product List</h2>
  
        <div className='row row-cols-2 row-cols-md-3 row-cols-xl-4 g-4' id='product-list'>
        {
          items.map((item,index) => (
            <div className='col' key = {index}>
              <Products
               productObj = {item}/>
            </div>
          ))
        }
        </div>
      </div>);
    }