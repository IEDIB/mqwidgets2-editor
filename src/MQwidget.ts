import { MQDefinition } from "./types"
import { packDefinition } from "./utils"

export class MQWidget {
    htmlContent: string
    def: MQDefinition
    id: string

    constructor() {
        this.id = "mqw_"+Math.random().toString(32).substring(2)
        this.htmlContent = 'Description here'
        this.def = {
            editor: "simple",
            symbols: ["a:=1", "b:=1"],
            ans: "a+b",
            ini: "",
            rules: {"method": "meqv"},
            palettes: ["all"]
        }

    }

    share(): string {
        const def64 = packDefinition(this.def)
        return `<p data-mq="${def64}">${this.htmlContent}</p>`
    }
}
