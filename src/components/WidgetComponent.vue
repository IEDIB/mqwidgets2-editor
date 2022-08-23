<template>
  <Panel :toggleable="true" class="mq-widget-component">
    <template #header> Widget {{ widget.id }} </template>
    <label for="def_desc">Question description (HTML)</label><br />
    <TextArea
      id="def_dec"
      v-model="widget.htmlContent"
      :autoResize="true"
      rows="3"
      cols="30"
      style="width: 95%"
    ></TextArea>
    <label for="def_desc2">Additional description (HTML)</label><br />
    <InputText
      id="def_dec2"
      type="label"
      v-model="widget.def.formulation" style="width:95%"
    ></InputText>

    <hr />
    <label for="def_editor">Widget type<sup>*</sup> </label>
    <Dropdown
      id="def_editor"
      v-model="widget.def.editor"
      :options="editorOptions"
      optionLabel="label"
      optionValue="value"
      @change="editorChange()"
    ></Dropdown>

    <div v-if="hasInitialOpt">
      <label for="def_ini">Initial content (LaTeX) </label>
      <InputText
        id="def_ini"
        type="text"
        v-model="widget.def.initial_latex"
      ></InputText>
    </div>

    <div v-if="['mchoice', 'mchoice*'].indexOf(widget.def.editor) >= 0">
      <label for="def_choices0">Options </label>

     <DataTable
        id="def_choices0"
        :value="widget.def.symbols"
        editMode="cell"
        @cell-edit-complete="onCellEditComplete"
        class="editable-cells-table"
        responsiveLayout="scroll"
        @rowReorder="onSymbolReorder"
      >
      <Button @click="addChoice()" class="p-button-rounded p-button-success p-button-sm" icon="pi pi-plus"></Button>
        <Column :rowReorder="true" headerStyle="width: 3rem" :reorderableColumn="false" />
        <Column 
          field="name"
          header="Option"
          key="name"
          style="width: 80%"
        > 
          <template #body="slotProps">
          {{slotProps.data.name}}
          </template>
          <template #editor="{ data, field }">
            <InputText v-model="data[field]" autofocus />
          </template>
        </Column>
        <Column :exportable="false" style="min-width:8rem">
              <template #body="slotProps">
                <Button icon="pi pi-trash" class="p-button-rounded p-button-warning" @click="deleteSymbol(slotProps.data)" />
              </template>
        </Column>
      </DataTable>
      <p><br /></p>
      <label for="def_rightchoice">Right option (from 0) </label>
      <InputText
        id="def_rightchoice"
        type="number"
        v-model="widget.def.ans"
      ></InputText>
    </div>

    <div v-if="['mchoice', 'mchoice*'].indexOf(widget.def.editor) < 0">
      <label for="def_choices">Symbols </label>
      <Button @click="addChoice()" class="p-button-rounded p-button-success p-button-sm" icon="pi pi-plus"></Button>
      <DataTable
        id="def_choices"
        :value="widget.def.symbols"
        editMode="cell"
        @cell-edit-complete="onCellEditComplete"
        class="editable-cells-table"
        responsiveLayout="scroll"
        @rowReorder="onSymbolReorder"
      >
        <Column :rowReorder="true" headerStyle="width: 3rem" :reorderableColumn="false" />
        <Column 
          field="name"
          header="Variable"
          key="name"
          style="width: 20%"
        > 
          <template #body="slotProps">
          {{slotProps.data.name}}
          </template>
          <template #editor="{ data, field }">
            <InputText v-model="data[field]" autofocus />
          </template>
        </Column>
        <Column 
          field="value"
          header="Value"
          key="value"
          style="width: 60%"
        > 
        <template #body="slotProps">
          {{slotProps.data.value}}
          </template>
          <template #editor="{ data, field }">
            <InputText v-model="data[field]" autofocus />
          </template>
        </Column>
        <Column :exportable="false" style="min-width:8rem">
              <template #body="slotProps">
                <Button icon="pi pi-trash" class="p-button-rounded p-button-warning" @click="deleteSymbol(slotProps.data)" />
              </template>
        </Column>
      </DataTable>

      <label for="def_rightchoice">Right answer (Sympy) </label>
      <TextArea
        id="def_rightchoice"
        style="width: 95%"
        :autoResize="true"
        v-model="widget.def.ans"
      ></TextArea>
    </div>

  <Accordion>
	<AccordionTab header="Rules">
    <label for="rules_forbidden">Symbols that are forbidden in the answer</label>
    <Chips id="rules_forbidden" v-model="widget.def.rules.forbidden" style="width:96%"/>
    <label for="rules_forbidden">Symbols that are required in the answer</label>
    <Chips id="rules_forbidden" v-model="widget.def.rules.required" style="width:96%"/>
    <p></p>
    <label for="rules_factor">The answer must be factorized</label>
    <Checkbox id="rules_factor" v-model="widget.def.rules.factor" :binary="true"/>
    <p></p>
    <label for="rules_expanded">The answer must be expanded</label>
    <Checkbox id="rules_expanded" v-model="widget.def.rules.expand" :binary="true"/>
    <p></p>
		<label for="rules_precision">Precision</label>
    <InputNumber id="rules_precision" mode="decimal" locale="es-ES" :minFractionDigits="2" :maxFractionDigits="8" v-model="widget.def.rules.precision"/>
    <p></p>
    <label for="rules_expanded">Regard coma as decimal place</label>
    <Checkbox id="rules_expanded" v-model="widget.def.rules.coma_as_decimal" :binary="true"/>
	</AccordionTab>
  </Accordion>

    <div v-if="hasPaletesOpt">
      <label for="def_paletes">Editor paletes </label>
      <MultiSelect
        id="def_paletes"
        v-model="widget.def.palettes"
        :options="paletesOptions"
        optionLabel="label"
        optionValue="value"
      ></MultiSelect>
    </div>
  </Panel>
