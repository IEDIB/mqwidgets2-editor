import { MQWidget } from "./MQwidget"
import { MQDefinition } from "./types";
import { parseContext, parseDefinition, unpackDefinition } from "./utils";

export class MQGroup {
    static parse(html: string) { 

        const hiddenDiv = document.createElement("div");
        hiddenDiv.style.display = 'none'
        hiddenDiv.innerHTML = html

        //First parse the context (ONLY one pw-mq-group is supported now, TODO)
        let allDataMq = null
        const newGroup = new MQGroup()
        const allGroupDivs = hiddenDiv.querySelectorAll("div.pw-mq-group")
        if(allGroupDivs.length >= 1) {
            if(allGroupDivs.length > 1) {
                console.error("Only one pw-mq-group is supported. All the remaining are discarded")
            }
            const theGroup = allGroupDivs[0]
            // Parse the context from theGroupElement
            newGroup.context = parseContext(theGroup)
            allDataMq = theGroup.querySelectorAll("[data-mq]")

        } else if(allGroupDivs.length == 0) {
            console.error("No pw-mq-group found. Creating a blank one!")
            allDataMq = hiddenDiv.querySelectorAll("[data-mq]")
        }
        
        allDataMq?.forEach( (mq) => {
            const dataMq = mq.getAttribute('data-mq') || ''
            if (['basic', 'simple', 'panel', 'cloze', 'mchoice', 'mchoice*'].indexOf(dataMq)>=0) {
                // This is the old syntax based on atributes
                const def = parseDefinition(mq)
                newGroup.addWidget(def, mq.innerHTML)
            } else if(dataMq) {
                const def = unpackDefinition(dataMq)
                newGroup.addWidget(def, mq.innerHTML)
            }
        })

        return newGroup
    }


    context: any
    widgets: MQWidget[]

    constructor() {
        this.widgets = [] 
        this.context = {}
    }

    addWidget(def?: MQDefinition, html?: string): void {
        const w = new MQWidget(def, html)
        this.widgets.push(w)
    }

    private serializeContext() {
        let serial = Object.keys(this.context).map((k: string) => 'data-'+k+'="'+this.context[k]+'"').join(" ")
        if(serial) {
            serial = " " + serial 
        }
        return serial
    }

    private purge() {
        //Remove widgets with tombstone
        for(let i=this.widgets.length-1; i>=0; i--) {
            if(this.widgets[i].tombstone) {
                this.widgets.splice(i, 1)
            }
        }
    }

    share(isInline: boolean): any[] {
        this.purge()
        const widgetsInGroup: {[name: string]: string} = {}

        if(isInline) {
            const widgetsSerial = this.widgets.map( (w)=> w.share(isInline)[0] ).join('\n')
            return [`<div class="pw-mq-group"${this.serializeContext()}>
            ${widgetsSerial}
</div>`, widgetsInGroup]
        } 
        const widgetsSerial = this.widgets.map( (w)=> {
            const [txt, id, b64] = w.share(isInline)
            widgetsInGroup[id] = b64
            return txt
        }).join('\n')
        return [`<div class="pw-mq-group"${this.serializeContext()}>
        ${widgetsSerial}
        </div>`, widgetsInGroup]


    }


} 

