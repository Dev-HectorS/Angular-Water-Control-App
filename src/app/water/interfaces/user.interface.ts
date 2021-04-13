export interface User {
    id?: string;
    waterMeterID: string;
    name: string;
    status: boolean;
    initialYear: number;
    initalM3: number;
    lastPayment: string;
    years: Year[]
}


export interface Year {
    year: number;
    months: Month[]
}


export interface Month {
    month: string;
    measurement: number;
    measurementUsed: number;
    datePayment: string;
    payment: string
    status: boolean;
}