import { MQWidget } from "./MQwidget"

export class MQGroup {
    widgets: MQWidget[]

    constructor() {
        this.widgets = [
            new MQWidget()
        ] 
    }

    share(): string {
        const widgetsSerial = this.widgets.map( (w)=> w.share() )
        return `<div class="pw-mq-group">
        ${widgetsSerial}
        </div>`
    }


}