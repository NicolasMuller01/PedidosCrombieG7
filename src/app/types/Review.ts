import { Client } from "./Client";
import { User } from "./User";

export type Review = {
    id?: string,
    title: string;
    description: string;
    punctuation: number;
    reviewer: Client;
    reviewed: User;
    date: Date;
}