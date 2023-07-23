import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

let stocks: Array<string> = ['aapl', 'GOOG', 'FB', 'AMZN', 'TWTR'];
let service: string = 'http://127.0.0.1:3000';

export interface StockInterface {
  symbol: string;
  lastTradePriceOnly: number;
  change: number;
  changeInPercent: number;
}

@Injectable()
export class StocksService {

  constructor(private http: HttpClient) {}

  get() {
    return stocks;
  }

  // @ts-ignore
  add(stock) {
    stocks.push(stock);
    return this.get();
  }

  // @ts-ignore
  remove(stock) {
    stocks.splice(stocks.indexOf(stock), 1);
    return this.get();
  }

  // @ts-ignore
  load(symbols) {
    if (symbols) {
      return this.http.get<Array<StockInterface>>(service + '/stocks/snapshot?symbols=' + symbols.join());
    }
  }
}

