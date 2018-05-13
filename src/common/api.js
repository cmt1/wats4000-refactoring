// Base API Configuration

import axios from 'axios';

export const API = axios.create({
    baseURL: '//api.openweathermap.org/data/2.5/'
});

API.interceptors.request.use(function (config) {
    //Seat common parameters for each request to the API.
    config.params.APPID = '7a7ff4b085c0d315dcf78352310df0ed';
    config.params.units = 'imperial';
    
    return config;
}, function (error) {
    return Promise.reject(error);
                             
});