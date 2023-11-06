import { Address } from "./Address";
import { Review } from "./Review";

export type User = {
    id?:string,
    name: string,
    lastName: string,
    email: string;
    phoneNumber: string;
    password: string,
    adress?: Address;
    role: string;
    createdAt: Date;
    reviewsHistory?: Review[];
  };