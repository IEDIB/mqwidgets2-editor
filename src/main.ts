import { createApp } from 'vue';
import App from './App.vue';

import PrimeVue from 'primevue/config';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import MultiSelect from 'primevue/multiselect';
import Dropdown from 'primevue/dropdown';
import TextArea from 'primevue/textarea';
import Panel from 'primevue/panel';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Dialog from 'primevue/dialog';
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
import Checkbox from 'primevue/checkbox';
import Chips from 'primevue/chips';
import InputNumber from 'primevue/inputnumber';

import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

const app = createApp(App);

app.use(PrimeVue);

app.component('InputText', InputText);
app.component('TextArea', TextArea);
app.component('Button', Button);
app.component('MultiSelect', MultiSelect);
app.component('Dropdown', Dropdown);
app.component('Panel', Panel);
app.component('DataTable', DataTable);
app.component('Column', Column);
app.component('Dialog', Dialog);
app.component('Accordion', Accordion);
app.component('AccordionTab', AccordionTab);
app.component('Checkbox', Checkbox);
app.component('Chips', Chips);
app.component('InputNumber', InputNumber);

app.mount('#app')


