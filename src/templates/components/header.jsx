import React, { Component } from 'react';
import routes from '../../helpers/route';
import { withRouter, Link } from 'react-router-dom';
import { Collapse, Container, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';

class Header extends Component {
	state = {
		is_nav_collapsed: false
	};

	_onToggleNav = () => {
		this.setState({
			is_nav_collapsed: !this.state.is_nav_collapsed
		});
	};
	render() {
		return (
			<Navbar color='dark' dark expand='md'>
				<Container>
					<NavbarBrand href='/'>Notes</NavbarBrand>
					<NavbarToggler onClick={this._onToggleNav} />
					<Collapse isOpen={this.state.is_nav_collapsed} navbar>
						<Nav className='ml-auto' navbar>
							<NavItem active={this.props.location.pathname === routes.home}>
								<Link className='nav-link' to={routes.home}>
									Home
								</Link>
							</NavItem>
							<NavItem active={this.props.location.pathname === routes.pin}>
								<Link className='nav-link' to={routes.pin}>
									Pin
								</Link>
							</NavItem>
						</Nav>
					</Collapse>
				</Container>
			</Navbar>
		);
	}
}

export default withRouter(Header);
