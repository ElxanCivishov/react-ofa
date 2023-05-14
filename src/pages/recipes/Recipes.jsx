import { Link } from "react-router-dom";

const Recipes = ({ recipes }) => {
  return (
    <>
      {recipes.map((item) => (
        <div key={item.id} className="col-12 col-md-6 col-lg-4 mb-8">
          <div className="mb-4">
            <Link to="#!" className="link">
              <div className="img-zoom">
                <img
                  src={item.url}
                  alt=""
                  className="img-fluid rounded-3 w-100"
                />
              </div>
            </Link>
          </div>
          <div className="mb-3">
            <Link to="#!">Recipes</Link>
          </div>
          <div>
            <h2 className="h5">
              <Link to="#!" className="link">
                {item.title}
              </Link>
            </h2>
            <p>
              In et eros dapibus, facilisis ipsum sit amet, tempor dolor. Donec
              sed nisi gravida, molestie dolor molestie, congue sapien.
            </p>
            <div className="d-flex justify-content-between text-muted mt-4">
              <span>
                <small>22 April 2023</small>
              </span>
              <span>
                <small>
                  Read time: <span className="text-dark fw-bold">12min</span>
                </small>
              </span>
            </div>
          </div>
        </div>
      ))}
      {/*  
      <div className="col-12 col-md-6 col-lg-4 mb-8">
        <div className="mb-4">
          <a href="#!">
            <div className="img-zoom">
              <img
                src="../assets/images/blog/blog-img-9.jpg"
                alt=""
                className="img-fluid rounded-3 w-100"
              />
            </div>
          </a>
        </div>
        <div className="mb-3">
          <a href="#!">Recipes</a>
        </div>
        <div>
          <h2 className="h5">
            <a href="#!" className="text-inherit">
              No-Boil Baked Penne with Meatballs{" "}
            </a>
          </h2>
          <p>
            Nulla consectetur sapien a libero imperdiet posuere. Donec
            sollicitudin, turpis sit amet sollicitudin tristique, metus
            eros euismod tortor
          </p>
          <div className="d-flex justify-content-between text-muted mt-4">
            <span>
              <small>14 April 2023</small>
            </span>
            <span>
              <small>
                Read time: <span className="text-dark fw-bold">6min</span>
              </small>
            </span>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Recipes;
