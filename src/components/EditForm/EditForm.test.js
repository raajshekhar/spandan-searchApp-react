import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Input from '../UI/Input/Input'
import Button from '../UI/Button/Button'
import EditForm from './EditForm'
configure({adapter: new Adapter()});

describe('Edit Form', () => {
    let wrapper;

    it('should render two <Input /> elements',() => {
        wrapper = shallow(<EditForm />);
        expect(wrapper.find(Input).length).toBe(2);
    })
    it('should render two <Button /> elements',() => {
        wrapper = shallow(<EditForm />);
        expect(wrapper.find(Button)).toBeDefined();
        expect(wrapper.find(Button).length).toBe(2)
       
    });
    it('form should have a className and title', () => {
        expect(wrapper.find('form').hasClass("editForm"));
        expect(wrapper.find('h3').text()).toEqual('EDIT FORM');
    });
});