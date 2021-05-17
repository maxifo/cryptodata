
global.fetch = require('node-fetch')
const base = 'https://min-api.cryptocompare.com/data/'


async function fetchJSON(url) {

    const Response = await fetch(url)
    if (!Response.ok) {
        throw new Error(`${Response.status} ${Response.statusText}`)
    }
    const body = await Response.json()
    if (body.Response === 'Error')
        throw body.Message
    return body
}
// Lists all cryptocurrencies
function cryptoList() {
    const url = `${base}all/coinlist`
    return fetchJSON(url)

}
// Check price of a single cryptocurrency
function priceCheck(fsym, tsyms) {
    let url = `${base}price?fsym=${fsym}&tsyms=${tsyms}`
    return fetchJSON(url)
}

// Check price of multiple cryptocurrencies
function priceCheckMulti(fsyms, tsyms) {
    let url = `${base}pricemulti?fsyms=${fsyms}&tsyms=${tsyms}`
    return fetchJSON(url)
}

// Get price history from a specific date
function priceHistory(fsym, tsyms, time) {
    // Date to Unix timestamp
    time = Math.floor(time.getTime() / 1000)
    let url = `${base}pricehistorical?fsym=${fsym}&tsyms=${tsyms}&ts=${time}`
    return fetchJSON(url)
}

// Get most traded assets from a specific exchange
function topVolumeExchange(e) {
    let url = `${base}exchange/top/volume?e=${e}`
    return fetchJSON(url)
}

// Get mining data (hashrate, block reward, block time)
function miningData(fsyms, tsyms) {
    let url = `${base}blockchain/mining/calculator?fsyms=${fsyms}&tsyms=${tsyms}`
    return fetchJSON(url)
        .then(result => result.Data)
}

// Get toplist of cryptocurrencies by market capitalization
function marketcapList(limit, tsym) {
    let url = `${base}top/mktcapfull?limit=${limit}&tsym=${tsym}`
    return fetchJSON(url)
        .then(result => result.Data)
}

module.exports = {
    cryptoList,
    priceCheck,
    priceCheckMulti,
    priceHistory,
    topVolumeExchange,
    miningData,
    marketcapList
}

