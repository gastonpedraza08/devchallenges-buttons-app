import React from 'react';
import Button from './components/Button';

import './ButtonsApp.css';

export default function ButtonsApp() {
	return (
		<div className="container my-4 mx-auto px-md-5">
			<h1 className="mb-5">Buttons</h1>
			<div>
				<p>&lt;Button /&gt;</p>
				<Button />
			</div>
			<div>
				<p>&lt;Button variant="outline" /&gt;</p>
				<Button variant="outline" />
			</div>
			<div>
				<p>&lt;Button variant="text" /&gt;</p>
				<Button variant="text" />
			</div>
			<div>
				<p>&lt;Button disableShadow /&gt;</p>
				<Button disableShadow />
			</div>
			<div className="row">
				<div className="col">
					<p>&lt;Button disabled /&gt;</p>
					<Button disabled />
				</div>
				<div className="col">
					<p>&lt;Button disabled variant="text" /&gt;</p>
					<Button disabled variant="text" />
				</div>
			</div>
			<div className="row">
				<div className="col">
					<p>&lt;Button startIcon="shopping-cart" /&gt;</p>
					<Button startIcon="shopping-cart" />
				</div>
				<div className="col">
					<p>&lt;Button endIcon="shopping-cart" /&gt;</p>
					<Button endIcon="shopping-cart" />
				</div>
			</div>
			<div className="row">
				<div className="col">
					<p>&lt;Button size="sm" /&gt;</p>
					<Button size="sm" />
				</div>
				<div className="col">
					<p>&lt;Button size="md" /&gt;</p>
					<Button size="md" />
				</div>
				<div className="col">
					<p>&lt;Button size="lg" /&gt;</p>
					<Button size="lg" />
				</div>
			</div>
			<div className="row">
				<div className="col">
					<p>&lt;Button color="default" /&gt;</p>
					<Button color="default" />
				</div>
				<div className="col">
					<p>&lt;Button color="primary" /&gt;</p>
					<Button color="primary" />
				</div>
				<div className="col">
					<p>&lt;Button color="secondary" /&gt;</p>
					<Button color="secondary" />
				</div>
				<div className="col">
					<p>&lt;Button color="danger" /&gt;</p>
					<Button color="danger" />
				</div>
			</div>
		</div>
	);
}