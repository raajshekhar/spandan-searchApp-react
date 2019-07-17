import React from 'react';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Layout from './Layout'
import SearchBar from '../../components/SearchBar/Searchbar'
import SearchResults from '../../components/searchResults/searchResults'

import EditForm from '../../components/EditForm/EditForm'

configure({adapter: new Adapter()});

describe('Render form', () => {
    let wrapper;

    it('should render <SearchBar />',() => {
        wrapper = mount(<SearchBar />);
        expect(wrapper.find(SearchBar)).toBeDefined();
    })
    it('should render <SearchResults />',() => {
        wrapper.setState({showResult: true});
        wrapper.update();
        expect(wrapper.find(SearchResults)).toBeDefined();
    })
    
    it('should render <EditForm />',() => {
        wrapper = shallow(<EditForm />);
        expect(wrapper.find(EditForm)).toBeDefined();
    })
});