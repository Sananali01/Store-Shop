import React from "react";
import { Footer, Navbar } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { addCart, delCart } from "../redux/action";
import { Link } from "react-router-dom";

const Cart = () => {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const EmptyCart = () => {
    return (
      <div className="container-fluid bg-danger">
        <div className="row">
          <div className="col-md-12 py-5 text-center">
            <h4 className="p-3 display-5">Your Cart is Empty</h4>
            <Link to="/" className="btn  btn-outline-light mx-4">
              <i className="fa fa-arrow-left"></i> Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  };

  const addItem = (product) => {
    dispatch(addCart(product));
  };
  const removeItem = (product) => {
    dispatch(delCart(product));
  };

  const ShowCart = () => {
    let subtotal = 0;
    let shipping = 30.0;
    let totalItems = 0;
    state.map((item) => {
      return (subtotal += item.price * item.qty);
    });

    state.map((item) => {
      return (totalItems += item.qty);
    });
    return (
      <>
        <section className="h-100 gradient-custom bg-transparent">
          <div className="container py-5">
            <div className="row d-flex justify-content-center my-4">
              <div className="col-md-8">
                <div className="card mb-4">
                  <div className="card-header bg-light py-3">
                    <h5 className="mb-0 text-primary">Item List</h5>
                  </div>
                  <div className="card-body" style={{ background: '#000000' }}>
  {state.map((item) => {
    return (
      <div key={item.id}>
        <div className="row d-flex align-items-center">
          <div className="col-lg-3 col-md-12">
            <div className="bg-image rounded" data-mdb-ripple-color="light">
              <img
                src={item.image}
                alt={item.title}
                width={100}
                height={75}
              />
            </div>
          </div>

          <div className="col-lg-5 col-md-6 text-light"> {/* Change text color to #ADD8E6 */}
            <p>
              <strong>{item.title}</strong>
            </p>
            {/* <p>Color: blue</p>
            <p>Size: M</p> */}
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="d-flex mb-4" style={{ maxWidth: "300px" }}>
              <button
                className="btn px-3 text-light" // Change text color to #ADD8E6
                onClick={() => {
                  removeItem(item);
                }}
              >
                <i className="fas fa-minus"></i>
              </button>

              <p className="mx-5 text-light">{item.qty}</p> {/* Change text color to #ADD8E6 */}

              <button
                className="btn px-3 text-light" // Change text color to #ADD8E6
                onClick={() => {
                  addItem(item);
                }}
              >
                <i className="fas fa-plus "></i>
              </button>
            </div>

            <p className="text-start text text-md-center text-light"> {/* Change text color to #ADD8E6 */}
              <strong>
                <span className="text-light">{item.qty}</span> x ${item.price} {/* Change text color to #ADD8E6 */}
              </strong>
            </p>
          </div>
        </div>

        <hr className="my-4 text-light fw-bold" /> {/* Change text color to #ADD8E6 */}
      </div>
    );
  })}
</div>

                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-4">
                  <div className="card-header py-3 bg-light">
                    <h5 className="mb-0 text-primary">Order Summary</h5>
                  </div>
                  <div className="card-body bg-dark text-white">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item d-flex justify-content-between align-items-center bg-dark text-light border-0 px-0 pb-0">
                        Products ({totalItems})<span>${Math.round(subtotal)}</span>
                      </li>
                      <li className="list-group-item bg-dark text-light d-flex justify-content-between align-items-center px-0">
                        Shipping
                        <span>${shipping}</span>
                      </li>
                      <li className="list-group-item bg-dark text-danger fw-bold d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                        <div>
                          <strong>Total amount</strong>
                        </div>
                        <span>
                          <strong>${Math.round(subtotal + shipping)}</strong>
                        </span>
                      </li>
                    </ul>

                    <Link
                      to="/checkout"
                      className="btn btn-dark btn-lg btn-block bg-primary" 
                    >
                      Go to checkout
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  };

  return (
    <>
      <Navbar />
      <div className="container-fluid bg-danger">
        <h1 className="text-center">Cart</h1>
        <hr />
        {state.length > 0 ? <ShowCart /> : <EmptyCart />}
      </div>
      <Footer />
    </>
  );
};

export default Cart;
