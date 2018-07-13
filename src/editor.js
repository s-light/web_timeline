import './editor.css';

export class RawParser {
    constructor(data, text_input_el) {
        console.groupCollapsed('RawParser');

        this.data = data;
        this.text_input_el = text_input_el;

        console.log('this.text_input_el', this.text_input_el);
        console.groupEnd();
    }

    parse() {
        let raw_text = this.text_input_el.value;
        // console.log('raw_text\n\n', raw_text);
        let lines = raw_text.split('\n');
        for (let line of lines) {
            console.log('line: \'', line, '\'');

        }
    }
}
