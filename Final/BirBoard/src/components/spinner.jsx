import React from 'react';

export default class Spinner extends React.Component {

	render() {
		return(
			<div className="row">
				<div className="col-md-12 m-t-3">
					<img className="img-responsive center-block" src="https://cdn.dribbble.com/users/40298/screenshots/2030551/bird_loader.gif" />
				</div>
			</div>
		);
	}
}
