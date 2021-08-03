export interface ICovidData {
    id?:number;
    countryOrRegion:string;
    provinceOrState:string;
    date:Date;
    confirmed:number;
    deaths:number;
    recovered:number;
}
