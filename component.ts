import React from "./react";
import {Component} from 'angular2/core';

@Component({
    selector: 'react-component',
    template:
		'<div [id]="id">wrapper</div>'
    ,
    inputs: ['component', 'props']
})
export class ReactComponent {
    component: any;
    props: Object;
    id: number;
    drawNode: any;
    ngOnInit() {
        this.id = Math.floor(Math.random() * 9999999);
    }
    ngAfterViewInit() {
        this.drawNode = document.getElementById(this.id.toString());
		this.render();
    }
    ngOnChanges() {
        if (this.drawNode) {
			this.render();
        }
    }
    render() {
		React.render(React.createElement(this.component, this.props), this.drawNode);
    }
}
