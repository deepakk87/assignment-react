import { CurrencyRate } from "../utility/currency"

export function FxRateList (props: {currencyRateList : CurrencyRate[]}) {
    return <table className="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Country</th>
        <th scope="col">Currency</th>
        <th scope="col">Amount</th>
        <th scope="col">Rate</th>
      </tr>
    </thead>
    <tbody>
      {props.currencyRateList.map((currencyRate, index) => 
        <FxRateItem  key = {currencyRate.currencyCode} index = {index + 1} currencyRate={currencyRate}/>)}
    </tbody>
    </table>
  }
  
  function FxRateItem (props: {index: number, currencyRate : CurrencyRate}) {
    return  <tr>
    <th scope="row">{props.index}</th>  
    <th scope="row">{props.currencyRate.country}</th>
    <td>{props.currencyRate.currencyName} ({props.currencyRate.currencyCode})</td>
    <td>{props.currencyRate.amount}</td>
    <td>{props.currencyRate.rate}</td>
  </tr>
  
  }