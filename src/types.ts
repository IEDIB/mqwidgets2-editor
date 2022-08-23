
export interface MQRules {
    method?: string
    forbidden?: string[]
    required?: string[]
    once?: string[], 
    factor?: boolean, 
    expand?: boolean, 
    coma_as_decimal?: boolean,
    precision?: number
}

export type MQEditors = "basic" | "simple" | "panel" | "cloze" | "mchoice" | "mchoice*"
export type MQPalletes = "all" | "intervals" | "general" | "funcions" | "geometria" | "symbols"

export interface MQDefinition {
    "editor": MQEditors,
    "symbols": string[],
    "ans": string,
    "ini": string,
    "rules": MQRules,
    "palettes": MQPalletes[]
}