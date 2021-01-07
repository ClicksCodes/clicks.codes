import JWT from 'jsonwebtoken';
import fs from 'fs';
import Axios from 'axios'

export default async (req, res) => {

    let data = req.body
    let geoloc;
    if(data["ip"] === "192.168.1.1") {
        geoloc = {"continent":"North America","country":"United States","zipCode":"19703","accuracyRadius":5,"flag":"https://ipworld.info/static/flags/us.png","city":"Claymont","timezone":"America/New_York","latitude":39.8044,"countryGeoNameId":6252001,"gmt":"(GMT-10:00) Hawaii Time","network":"108.2.0.0/16","currencyName":"US Dollar","countryNativeName":"United States","stateGeoNameId":4142224,"phoneCode":"+1","state":"Delaware","continentCode":"NA","longitude":-75.4649,"currencyNamePlural":"US dollars","cityGeoNameId":4141974,"languages":"en","numOfCities":19562,"org":"UUNET","ip":"108.2.100.95","currencySymbol":"$","currencySymbolNative":"$","isEU":"No","countryTLD":".us","countryCapital":"Washington","metroCode":504,"continentGeoNameId":6255149,"stateCode":"DE","countryISO2":"US","numOfStates":66,"countryISO3":"USA","currencyCode":"USD","asNo":701,"status":200}
    } else {
        geoloc = await Axios.get(`https://app.ipworld.info/api/iplocation?apikey=5b61e32039914939a9f61a92282726d4&ip=${data["ip"]}`)
    }
    data["geoloc"] = geoloc

    let privatekey = fs.readFileSync('./keys/rsmv');
    var encoded = JWT.sign(req.body.data.ids,privatekey)
    Axios.post('https://rsm-api.clcks.dev/verify', encoded)
    res.send(encoded)
}