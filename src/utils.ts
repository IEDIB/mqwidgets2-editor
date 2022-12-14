import { MQDefinition, MQEditors, MQGroupContext, MQPalletes, MQSymbol } from "./types";

const keysDef = [
                "editor",
                "engine",
                "formulation",
                "initial_latex",
                "ansType",
                "ans",
                "anse",
                "right_answer",
                "symbols",
                "rules",
                "palettes"];
const keysDefDefault = [
                "simple",
                "sympy",
                "",
                "",
                "ans",
                "",
                "",
                "",
                [],
                {},
                []];

// Legacy support
export function parseDefinition(el: Element): MQDefinition {
    const editorType = (el.getAttribute("data-mq") || 'simple') as MQEditors;
    let ans: string = el.getAttribute("data-mq-ans") || '';
    // If not ans then it cannot be checked, so.
    let ansType = 'ans';
    if (!ans) {
        ans = el.getAttribute("data-mq-anse") || '';
        ansType = 'anse';
        if (!ans) {
            console.error("> MQ has no data-mq-ans/e!");
            return {} as MQDefinition;
        }
    }
    // Support arrays in answers (always as str)
    ans = ans.trim();
    if(ans.startsWith('[')) {
        ans = ans.substring(1)
    }
    if(ans.endsWith(']')) {
        ans = ans.substring(0, ans.length-1)
    }
    
    const ini = el.getAttribute("data-mq-ini") || '';
    const symbolsRaw = el.getAttribute("data-mq-symbols");   
 
    let ra = '';
    if (el.getAttribute("data-mq-ra")) {
        // Base64 conversion
        ra = atob(el.getAttribute("data-mq-ra") || '');
    }
    const symbols: MQSymbol[] = []
    if (symbolsRaw) {
        const parts = symbolsRaw.split(";");
        parts.forEach( (s) => {
            const kvPair = s.split(":=")
            if(kvPair.length == 2) {
                symbols.push({name: kvPair[0], value: kvPair[1]})
            } else {
                symbols.push({name: kvPair[0], value: kvPair[0]})
            }
        })
    }
    const rulesRaw = el.getAttribute("data-mq-rules");
    let rules = [];
    if (rulesRaw) {
        rules = JSON.parse(rulesRaw);
    }

    const palettes: MQPalletes[] = [];
    const palettesRaw = el.getAttribute("data-mq-palettes");
    if (palettesRaw) {
        const parts = palettesRaw.split(",");
        parts.forEach(function (e) {
            palettes.push(e.trim() as MQPalletes);
        });
    }

    const obj: MQDefinition = {
        editor: editorType,
        symbols: symbols,
        right_answer: ra,
        initial_latex: ini,
        rules: rules,
        palettes: palettes,
        ans: ans,
        ansType: ansType
    };
    if (el.getAttribute("data-mq-formulation")) {
        obj.formulation = el.getAttribute("data-mq-formulation") || '';
    }
    return obj
}

export function zip(l1: any[], l2: any[]): any[] {
    const n = Math.min(l1.length, l2.length)
    const l: any[] = []
    for(let i=0; i<n; i++) {
        l.push([l1[i], l2[i]])
    }
    return l
} 

export function unpackDefinition(def64: string): MQDefinition {
    const contents = atob(def64);
    // must adjust the symbols key
    let def: any = {}
    const parsedDef: any = JSON.parse(contents);
    // Support loaded as array
    // if json_obj is an array, then we should parse it to an object
    if(Array.isArray(parsedDef)) {
        if(parsedDef.length < keysDef.length) {
            console.error("The definition does not contain all the fields. Is it corrupted?")
        }
        zip(keysDef, parsedDef).forEach( (pair) => {
            const [key, value] = pair
            def[key] = value
        })
    } else {
        def = parsedDef
    }

    if(['mchoice', 'mchoice*'].indexOf(def.editor)>=0) {
        def.symbols = (def.symbols || []).map((s: string)=> {
            return {name: s, value: ''}
        })
    } else {
        def.symbols = (def.symbols || []).map((s: string)=> {
            const parts = s.split(":=")
            return {name: parts[0], value: parts[1]}
        })
    }
    if(def.right_answer) {
        //decode rightanwer
        def.right_answer = atob(def.right_answer)
    }
    return def
} 

export function packDefinition(def: MQDefinition, as_object?: boolean): string {
    // must adjust the symbols key
    let tmp: any = JSON.parse(JSON.stringify(def))
    tmp['ansType']="ans"
    if(tmp['anse']=='') {
        delete tmp['anse'];
    }
    delete tmp["symbols"]
    if(['mchoice', 'mchoice*'].indexOf(def.editor)>=0) {
        tmp.symbols = def.symbols.map((s)=> s.name)
        // Optimize the export
        delete tmp['rules']
        delete tmp['palettes']
    } else {
        tmp.symbols = def.symbols.map((s)=> s.name+":="+s.value)
    }
    if(def.editor=='cloze') {
        //answers must be comma separated
        tmp.ans = tmp.ans.split(',')
    }
    if(tmp.symbols && tmp.symbols.length==0) {
        delete tmp.symbols
    }
    if(tmp.palettes && tmp.palettes.length==0) {
        delete tmp.palettes
    }
    if(!tmp.right_answer) {
        delete tmp.right_answer
    } else {
        //encode rightanswer
        tmp.right_answer = btoa(tmp.right_answer)
    }

    if(!as_object) {
        //Save it as an ordered array
        const vec: any = []
        keysDef.forEach( (key, i) => {
            let value = tmp[key]
            if(value == null) {
                value = keysDefDefault[i]
            }
            vec.push(value)
        })
        tmp = vec
    }

    
    return btoa(JSON.stringify(tmp)); 
}


export function parseContext(gEl: Element): MQGroupContext {
    const context = {} as MQGroupContext
    const lang = gEl.getAttribute('data-lang')
    if(lang) {
        context.lang = lang
    } 
    return context
}
