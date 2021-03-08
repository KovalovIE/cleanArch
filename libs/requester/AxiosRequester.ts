import Axios from "axios";
import { IRequester } from "./IRequester";

export class AxiosRequester implements IRequester {
    private static instance: AxiosRequester;
    constructor() {
        if (AxiosRequester.instance) {
            return AxiosRequester.instance;
        }
        AxiosRequester.instance = this;
    }

    post = async (url: string, data?: object, headers?: object): Promise<Response> => {
        try {
            const config: any = {
                method: 'POST',
                headers: {
                    'Cache-Control': 'no-cache',
                    'Content-Type': 'application/json',
                },
                url,
                timeout: 60000
            };
            headers && (config.headers = headers);
            data && (config.data = JSON.stringify(data));
            const response = await Axios(config);
            return response.data;
        } catch (error) {
            console.warn('AxiosRequester -> post: ', error.message);
            return error;
        }
    }

    get = async (url: string, headers?: object): Promise<Response> => {
        try {
            const config: any = {
                method: 'GET',
                headers: {
                    'Cache-Control': 'no-cache',
                    'Content-Type': 'application/json',
                },
                url,
                timeout: 60000
            };
            headers && (config.headers = headers);
            const response = await Axios(config);
            return response.data;
        } catch (error) {
            console.warn('AxiosRequester -> get: ', error);
            return error;
        }
    }

}
