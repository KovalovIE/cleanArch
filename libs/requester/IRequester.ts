import { IRestGet } from "./IRestGet";
import { IRestPost } from "./IRestPost";

export interface IRequester extends IRestPost, IRestGet { }
