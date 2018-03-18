import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import requireAuth from '../components/hocs/requireAuth';
class AdminsPage extends Component {
	componentDidMount()
	{
		this.props.fetchAdmins();
	}
	renderAdmins()
	{
		return this.props.admins.map((val)=>{
			return <li key={val.id}>{val.name}</li>
		});
	}
	render(){
		return(
				<div>
				<h3>Protected Admin List </h3>
				<ul>
				{ this.renderAdmins()}
				</ul>
				</div>
			);
	}
}
function mapStateToProps({ admins })
{
	return { admins };
}
export default {
	component: connect(mapStateToProps, actions)(requireAuth(AdminsPage)),
	loadData: ({ dispatch })=> dispatch(actions.fetchAdmins())
};