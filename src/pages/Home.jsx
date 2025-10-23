import test from "../../public/test.jpg";
import UperNav from "../components/uperNav";
import BottomNav from "../components/bootomNav"
import { Link } from "react-router-dom";
import SelectSection from "../components/selectSection";
function HomePage() {
  return (
    <>
    <UperNav/>
      <div className="container m-0">
        <br></br>
        <h1>shirts</h1>
    <SelectSection/>
        <div className="row">
          <div className="col-6">
            <div className=" card ">
              <img src={test}></img>

              <div className="card-body ">
                <h5 className="card-title">k200</h5>
                <h5 className="card-title">k200</h5>

                <button className="rounded-2 btn-primary  border-1 border-success p-0 m-1 w-75 bg-success-subtle text-success">
                  buy
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
          <div className="col-6">
            <div className=" card ">
     
              <img src={test}></img>
        
              <div className="card-body ">
                <h5 className="card-title">k200</h5>
                <h5 className="card-title">k200</h5>

                <button className="rounded-2 btn-primary  border-1 border-success p-0 m-1 w-75 bg-success-subtle text-success">
                  buy
                </button>
   <Link to ={'/gallery'}>
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
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BottomNav/>
    </>
  );
}

export default HomePage;
