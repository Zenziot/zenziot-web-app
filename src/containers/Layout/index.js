import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { autobind } from 'core-decorators'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'

import Body from '../../components/body'
import { actions as authActions } from '../../stores/auth'

import classes from './style.scss'

@connect(({ auth }) => ({ auth }), authActions)
@withRouter
export default class Layout extends PureComponent {
	static propTypes = {
		router: PropTypes.object.isRequired,
		children: PropTypes.element.isRequired,
		auth: PropTypes.object,
		logOut: PropTypes.func.isRequired,
	}

	@autobind handleShowFrontpage() { this.props.router.push('/') }
	@autobind handleLogOut() { this.props.logOut() }
	@autobind handleShowOverview() { this.props.router.push('/overview') }

	render() {
		const { children, auth, handleLogOut } = this.props
		const user = auth ? auth.get('user') : null
		// console.log('user:', user)
		return (
			<Body

				user={user}
				onLogOut={this.handleLogOut}
				onShowFrontpage={this.handleShowFrontpage}
				onShowOverview={this.handleShowOverview}
			>
				<div className={classes.root}>
					{children}
				</div>

			</Body>
		)
	}
}
