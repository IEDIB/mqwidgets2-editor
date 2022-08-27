<template>
  <div id="app">
    <div class="app-container">
      <h1>MQwidgets2 editor</h1>
      <small>Josep Mulet (c) 2022</small>
    </div>

    <Dialog v-model:visible="showLoadDlg">
      <template #header>
      <h4>Load content into the editor</h4>
      </template>
      <label for="theLoadCode">Paste the HTML code</label> 
      <TextArea id="theLoadCode" v-model="contentsToLoad" style="width:99%" rows="5"></TextArea>

      <template #footer>
        <Button label="Cancel" icon="pi pi-times" class="p-button-text" @click="onCancelLoad()"/>
        <Button label="Accept" icon="pi pi-check" autofocus @click="onLoad()"/>
      </template>
    </Dialog>

    <Button @click="onShowLoadDlg()">Load</Button>

    <div v-for="w in mqgroup.widgets" v-bind:key="w.id">
        <widget-component :widget="w"></widget-component>
      </div>
      <hr />
      <Button @click="preview()" icon="pi pi-refresh"></Button> Preview
      <ToggleButton v-model="asDataAttr" onLabel="Output as data-attr" offLabel="Output as init"></ToggleButton>
      <p><br></p>
      <div id="preview_area" v-show="shareCode"></div>
      <p><br></p>
      <div v-if="shareCode">
      <label for="shareCode">Code to embed</label>
      <TextArea id="shareCode" v-model="shareCode" :autoResize="true" rows="5" cols="30"  style="width:95%"></TextArea>
      
       <label for="shareCode">Add to the bottom of the page</label>
      <TextArea id="shareCode" v-model="dependenciesCode" :autoResize="true" rows="5" cols="30"  style="width:95%"></TextArea>
      </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import WidgetComponent from "./components/WidgetComponent.vue";
import { MQGroup } from "./MQgroup";

declare global {
  interface Window {
    MathJax?: any;
    iedibAPI?: any;
    IB?: any;
    MQWidgets: any;
    MathQuill?: any;
    Confetti?: any;
  }
}

function importLink(href: string): void {
  const libStyle = document.createElement("link");
  libStyle.href = href;
  libStyle.rel = "stylesheet";
  document.head.appendChild(libStyle);
}

function importScript(src: string, async?: boolean, id?: string): Promise<void> {

    const libScript = document.createElement("script");
    libScript.setAttribute("src", src); 
    libScript.setAttribute("type", "text/javascript");    
    if(id) {
        libScript.setAttribute("id", id); 
    }
    if(async) {
      libScript.setAttribute("async", "")
    }
    return new Promise((resolve, reject) => {
        libScript.onload = function() {
          resolve();
        };
        libScript.onabort = function() {
          reject();
        }
        libScript.onerror = function() {
          reject();
        }
        document.head.prepend(libScript);
    });
}

@Options({
  components: {
    WidgetComponent,
  },
})
export default class App extends Vue {
  mqgroup: MQGroup = new MQGroup();
  shareCode = ""
  showLoadDlg = false;
  contentsToLoad = "";
  dependenciesCode = "";
  asDataAttr = true

  mounted() {
    importLink("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"); 
    importLink("https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css");
      
    importScript("https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js", true, "MathJax-script");
    importScript("https://code.jquery.com/jquery-3.6.0.min.js").then( () => {
        //JQuery is loaded
        importScript("https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js");
        importScript("https://iedib.github.io/mqwidgets2/dist/mqwidgets2.js").then( () => {
          window.MQWidgets.init({
            lang: 'en',
            engine: 'https://piworld.es/mqwdemo/api/'
          });
        })
    });

  }

  created() {
    console.log("App created");
    // check if ?doc is passed as url query
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString); 
    if(urlParams.get('doc')) { 
      this.contentsToLoad = atob(urlParams.get('doc') || '')
      console.log(this.contentsToLoad)
      this.onLoad()
    } else {
      this.mqgroup.addWidget()
    }
  }
 
  preview() {
    const previewArea = document.getElementById(
      "preview_area"
    ) as HTMLDivElement;

 
    const shared = this.mqgroup.share(this.asDataAttr);
    this.shareCode = shared[0]  
    const parsedWidgets: any = shared[1]

    const widgetsScript = JSON.stringify(parsedWidgets, null, 2);
    const ss0 = '<'+'script'
    const ss = '<'+'script>'
    const cs = '</'+'script>'
    this.dependenciesCode = `
    ${ss0} src="https://iedib.github.io/mqwidgets2/dist/mqwidgets2.js">${cs}
    ${ss}
    MQWidgets.init({
      lang: 'en',
      engine: 'https://piworld.es/mqwdemo/api/', // Only for DEMO, replace with your backend CAS
      widgets: ${widgetsScript}
    });
    ${cs}`;

   
    previewArea.innerHTML = this.shareCode;
    //reflow latex
    if(window.MathJax) {
        window.MathJax.typesetPromise && window.MathJax.typesetPromise();
        window.MathJax.Hub && window.MathJax.Hub.Queue && window.MathJax.Hub.Queue(["Typeset", window.MathJax.Hub]);
    }

    //wait for DOM ready
    setTimeout(function() {
      window.MQWidgets.reflow(parsedWidgets);
    }, 500);
  }

  onShowLoadDlg(): void {
    this.contentsToLoad = ""
    this.showLoadDlg = true
  }

  onCancelLoad(): void {
    this.showLoadDlg = false
  }

  onLoad(): void {
    this.showLoadDlg = false
    if(this.contentsToLoad) { 
      try {
        this.mqgroup = MQGroup.parse(this.contentsToLoad)
        this.shareCode = ""
      } catch(ex) {
        console.error(ex)
      }
    }
  }
}
</script>

<style>
body {
  background: whitesmoke;
}

#app {
  margin: auto;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 60px;
  max-width: 800px; 
}

.app-container {
  text-align: center;
}

body #app .p-button {
  margin-left: 0.2em;
}

form {
  margin-top: 2em;
}
</style>
