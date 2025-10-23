
class SetlSignalPredictor extends HTMLElement {

    #header;
    #body;

    #input;
    #bodySelect;
    #atmosphereSelect;

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

        this.#bodySelect = this.#createSelectInput( 'body', 'Body', [
            'Icy body',
            'Rocky ice body',
            'Rocky body',
            'Metal-rich body',
            'High metal content body'
        ] )

        this.#atmosphereSelect = this.#createSelectInput( 'atmosphere', 'Atmosphere', [
            'Ammonia',
            'Argon',
            'Argon-rich',
            'Carbon Dioxide',
            'Helium',
            'Methane',
            'Methane-Rich',
            'Neon',
            'Neon-rich',
            'Nitrogen',
            'Oxygen',
            'Sulphur Dioxide',
            'Sulphur Dioxide-rich',
            'Water',
            'Water-Rich'
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
customElements.define( 'setl-signal-predictor', SetlSignalPredictor );
