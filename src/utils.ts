import { MQDefinition } from "./types";

export function unpackDefinition(def64: string): MQDefinition {
    const contents = atob(def64);
    return JSON.parse(contents) as MQDefinition;
}

export function packDefinition(def: MQDefinition): string {
    return btoa(JSON.stringify(def)); 
}