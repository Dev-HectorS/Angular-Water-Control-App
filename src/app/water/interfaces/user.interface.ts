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
    year: string
    month: Month[]
}


export interface Month {
    id?: string;
    month: string;
    measurement: number;
    measurementUsed: number;
    datePayment: string;
    payment: string
    status: boolean;
}