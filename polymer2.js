

class MyElement extends Polymer.Element {
  static get is() { return ‘my-element’; }

  static get config() {
    properties: {
      //the properties from Polymer
    },
    observers: [
      //the observers from Polymer
    ]
  }

  constructor() {
    super();   
    //some work
  }
  //lifecycle events
connectedCallback() {
    super.connectedCallback();
  }
}

customElements.define(MyElement.is, MyElement);



