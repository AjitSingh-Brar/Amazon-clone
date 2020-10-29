import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { ButtonGroup } from "@material-ui/core";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { useHistory } from "react-router-dom";
function Subtotal() {
  const history = useHistory();
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      {!user ? (
        <button
          className="subotal__buttonDisable"
          disabled={!user}
          onClick={(e) => history.push("/payment")}
        >
          Proceed to Checkout
        </button>
      ) : (
        <button
          className="subtotal__button"
          onClick={(e) => history.push("/payment")}
        >
          Proceed to Checkout
        </button>
      )}
    </div>
  );
}

export default Subtotal;
