import UperNav from "../components/uperNav";
import BottomNav from "../components/bootomNav"
import SelectSection from "../components/selectSection";
import { useEffect, useState } from "react";
import { Image, Spinner } from "react-bootstrap";
import { useCart }  from '../components/CartContext'
import axios from "axios";

import { useParams } from "react-router-dom";



function HomePage() {
  const [items,setItems]=useState([]);
  const [loading,setLoading]=useState(false);
   const {addTocart}=useCart()
   console.log(addTocart)
 let {section}= useParams();



  useEffect(
   ()=>{
    const fetchStock = async ()=>{
      setLoading(true)
      
        try{
          
          const response= await axios.get('https://thriftzonezm.xyz/getStock')

         const stock= response.data;

        const shirts = stock.filter(item=>item.type==='shirts')
          const trousers = stock.filter(item=>item.type==='trousers')
            const shoes = stock.filter(item=>item.type==='shoes')
          setLoading(false)
         if(!section)
          setItems(stock)
        if(section=='shirts')
          setItems(shirts)
        if(section=='trousers')
           setItems(trousers)
        if(section=='shoes')
          setItems(shoes)
   
        }catch(error){
          alert(error)
   }
   finally{
      setLoading(false)
   }
   }
      fetchStock();
       
  },[section]
  )


     
       
  
  return (
    <>
   
      <UperNav />
      <div className="container m-0">
        <br></br>
        <h1 className="text-success">Stock</h1>
        <SelectSection />
        <div className="row mb-5">
          {loading ? (
            <div className=" mt-5 text-center">
              <Spinner
                variant="success"
                animation="border"
                role="status"
              ></Spinner>
            </div>
          ) : (
            items &&
            items.map((item) => (
              <div className="col-6">
                <div className=" card m-1" key={item.id}>
                  <Image
                    className=""
                    alt="stock photo"
                    src={`https:thriftzonezm.xyz/stock/${item.stock_img}`}
                  ></Image>

                  <div className="card-body ">
                    <h6 className="card-title">{item.itemName}</h6>
                    <h6 className="card-title fw-bolder text-success">
                      k{item.price}
                    </h6>

                    <button
                      onClick={() =>addTocart(item.id)}
                      className="rounded-2 btn-primary  border-1 border-success p-0 m-1 w-75 bg-success-subtle text-dark"
                    >
                      + cart
                    </button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="green"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <BottomNav />
    
    </>
  ); 
}

export default HomePage;
