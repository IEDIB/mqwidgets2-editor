import { MQDefinition } from "./types"
import { packDefinition } from "./utils"

export class MQWidget {
    htmlContent: string
    def: MQDefinition
    id: string
    tagName = 'p'
    tombstone = false

    constructor(def?: MQDefinition, html?: string) {
        this.id = "mqw_"+Math.random().toString(32).substring(2)
        this.htmlContent = html || 'Express the polynomial \\(x^2+x-2\\) into factors'
        this.def = def || {
            engine: "sympy",
            editor: "simple",
            symbols: [{name: "p", value: "x*x+x-2"}],
            ans: "factor(p)",
            initial_latex: "(x+ )(x- )",
            rules: {factor: true},
            palettes: ["all"]
        }
    } 

    share(isInline: boolean): string[] {
        const def64 = packDefinition(this.def)
        if(isInline) {
            return [`<${this.tagName} data-mq="${def64}">${this.htmlContent}</${this.tagName}>`, this.id, def64]
        }
        return [`<${this.tagName} id="${this.id}">${this.htmlContent}</${this.tagName}>`, this.id, def64]
    }
}
