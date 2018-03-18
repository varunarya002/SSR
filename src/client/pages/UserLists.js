import React, { Component }  from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Helmet } from 'react-helmet';
class UserLists extends Component{
	componentDidMount(){
		this.props.fetchUsers();
	}
	renderList()
	{
		return this.props.users.map((val)=>{
			return(
					<li key={val.id}>{val.name}</li>
				);
		});
	}
	head()
	{
		return(
				<Helmet>
				<title>{`${this.props.users.length} Users Loaded`}</title>
				<meta property="og:title" content="Users App" />
			</Helmet>
			);
	}
	render()
	{
		return(
			<div>
				{this.head()}
				User Lists:
				<ul>{this.renderList()}</ul>
			</div>
			);
	}
}
function mapStateToProps({users}){
	return { users }
}
function loadData(store){
	return store.dispatch(actions.fetchUsers());
}
export default{ 
	component: connect(mapStateToProps, actions)(UserLists),
	loadData
	};