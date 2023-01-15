
export interface CurrencyRate {
  country: string,
  currencyName: string 
  amount: number,
  currencyCode: string
  rate: number
}

export function  parseCurrencyRates(data: string): CurrencyRate[]  {
    if (data.length === 0){
      return [];
    }

    const lines = data.split('\n');
    let skipLine = 0; 
    const currencies = lines.map((line: string) => {
        if (skipLine < 2) {
            skipLine++;
            return;
        }
      const [country, currencyName, amount, currencyCode, rate] = line.split('|');
      // Lets do some basic validation
      if (!country || country.length == 0 || !currencyName || currencyName.length == 0) {
        return;
      }

      return {
        country,
        currencyName,
        amount: Number(amount),
        currencyCode,
        rate: Number(rate)
      }
    }).filter(Boolean);

    return currencies as CurrencyRate[];
}