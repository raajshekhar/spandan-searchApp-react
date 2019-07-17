import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import SearchBar from '../../components/SearchBar/Searchbar'
import SearchResults from '../../components/searchResults/searchResults'
import EditForm from '../../components/EditForm/EditForm'
import './Layout.css'

/**
 * Layout is container which contains different components 
 */
class Layout extends Component {
    constructor(props){
        super(props);
        this.searchResultData = this.searchResultData.bind(this)
        this.settingState = this.settingState.bind(this);
        this.modifiedData = this.modifiedData.bind(this);
        this.state = {
            searchData: [], //searched data will be stored in this array for sometime
            editForm: false,
            selectedItem: null,
            showResult: false
        }
    }


    settingState(data,showResult){
        this.setState({
            ...this.state.searchData,
            searchData: [...data],
            showResult
        })
    }

    searchResultData(searchData,showResult){
        if(!searchData.length && !showResult) return this.settingState([],false);
        if(showResult) this.settingState(searchData,true)
    }

    /**
     * 
     * @param {id} id is used to find result from store data which is unique id
     * clickHandler is used to send data of selected item from search results
     * to edit form
     */
    clickHandler (id) {
        let requiredObj = [...this.state.searchData];
        requiredObj = requiredObj.find((list) => list.id === id);
        this.setState(() => ({
                ...this.state,
                searchData: [requiredObj],
                editForm: true
            }))
    }

    modifiedData () {
        let data = arguments[0]
        this.props.updateData(data);
        this.setState(() => ({
            ...this.state,
            searchData: [],
            editForm: false,
            showResult: false
        }))
    }

    cancelEdit = () =>{
        this.setState(() => ({
            ...this.state,
            searchData: [],
            editForm: false,
            showResult: false
        }))
    }

    componentDidMount() {
        this.props.getData()
    }

    render(){
        const {editForm} = {...this.state};
        let searchOptions = (
            <div className="show--search--options">
                    <SearchBar resultData={this.searchResultData} searchData={this.props.data} ></SearchBar>
                    {this.state.showResult ? <SearchResults clickHandler={(id)=>this.clickHandler(id)} listData={this.state.searchData} />: null}
            </div>
        );
        return (
            <section>
                { editForm ? <EditForm cancel={this.cancelEdit} updatedData={this.modifiedData} data={this.state.searchData[0] } /> : searchOptions }                
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.suggestions.listData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getData: () => dispatch(actions.getListData()),
        updateData: data => dispatch(actions.onDataUpdate(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);