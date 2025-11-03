import { Link } from "react-router-dom";

export default function Bottom() {
  return (
    <>
      <div className="container bottom-0 position-fixed  mt-5 bg-success">
        <nav className="navbar d-flex align-items-center  m-0 p-0 w-100 ">


          <ul className="d-flex gap-5 m-2">
       <Link to={'/'}>
            <li className="nav-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
            </li>
      </Link>
        

        <Link to={'/df'}>

            <li className="nav-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect x="3" y="3" width="7" height="7"></rect>
                <rect x="14" y="3" width="7" height="7"></rect>
                <rect x="14" y="14" width="7" height="7"></rect>
                <rect x="03" y="14" width="7" height="7"></rect>
              </svg>
            </li>
      </Link>
      <Link to={'/account'}>
            <li className="nav-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </li>
</Link>
            
            <Link to={'/cart'}>
            <li className="nav-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
            </li>
            </Link>
          </ul>
        </nav>
      </div>
    </>
  );
}
