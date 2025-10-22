
class SetlBioPredictor extends HTMLElement {

    #header;
    #body;

    #input;
    #bodySelect;

    #output;
    
    constructor () {
        super();
    }

    connectedCallback () {
        this.#createHeader();
        this.#createBody();
        this.#createInputSection();
        this.#createOutputSection();
    }

    #createHeader () {
        if ( this.#header ) return;

        this.#header = document.createElement( 'setl-tool-header' );
        this.#header.innerText = 'SETL - Bio Predictor';

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
        this.#input.style.display = "flex";
        this.#input.style.flex = "0 0 auto";
        this.#input.style.flexFlow = "column nowrap";

        this.#body.appendChild( this.#input );

        this.#createSelectInput( 'body', 'Body', [
            'Icy body',
            'Rocky ice body',
            'Rocky body',
            'High metal content body'
        ] )
    }

    #createOutputSection () {
        if ( this.#output ) return;

        this.#output = document.createElement( 'setl-flex-section' );
        this.#output.style.flex = "1 1 auto";

        this.#body.appendChild( this.#output );
    }

    #createSelectInput ( id, label, options ) {
        let eLabel = document.createElement( 'label' );
            eLabel.innerText = label;

        let eSelect = document.createElement( 'select' );
            eSelect.id = `boi_predictor_${id}_select`;

        for ( let option of options ) {
            let eOption = document.createElement( 'option' );
                eOption.innerText = option;

            eSelect.appendChild( eOption );
        }

        let eRow = document.createElement( 'div' );
            eRow.appendChild( eLabel );
            eRow.appendChild( eSelect );
        
        this.#input.appendChild( eRow );
    }

}
customElements.define( 'setl-bio-predictor', SetlBioPredictor );
