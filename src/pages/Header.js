import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header
        className="flex items-center justify-between bg-black text-white p-5"
        style={{ backgroundColor: "#FEF6E4" }}
      >
        <div className="logo">
          <Link to="/">
            <h2 className="font-bold text-xl md:text-2xl lg:text-3xl">
              <Link to="/">
                <img src="login.png" style={{ height: "40px" }} />
              </Link>
            </h2>
          </Link>
        </div>

        <nav>
          <ul className="flex">
            <li className="mr-5 lg:text-lg">
              <button>
                <Link to="/" style={{ color: "black" }}>
                  Home
                </Link>
              </button>
            </li>
            <li className="lg:text-lg">
              <button>
                <Link to="/blog" style={{ color: "black" }}>
                  Blog
                </Link>
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
