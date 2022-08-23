<template> 
    <Panel :toggleable="true" class="mq-widget-component">
      <template #header>
          Widget {{widget.id}}
      </template>
      <label>Question description (HTML)</label><br>
      <TextArea v-model="widget.htmlContent" :autoResize="true" rows="4" cols="30" style="width:95%"></TextArea>
      <hr>
      <label>Widget type </label>
      <Dropdown v-model="widget.def.editor" :options="editorOptions" optionLabel="label" optionValue="value" @change="editorChange()"></Dropdown>
   
      <div v-if="hasPaletesOpt">
      <label>Editor paletes </label>
      <MultiSelect v-model="widget.def.palettes" :options="paletesOptions" optionLabel="label" optionValue="value"></MultiSelect>
      </div>
   </Panel> 
</template>

<script lang="ts">
import { MQWidget } from '../MQwidget';
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    widget: MQWidget
  }
})
export default class WidgetComponent extends Vue {
  widget!: MQWidget
  editorOptions?: any[]
  paletesOptions?: any[]
  hasPaletesOpt = true
 
  created() {  
    console.log("Created")
    if(['panel', 'simple'].indexOf(this.widget.def.editor)>=0) {
      this.hasPaletesOpt = true
    } else {
      this.hasPaletesOpt = false
    }
  }

  data() {
    const editorOptions = [
      {label: "Basic", value: "basic"},
      {label: "Simple", value: "simple"},
      {label: "Panel", value: "panel"},
      {label: "Cloze", value: "cloze"},
      {label: "Multiple choice (dropdown)", value: "mchoice"},
      {label: "Multiple choice (checkbox)", value: "mchoice*"}
    ]; 
    
    const paletesOptions = [
      {label: "All", value: "all"},
      {label: "General", value: "general"},
      {label: "Intervals", value: "intervals"},
      {label: "Geometry", value: "geometria"},
      {label: "Functions", value: "funcions"},
    ];

    return {
      editorOptions,
      paletesOptions
    }
  }

  editorChange() { 
      console.log(this.widget.def)
      if(['panel', 'simple'].indexOf(this.widget.def.editor)>=0) {
        this.hasPaletesOpt = true
      } else {
        this.hasPaletesOpt = false
      }
  }
}
</script>
