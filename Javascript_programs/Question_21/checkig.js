import * as country from "../Question_19/countries.js";

let a = "Ethiopia"
if (country.countries.includes(a)){
    console.log(a.toLocaleUpperCase);
}else{
    country.countries.push(a);
    console.log(country.countries)
}