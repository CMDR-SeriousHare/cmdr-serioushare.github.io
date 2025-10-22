
class SetlBioPredictor extends HTMLElement {
    
    constructor () {}

    connectedCallback () {
        console.log( 'connected' );
    }

}
customElements.define( 'setl-bio-predictor', SetlBioPredictor )
