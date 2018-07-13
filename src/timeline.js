'use strict';

import './timeline.css';

// import moment from 'moment';


export class TimeLine {
    constructor(data, parent_el, svg_el=undefined) {
        console.groupCollapsed('timeline');

        this.data = data;
        this.parent = parent_el;

        if (svg_el) {
            this.svg_el = svg_el;
        }
        else {
            // search for svg
            this.svg_el = this.parent.querySelector('svg');
        }
        console.log('this.svg_el', this.svg_el);
        console.groupEnd();
    }
}

// D3 TimelineChart
// https://github.com/commodityvectors/d3-timeline

// EventDrops
// https://github.com/marmelab/EventDrops

// math for zoom and pan svg documents
// http://www.petercollingridge.co.uk/tutorials/svg/interactive/pan-and-zoom/

// zoom and pan library
// https://github.com/ariutta/svg-pan-zoom

// easing
// https://github.com/camille-hdl/animatePaper.js/issues/10#issuecomment-290918462
