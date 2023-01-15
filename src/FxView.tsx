import 'bootstrap/dist/css/bootstrap.min.css';
import { FxConvertorForm } from './components/FxConvertorForm';
import { FxRateList } from './components/FxRateList';
import { CurrencyRate } from "./utility/currency";

export function FxView(props: { currencyRateList: CurrencyRate[] }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <FxRateList currencyRateList={props.currencyRateList} />
        </div>
        <div className="col-6">
          <FxConvertorForm currencyRateList={props.currencyRateList} />
        </div>
      </div>
    </div>
  );
}
