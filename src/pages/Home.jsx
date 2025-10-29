import test from "../../public/test.jpg";
import UperNav from "../components/uperNav";
import BottomNav from "../components/bootomNav"
import { Link } from "react-router-dom";
import SelectSection from "../components/selectSection";
import { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import axios from "axios";
import { useParams } from "react-router-dom";
function HomePage() {
  const [items,setItems]=useState([])
  const [itemInfo,setItemInfo]=useState('')


 let {section}= useParams();
 

 const shirts=[]
 const trousers=[]
 const shoes=[]
  useEffect(
   ()=>{
    const fetchStock = async ()=>{
    
        try{
          const response= await axios.get('https://thriftzonezm.xyz/getStock')

         const stock= response.data;

        await stock.forEach((item)=>{

        
            if(item.type=='shirts')
               shirts.push(item)
            if(item.type==='trousers')
              trousers.push(item)
            if(item.type==='shoes')
               shoes.push(item) 
         })

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

  

   }
      fetchStock();
  },[items,section]
  )
  useEffect(()=>{
      alert(itemInfo)
  },[itemInfo])
  const getItemInfo=(itemId)=> {
  
  alert(itemId)
    setItemInfo(itemId)
  }
 



  
  return (
    <>
    <UperNav/>
      <div className="container m-0">
        <br></br>
        <h1>shirts</h1>
    <SelectSection/>
        <div className="row mb-5">
       {items&&( items.map((item)=> <div className="col-6">
            <div className=" card m-1" key={item.id} >
              <Image className="" src= {`https:thriftzonezm.xyz/stock/${item.stock_img}`}></Image>
              

              <div className="card-body ">
                <h6 className="card-title">{item.itemName}</h6>
                <h6 className="card-title fw-bolder text-success">k{item.price}</h6>

                <button onClick={()=>alert(item.id)} className="rounded-2 btn-primary  border-1 border-success p-0 m-1 w-75 bg-success-subtle text-dark">
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
          </div>))
}
       
        </div>
      </div>
      <BottomNav/>
    </>
  );
}

export default HomePage;
