import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Icon from 'material-ui/Icon'
import Grid from 'material-ui/Grid'
import { withRouter } from 'react-router'

import BottomNavigation, { BottomNavigationButton } from 'material-ui/BottomNavigation'

import classes from './style.scss'

@withRouter
export default class BottomNav extends PureComponent {
	static propTypes = {
		user: PropTypes.object,
		onShowFrontpage: PropTypes.func.isRequired,
		onShowOverview: PropTypes.func.isRequired,
		onShowTrackers: PropTypes.func.isRequired,
		onToggleDrawer: PropTypes.func.isRequired,
		location: PropTypes.shape({
			pathname: PropTypes.string.isRequired,
		}),
	}

	componentDidMount() {
		this.props.onToggleDrawer('close')
	}

	render() {
		const { user, onShowFrontpage, onShowOverview, onShowTrackers } = this.props

		const path = this.props.location.pathname
		const userIsLoggedIn = user === undefined ? false : user.isLoggedIn

		return (

			<div className={classes.bottomNavWrapper}>
				<Grid container spacing={16}>
					<BottomNavigation	showLabels className={classes.bottomNav} >

						<BottomNavigationButton
							label='Overblik'
							icon={<Icon className='material-icons'>home</Icon>}
							onClick={onShowOverview}
							className={path === '/overview' ? classes.highlight : null}
						/>

						<BottomNavigationButton
							label='Mine Enheder'
							icon={<Icon className='material-icons'>view_list</Icon>}
							onClick={onShowTrackers}
							className={path === '/trackers' ? classes.highlight : null}
						/>

						<BottomNavigationButton
							label='Kort'
							icon={<Icon className='material-icons'>map</Icon>}
							disabled
						/>
						<BottomNavigationButton
							label='Konto'
							icon={<Icon className='material-icons'>account_circle</Icon>}
							disabled
						/>
					</BottomNavigation>

				</Grid>
			</div>

		)
	}
}
