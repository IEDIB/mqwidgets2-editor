import { MQDefinition } from "./types";

export function unpackDefinition(def64: string): MQDefinition {
    const contents = atob(def64);
    // must adjust the symbols key
    const def: any = JSON.parse(contents);
    if(['mchoice', 'mchoice*'].indexOf(def.editor)>=0) {
        def.symbols = def.symbols.map((s: string)=> {
            return {name: s, value: ''}
        })
    } else {
        def.symbols = def.symbols.map((s: string)=> {
            const parts = s.split(":=")
            return {name: parts[0], value: parts[1]}
        })
    }
    return def
}

export function packDefinition(def: MQDefinition): string {
    // must adjust the symbols key
    const tmp: any = JSON.parse(JSON.stringify(def))
    delete tmp["symbols"]
    if(['mchoice', 'mchoice*'].indexOf(def.editor)>=0) {
        tmp.symbols = def.symbols.map((s)=> s.name)
    } else {
        tmp.symbols = def.symbols.map((s)=> s.name+":="+s.value)
    }
    
    return btoa(JSON.stringify(tmp)); 
}