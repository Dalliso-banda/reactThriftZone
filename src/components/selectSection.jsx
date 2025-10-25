import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
export default function SelectSection() {
  const { section } = useParams();

  return (
    <>
      <ul className=" d-flex justify-content-between w-75">
        <li className="list-group-item">
          <Link className="nav-link" to={"/home/shirts"}>
            {section === "shirts" ? (
              <button className="bg-success text-white border-1 rounded-3 ">shirts</button>
            ) : (
              <button className="bg-white  border-1 rounded-3 ">shirts</button>
            )}
          </Link>
        </li>

        <Link to={"/home/trousers"}>
          {" "}
          <li className="list-group-item">
            {section === "trousers" ? (
              <button className="bg-success text-white border-1 rounded-3 ">
              trousers
              </button>
            ) : (
              <button className="bg-white  border-1 rounded-3 ">trousers</button>
            )}
          </li>
        </Link>
        <li className="list-group-item">
          <Link className="nav-link" to={"/home/shoes"}>
            {section === "shoes" ? (
              <button className="bg-success text-white border-1 rounded-3 ">Shoes</button>
            ) : (
              <button className="bg-white  border-1 rounded-3 ">Shoes</button>
            )}
          </Link>
        </li>
      </ul>
    </>
  );
}
