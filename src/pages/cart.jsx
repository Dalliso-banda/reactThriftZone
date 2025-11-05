import { useCart } from "../components/CartContext";

export default function cart(){
      const {    cartState,removeCartItem}= useCart()
     


    
          return(<>
  <div className="m-0 bg-white shadow-lg p-4 w-100 h-50">
     <h3 className="fw-bolder">cart items</h3>
  </div>
  <br></br>
   <div className="container ">
         <div className="row ">

        {cartState &&( cartState.map((item,index)=>
            <div className="col-8 w-100" key={index}>
             <div className="card d-flex flex-row shadow-lg" >
               <img className="w-25 card-img m-2 p-1"   src={`https:thriftzonezm.xyz/stock/${item.productImg}`}></img>
 
               <div className="card-body d-flex flex-column">
                 <h5 className="m-0">name of item here</h5>
                 <p className="card-text m-0"> {item.quantity}</p>
               <span className="m-2 text-success fw-bolder align-self-end"> price</span>

                 <button onClick={()=>removeCartItem(item.id)}className="border-1 w-50  align-self-end bg-danger text-white rounded-1 ">
                 remove
                 </button>
               </div>
             </div>
           </div>))}
         </div>
       </div>

    </>)
}
