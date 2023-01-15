import { FormEvent, useRef, useState } from "react";
import { CurrencyRate } from "../utility/currency";
import { isNumeric } from "../utility/numeric";

export function FxConvertorForm(props: { currencyRateList: CurrencyRate[] }) {
  const amountEntered = useRef<HTMLInputElement>(null);
  const currencySelected = useRef<HTMLSelectElement>(null);
  const [amountRecievedInFx, setAmountRecievedInFx] = useState<string | null>(
    null
  );

  function submitHandler(e: FormEvent<HTMLButtonElement>) {
    e.preventDefault();
    const userEnteredAmount = amountEntered.current?.value;
    const userSelectedCurrency = currencySelected.current?.value;

    if (
      !isNumeric(userEnteredAmount) ||
      !userSelectedCurrency ||
      userSelectedCurrency.length === 0
    ) {
      setAmountRecievedInFx(null);
      return;
    } else {
      const selectedRate = props.currencyRateList.filter(
        (val) => val.currencyCode === userSelectedCurrency
      )[0];
      // 1/100 Czech Koruna (amount) =  rate Fx you will get
      // userEnteredAmount* amount / rate = fx you will get
      const val =
        (parseFloat(userEnteredAmount as string) * selectedRate.amount) /
        selectedRate.rate;
      setAmountRecievedInFx(val.toFixed(2) + " " + userSelectedCurrency);
    }
  }
  return (
    <div>
      {" "}
      <form>
        <h3>Currency Convertor</h3>
        <select
          ref={currencySelected}
          className="form-select"
          aria-label="Default select example"
        >
          <option defaultValue={""} value = "" >Select the currency</option>
          {props.currencyRateList.map((curRate) => {
            return (
              <option key={curRate.currencyCode} value={curRate.currencyCode}>
                {curRate.currencyName} ({curRate.currencyCode})
              </option>
            );
          })}
        </select>

        <div className="mb-3">
          <label htmlFor="amountInCzk" className="form-label">
            Amount (in CZK)
          </label>
          <input
            ref={amountEntered}
            type="number"
            className="form-control"
            id="amountInCzk"
            placeholder="Enter the amount in CZK"
          />
        </div>

        <button
          type="submit"
          onClick={(e) => submitHandler(e)}
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
      <div>
        {amountRecievedInFx ? (
          <div>{`You will get ${amountRecievedInFx}`} </div>
        ) : (
          <div> Please enter the amount and currency above. </div>
        )}
      </div>
    </div>
  );
}
