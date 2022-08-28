
export interface MQRules {
    method?: string
    forbidden?: string[]
    required?: string[]
    once?: string[], 
    factor?: boolean, 
    expand?: boolean, 
    coma_as_decimal?: boolean,
    precision?: number,
    num_terms?: number | null
}

export interface MQSymbol {
    name: string,
    value: string
}

export type MQEditors = "basic" | "simple" | "panel" | "cloze" | "mchoice" | "mchoice*"
export type MQPalletes = "all" | "intervals" | "general" | "funcions" | "geometria" | "symbols"

export interface MQDefinition {
    engine?: string,
    editor: MQEditors,
    symbols: MQSymbol[],
    ans?: string,
    anse?: string,
    initial_latex?: string,
    formulation?: string,
    rules: MQRules,
    palettes: MQPalletes[],
    right_answer?: string,
    ansType?: string
}

export type MQGroupContext = {'lang'?: string}