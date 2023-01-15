import {parseCurrencyRates} from "./currency";
describe("Currency Rates api", () => {


  it("test that currency rates are retrieved", async () => {

    const apiResText = `13 Jan 2023 #10
Country|Currency|Amount|Code|Rate
Australia|dollar|1|AUD|15.408
Brazil|real|1|BRL|4.326
`;

    const data = await parseCurrencyRates(apiResText);
    console.log(data);
    expect(data.length).toBe(2);
    expect(data[0].country).toBe('Australia');
    expect(data[1].country).toBe('Brazil');
  });
});
