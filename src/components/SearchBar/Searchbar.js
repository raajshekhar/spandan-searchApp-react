import React, {Component} from 'react';
import Input from '../UI/Input/Input';
import './SearchBar.css'

class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.findSearchData = this.findSearchData.bind(this);
	}

	findSearchData(event){
		let value = event.target.value;
		let data = [...this.props.searchData];
		let result = data.filter((list) => list.title.includes(value));
		if(!value.length) return this.props.resultData([],false)
		this.props.resultData(result, value.length)
	}

	render() {
		return (
			<div class="searchBar">
			<Input changed={this.findSearchData}/>	
			</div>
		)	
	}
}
export default SearchBar;