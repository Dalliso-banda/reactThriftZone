import test from "../../public/test.jpg";
import UperNav from "../components/uperNav";
import "../App.css";
import { Link } from "react-router-dom";
export default function Profile() {
  return (
    <>
      <UperNav />
      <div className="container d-flex flex-column">
        <div className="ms-auto m-1">
          <h2>business name</h2>
          <h3> business location</h3>
        </div>
        <Link to={"/post"}>
          <button className="m-4 p-2 rounded-2 shadow-lg bg-success text-white">
 
            create post
          </button>
        </Link>

        <h3>your recent posts</h3>
      </div>
      <div className="container ">
        <div className="row ">
          <div className="col-8 w-100">
            <div className="card d-flex flex-row shadow-lg">
              <img className="w-25 card-img m-2 p-1" src={test}></img>

              <div className="card-body">
                <h4 className="">name of item here</h4>
                <p className="card-text">hsdgusifhuvg</p>
                <button className="border-1 w-50 bg-danger text-white rounded-1 p-2">
                  delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
