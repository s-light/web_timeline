'use strict';

import './timeline.css';

// import moment from 'moment';

import * as d3 from 'd3';
// import {d3time} from "d3-time";
import {d3tip} from "d3-tip";
import TimelineChart from 'd3-timeline-chart';


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

        // D3 TimelineChart
        // https://github.com/commodityvectors/d3-timeline
        this.data = [
            {
                label: 'Hello',
                data: [
                    {
                        type: TimelineChart.TYPE.POINT,
                        at: new Date([2015, 1, 11])
                    }, {
                        label: 'I\'m a label',
                        type: TimelineChart.TYPE.INTERVAL,
                        from: new Date([2015, 2, 1]),
                        to: new Date([2015, 3, 1])
                    }, {
                        label: 'some text...',
                        type: TimelineChart.TYPE.INTERVAL,
                        from: new Date([2016, 5, 1]),
                        to: new Date([2016, 9, 1])
                    },
                ],
            },
            {
                label: 'World',
                data: [
                    {
                        type: TimelineChart.TYPE.POINT,
                        at: new Date([2015, 1, 11])
                    }, {
                        type: TimelineChart.TYPE.POINT,
                        at: new Date([2015, 1, 15])
                    }, {
                        type: TimelineChart.TYPE.POINT,
                        at: new Date([2015, 3, 10])
                    }, {
                        label: 'I\'m a label',
                        type: TimelineChart.TYPE.INTERVAL,
                        from: new Date([2015, 2, 1]),
                        to: new Date([2015, 3, 1])
                    }, {
                        label: 'some text...',
                        type: TimelineChart.TYPE.INTERVAL,
                        from: new Date([2017, 1, 1]),
                        to: new Date([2017, 2, 1])
                    }, {
                        label: 'some text...',
                        type: TimelineChart.TYPE.INTERVAL,
                        from: new Date([2016, 5, 1]),
                        to: new Date([2016, 9, 1])
                    }, {
                        type: TimelineChart.TYPE.POINT,
                        at: new Date([2015, 6, 1])
                    }, {
                        type: TimelineChart.TYPE.POINT,
                        at: new Date([2015, 7, 1]),
                        customClass: 'custom-class'
                    },
                ],
            },
        ];
        self.timeline = new TimelineChart(
            this.parent,
            this.data,
            {
                tip: function(d) {
                    return d.at || `${d.from}<br>${d.to}`;
                }
            }
        );

        this.parent.addEventListener(
            this.data_update_event_name,
            (event) => {
                // console.log('ping');
                this.update(event);
            }
        );


        console.log('this.svg_el', this.svg_el);
        console.groupEnd();
    }

    update(event) {
        console.log('TimeLine update', event);
        self.map_data_D3TimelineChart();
    }

    map_data_D3TimelineChart(event) {
        // this.data = [{
        //     label: 'Name',
        //     data: [{
        //         type: TimelineChart.TYPE.POINT,
        //         at: new Date([2015, 1, 11])
        //     }, {
        //         type: TimelineChart.TYPE.POINT,
        //         at: new Date([2015, 1, 15])
        //     }, {
        //         type: TimelineChart.TYPE.POINT,
        //         at: new Date([2015, 3, 10])
        //     }, {
        //         label: 'I\'m a label',
        //         type: TimelineChart.TYPE.INTERVAL,
        //         from: new Date([2015, 2, 1]),
        //         to: new Date([2015, 3, 1])
        //     }, {
        //         type: TimelineChart.TYPE.POINT,
        //         at: new Date([2015, 6, 1])
        //     }, {
        //         type: TimelineChart.TYPE.POINT,
        //         at: new Date([2015, 7, 1]),
        //         customClass: 'custom-class'
        //     }]
        // }];
    }
}



// EventDrops
// https://github.com/marmelab/EventDrops

// math for zoom and pan svg documents
// http://www.petercollingridge.co.uk/tutorials/svg/interactive/pan-and-zoom/

// zoom and pan library
// https://github.com/ariutta/svg-pan-zoom

// easing
// https://github.com/camille-hdl/animatePaper.js/issues/10#issuecomment-290918462
