# Angular2-React

Angular2 component used to embed react components

# Usage

This assumes the user is using webpack/browserify tooling

	npm install angular2-react --save
	tsd install react react-dom --save

Creating a react component (MyComponent.jsx):

	import React from "angular2-react/react";
	// More conveinent than `import * as React from "react"`

	export default class MyComponent extends React.Component<any, any> {
			render() {
					const {name} = this.props;
					return <div>Hi {name}, this is a react component and my props is {JSON.stringify(this.props)}</div>;
			}
	}

Using the react component (app.ts):

	import {Component} from 'angular2/core';
	import {ReactComponent} from 'angular2-react/component';
	import MyComponent from './MyComponent';

	@Component({
		selector: 'my-app',
		template: '<h1>My First Angular App</h1><react-component [component]="embedComponent" [props]="embedComponentProps"></react-component>',
		directives: [ReactComponent]
	})
	export class AppComponent {
		embedComponent = MyComponent;
		embedComponentProps = {
			"name": "person"
		};
	}

# Usage without webpack

See usage example without webpack tooling [here](https://github.com/LookLikeAPro/Angular-2-React-Example)
