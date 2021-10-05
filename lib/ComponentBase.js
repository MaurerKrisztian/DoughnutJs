
class ComponentBase extends HTMLElement {
     componentFolder = "/components"
     constructor(filename) {
        super();
        if (!filename){
            filename =  this.constructor.name
        }

        this.getResources(filename).then((res)=>{
             let style = document.createElement('style');
             style.textContent = res.css

             const parser = new DOMParser();
             const htmlDoc = parser.parseFromString(res.html, 'text/html');

             var scriptElement = document.createElement("script");
             scriptElement.text = res.script;

             // append our DIV as a child to it
             this.appendChild(htmlDoc.body.firstChild);

             // append our STYLE as a child to it
             this.appendChild(style);

             this.appendChild(scriptElement);
         })


    }

    async getResources(filename) {
         const url = window.location.pathname
         const path = url.substring(0, url.lastIndexOf("/")) + "";
        const html = await fetch(path + `${this.componentFolder}/${filename}/${filename}.html`)
            .then((response) => {
                return response.text();
            })
        const css = await fetch(path  + `${this.componentFolder}/${filename}/${filename}.css`)
            .then((response) => {
                return response.text();
            })

        const script = await fetch(path + `${this.componentFolder}/${filename}/${filename}.js`)
            .then((response) => {
                return response.text();
            })
        return {html, css, script}
    }
}

export default ComponentBase