</template>

<script lang="ts">
import { MQWidget } from "../MQwidget";
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    widget: MQWidget,
  },
})
export default class WidgetComponent extends Vue {
  widget!: MQWidget;
  editorOptions?: any[];
  paletesOptions?: any[];
  hasPaletesOpt = true;
  hasInitialOpt = true;  

  created() {
    console.log("Created");
    if (["panel", "simple"].indexOf(this.widget.def.editor) >= 0) {
      this.hasPaletesOpt = true;
    } else {
      this.hasPaletesOpt = false;
      const paletes = this.widget.def.palettes;
      paletes.splice(0, paletes.length);
    }
    this.hasInitialOpt =
      ["basic", "simple", "panel"].indexOf(this.widget.def.editor) >= 0;
  }

  data() {
    const editorOptions = [
      { label: "Basic", value: "basic" },
      { label: "Simple", value: "simple" },
      { label: "Panel", value: "panel" },
      { label: "Cloze", value: "cloze" },
      { label: "Multiple choice (dropdown)", value: "mchoice" },
      { label: "Multiple choice (checkbox)", value: "mchoice*" },
    ];

    const paletesOptions = [
      { label: "All", value: "all" },
      { label: "General", value: "general" },
      { label: "Intervals", value: "intervals" },
      { label: "Geometry", value: "geometria" },
      { label: "Functions", value: "funcions" },
    ];

    return {
      editorOptions,
      paletesOptions,
    };
  }

  editorChange(): void {
    console.log(this.widget.def);
    const paletes = this.widget.def.palettes;
    if (["panel", "simple"].indexOf(this.widget.def.editor) >= 0) {
      this.hasPaletesOpt = true;
      if (paletes.indexOf("all") < 0) {
        paletes.push("all");
      }
    } else {
      this.hasPaletesOpt = false;
      paletes.splice(0, paletes.length);
    }

    this.hasInitialOpt =
      ["basic", "simple", "panel"].indexOf(this.widget.def.editor) >= 0;
  }

  onCellEditComplete(event: any): void {
    const { data, newValue, field } = event;

    switch (field) {
      case "quantity":
      case "price":
        if (this.isPositiveInteger(newValue)) data[field] = newValue;
        else event.preventDefault();
        break;

      default:
        if (newValue.trim().length > 0) data[field] = newValue;
        else event.preventDefault();
        break;
    }
  }

  isPositiveInteger(val: any): boolean {
            let str = String(val);
            str = str.trim();
            if (!str) {
                return false;
            }
            str = str.replace(/^0+/, "") || "0";
            const n = Math.floor(Number(str));
            return n !== Infinity && String(n) === str && n >= 0;
        }

    addChoice() {
      console.log("Add choice")
      this.widget.def.symbols.push({'name': 'a', 'value': '1'})
    }

    onSymbolReorder(event: any) {
      this.widget.def.symbols = event.value; 
    }

    deleteSymbol(data: any): void { 
      const symbols = this.widget.def.symbols
      for(let i=symbols.length-1; i>=0; i--) {
        const p = symbols[i];
        console.log(p,data)
        if(p.name==data.name) {
          symbols.splice(i,1)
        }
      }
    }
}
</script>
