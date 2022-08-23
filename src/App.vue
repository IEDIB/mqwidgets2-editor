<template>
  <div id="app">
    <div class="app-container">
      <h1>MQwidgets2 editor</h1>
    </div>
      <div v-for="w in mqgroup.widgets" v-bind:key="w.id">
        <widget-component :widget="w"></widget-component>
      </div>
      <hr />
      <Button @click="preview()">Preview</Button>
      <p><br></p>
      <div id="preview_area"></div>
    
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

@Options({
  components: {
    WidgetComponent,
  },
})
export default class App extends Vue {
  mqgroup: MQGroup = new MQGroup();

  mounted() {
    let libStyle = document.createElement("link");
    libStyle.href =
      "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css";
    libStyle.rel = "stylesheet";
    document.head.appendChild(libStyle);

    libStyle = document.createElement("link");
    libStyle.href =
      "https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css";
    libStyle.rel = "stylesheet";
    document.head.appendChild(libStyle);

    let libScript = document.createElement("script");
    libScript.setAttribute(
      "src",
      "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"
    ); 
    libScript.setAttribute(
      "id",
      "MathJax-script"
    ); 
    libScript.setAttribute("type", "text/javascript"); 
    libScript.setAttribute("async", "")
    document.head.appendChild(libScript);

    libScript = document.createElement("script");
    libScript.setAttribute(
      "src",
      "https://code.jquery.com/jquery-3.6.0.min.js"
    );
    document.head.appendChild(libScript);

    libScript = document.createElement("script");
    libScript.setAttribute(
      "src",
      "https://piworld.es/iedib/matheditor/mqwidgets2.js"
    );
    document.head.appendChild(libScript);
  }

  created() {
    console.log("App created");
  }
 
  preview() {
    const previewArea = document.getElementById(
      "preview_area"
    ) as HTMLDivElement;
    previewArea.innerHTML = this.mqgroup.share();
    //reflow latex
    if(window.MathJax) {
        window.MathJax.typesetPromise && window.MathJax.typesetPromise();
        window.MathJax.Hub && window.MathJax.Hub.Queue && window.MathJax.Hub.Queue(["Typeset", window.MathJax.Hub]);
    }

    //wait for DOM ready
    setTimeout(function() {
      
      window.MQWidgets.reflow();
    }, 500);
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
