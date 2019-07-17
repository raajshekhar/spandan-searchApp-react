import React, {Component} from 'react';
import Input from '../UI/Input/Input';
import './SearchBar.css'

/**
 * SearchBar component contains a input field with autocomplete functionality
 */
class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.findSearchData = this.findSearchData.bind(this);
	}
	
	/**
	 * findSearchData is called on change of data in search box
	 */
	findSearchData(event){
		let value = event.target.value;
		let data = [...this.props.searchData];
		let result = data.filter((list) => list.title.includes(value));
		if(!value.length) return this.props.resultData([],false)
		this.props.resultData(result, value.length)
	}

	render() {
		return (
			<div className="searchBar">
			<Input placeholder="Enter search keyword" onChange={this.findSearchData}/>	
			</div>
		)	
	}
}
export default SearchBar;