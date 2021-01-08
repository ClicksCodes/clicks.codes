import JWT from 'jsonwebtoken';
import fs from 'fs';
import Axios from 'axios'

// datapoints: [
//     [amount_the_same, amount_in_sample, multiplier],
// ]

const blackbox = (datapoints) => {
    let out = 1;
    datapoints.forEach(datapoint => {
        out *= (
            1 - (
                (
                    (datapoint[0] + 1) / (datapoint[1] + 1)
                ) * (1 - datapoint[2]) * 0.1)
            )
        console.log(out)
    });
    
    return out;
}

export default async (req, res) => {
    let data = req.body;
    let ip = req.headers['x-forwarded-for'];
    if (ip !== data["ip"] && ip !== "192.168.1.1") return res.status(403).end()

    let geoloc = ip === "192.168.1.1" ? 
        {"continent":"North America","country":"United States","zipCode":"19703","accuracyRadius":5,"flag":"https://ipworld.info/static/flags/us.png","city":"Claymont","timezone":"America/New_York","latitude":39.8044,"countryGeoNameId":6252001,"gmt":"(GMT-10:00) Hawaii Time","network":"108.2.0.0/16","currencyName":"US Dollar","countryNativeName":"United States","stateGeoNameId":4142224,"phoneCode":"+1","state":"Delaware","continentCode":"NA","longitude":-75.4649,"currencyNamePlural":"US dollars","cityGeoNameId":4141974,"languages":"en","numOfCities":19562,"org":"UUNET","ip":"108.2.100.95","currencySymbol":"$","currencySymbolNative":"$","isEU":"No","countryTLD":".us","countryCapital":"Washington","metroCode":504,"continentGeoNameId":6255149,"stateCode":"DE","countryISO2":"US","numOfStates":66,"countryISO3":"USA","currencyCode":"USD","asNo":701,"status":200} : 
        await Axios.get(`https://app.ipworld.info/api/iplocation?apikey=5b61e32039914939a9f61a92282726d4&ip=${ip}`)
    let country = geoloc["country"];
    let timezone = geoloc["timezone"];
    let state = geoloc["state"];
    let city = geoloc["city"];

    let cores = data["cores"];
    let memory = data["memory"];

    let language = data["language"]
    let platform = data["platform"]
    let useragent = data["userAgent"]
    blackbox([1,100,0.5])
    let privatekey = fs.readFileSync('./keys/rsmv');
    var encoded = JWT.sign(req.body.ids,privatekey)
    Axios.post('https://rsm-api.clcks.dev/verify', encoded)

    return res.status(200).send(encoded)
}