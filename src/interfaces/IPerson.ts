import { IFamily } from "./IFamily";
export interface IPerson{
    id?:number;
    firstName: string;
    lastName: string;
    age: number;
}
export interface IPersonInfo{
    firstName: string;
    lastName: string;
    age: number;
    familyId?:IFamily;
}