export interface IRestPost {
    post: (url: string, body?: object, headers?: object) => Promise<Response>;
}