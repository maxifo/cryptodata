# Cryptodata

Simple JavaScript API for fetching data from [CryptoCompare](https://www.cryptocompare.com/).

**NOTE:** Node-fetch is required.

## Installation

``` 
npm i @maxifo/cryptodata
```

```
npm i node-fetch
```

## Examples

### cryptoList()
Lists all cryptocurrencies and basic data.

```
const cd = require('@maxifo/cryptodata')

cd.cryptoList()
    .then(data => {
        console.log(data)
    })
```

### priceCheck()
Convert the current price of any cryptocurrency to any other currency/currencies.

priceCheck(fsym, tsyms)
```
const cd = require('@maxifo/cryptodata')

cd.priceCheck('BTC', ['EUR', 'USD'])
.then(data => {
        console.log(data)
    })
```

### priceCheckMulti()
Convert the current price of multiple cryptocurrencies to any other currency/currencies.

priceCheckMulti(fsyms, tsyms)
```
const cd = require('@maxifo/cryptodata')

cd.priceCheckMulti(['BTC', 'ETH', 'DOGE'], ['EUR', 'USD'])
    .then(data => {
        console.log(data)
    }) 
```

### priceHistory()
Check price history from a specific date.

priceHistory(fsym, tsyms, time)
```
const cd = require('@maxifo/cryptodata')

cd.priceHistory('BTC', ['EUR', 'USD'], new Date('2021-01-01'))
    .then(data => {
        console.log(data)
```

### topVolumeExchange()
Check the current most traded cryptocurrency on a specific exchange.

topVolumeExchange(e)
```
const cd = require('@maxifo/cryptodata')

cd.topVolumeExchange('Binance')
    .then(data => {
        console.log(data)
    }) 
```

### miningData()
Get mining data of a cryptocurrency. Useful for calculating profitability of a mining rig.

miningData(fsyms,tsyms)
```
const cd = require('@maxifo/cryptodata')

cd.miningData(['BTC'], ['EUR', 'USD'])
    .then(data => {
        console.log(data)
    })
```

### marketcapList()
Get top list of cryptocurrencies by market capitalization.

marketcapList(limit, tsym)
```

const cd = require('@maxifo/cryptodata')

cd.marketcapList(10, 'EUR')
    .then(data => {
        console.log(data)
    })
``` 
