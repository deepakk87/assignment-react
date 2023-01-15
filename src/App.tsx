import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useQuery} from  'react-query';
import { CurrencyRate, parseCurrencyRates } from './utility/currency';
import { FxView } from './FxView';
const URL = '/en/financial-markets/foreign-exchange-market' 
+ '/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt';

function App() {
  
  const {isLoading, data, error} = useQuery('currencyData', async () => {
      const res = await fetch(URL);
      const text = await res.text();
      return parseCurrencyRates(text);
  })

  return (
    <>
    { isLoading ?  <div>Loading...</div>: 
      <FxView currencyRateList = {data as CurrencyRate[]}/>}
    </>
  )
}
export default App;
