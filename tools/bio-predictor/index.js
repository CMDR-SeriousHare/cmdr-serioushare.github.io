
class SetlBioPredictor extends HTMLElement {

    #header;
    #body;
    #input;
    #output;
    
    constructor () {
        super();
    }

    connectedCallback () {
        this.#createHeader();
        this.#createBody();
        this.#createInputSection();
    }

    #createHeader () {
        if ( this.#header ) return;

        this.#header = document.createElement( 'setl-tool-header' );
        this.#header.innerHTML = 'SETL - Bio Predictor';

        this.appendChild( this.#header );
    }

    #createBody () {
        if ( this.#body ) return;

        this.#body = document.createElement( 'setl-tool-body' );

        this.appendChild( this.#body );
    }

    #createInputSection () {
        if ( this.#input ) return;

        this.#input = document.createElement( 'setl-flex-section' );

        this.#body.appendChild( this.#input );
    }

    #createOutputSection () {
        if ( this.#output ) return;

        this.#output = document.createElement( 'setl-flex-section' );

        this.#body.appendChild( this.#output );
    }

}
customElements.define( 'setl-bio-predictor', SetlBioPredictor );
