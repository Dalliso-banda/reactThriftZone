import { Link } from "react-router-dom";

export default function UperNav() {
  return  (<>
     <nav className="navbar navbar-expand-lg bg-success m-0 p-0">
      <Link to={'/'} className="nav-link">
        <h3 className=
          "navbar-brand text-white  fw-bolder p-2"  >
          ThriftZoneZm
        </h3>
          </Link>
        <div className={"d-flex gap-4 p-4"}>
          
       
          <a href='/search' className="nav-link text-white">
        
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
</svg>

          </a>
          
        
               <a href='/search' className="nav-link text-white">
          mode
          </a>
          
   
          </div>
        </nav>  
  </>)
         
}