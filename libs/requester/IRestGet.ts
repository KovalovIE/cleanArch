export interface IRestGet {
    get: (url: string, headers?: object) => Promise<Response>;
}