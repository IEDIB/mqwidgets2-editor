import { MQDefinition } from "./types"
import { packDefinition } from "./utils"

export class MQWidget {
    htmlContent: string
    def: MQDefinition
    id: string

    constructor(def?: MQDefinition, html?: string) {
        this.id = "mqw_"+Math.random().toString(32).substring(2)
        this.htmlContent = html || 'Express the polynomial \\(x^2+x-2\\) into factors'
        this.def = def || {
            editor: "simple",
            symbols: [{name: "p", value: "x**2+x-2"}],
            ans: "factor(p)",
            initial_latex: "(x+ )(x- )",
            rules: {factor: true},
            palettes: ["all"]
        }
    } 

    share(): string {
        const def64 = packDefinition(this.def)
        return `<p data-mq="${def64}">${this.htmlContent}</p>`
    }
}
