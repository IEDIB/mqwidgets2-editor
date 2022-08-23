import { MQWidget } from "./MQwidget"
import { MQDefinition } from "./types";
import { unpackDefinition } from "./utils";

export class MQGroup {
    static parse(html: string) { 

        const hiddenDiv = document.createElement("div");
        hiddenDiv.style.display = 'none'
        hiddenDiv.innerHTML = html

        const allDataMq = hiddenDiv.querySelectorAll("[data-mq]")

        const newGroup = new MQGroup()
        allDataMq.forEach( (mq) => {
            const dataMq = mq.getAttribute('data-mq')
            if(dataMq) {
                const def = unpackDefinition(dataMq)
                newGroup.addWidget(def, mq.innerHTML)
            }
        })

        return newGroup
    }


    widgets: MQWidget[]

    constructor() {
        this.widgets = [
        ] 
    }

    addWidget(def?: MQDefinition, html?: string): void {
        const w = new MQWidget(def, html)
        this.widgets.push(w)
    }


    share(): string {
        const widgetsSerial = this.widgets.map( (w)=> w.share() )
        return `<div class="pw-mq-group">
        ${widgetsSerial}
        </div>`
    }


}