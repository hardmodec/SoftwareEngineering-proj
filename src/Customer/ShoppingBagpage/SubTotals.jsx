import React from "react";
import { useStateValue } from "../../StateProvider";
import { getCartTotal } from "../../reducer";
import "./SubTotals.css";   
import { useNavigate } from "react-router-dom";

const Subtotal = () => {
  const navigate = useNavigate();
  const [{ cart }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <div>
        renderText={(value) => (
          <>
            <p>
              Subtotal ({cart.length} items) :<strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getCartTotal(cart)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      </div>
      <button onClick={(e) => navigate("/payment")}>Proceed to Checkout</button>
    </div>
  );
};

export default Subtotal;