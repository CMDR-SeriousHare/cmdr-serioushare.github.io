
class SetlBioPredictor extends HTMLElement {

    #header;
    
    constructor () {
        super();
    }

    connectedCallback () {
        if ( !this.#header ) {
            this.#header = document.createElement( 'setl-tool-header' );
            this.#header.setAttribute( 'name', 'SETL - Nio Predictor' );

            this.appendChild( this.#header );
        }

    }

}
customElements.define( 'setl-bio-predictor', SetlBioPredictor )
