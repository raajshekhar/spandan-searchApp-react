import React, { Component } from 'react';
import Input from '../UI/Input/Input'
import Button from '../UI/Button/Button'
import './EditForm.css'

class EditForm extends Component {

    constructor(props){
        super(props);
        this.changeHandler = this.changeHandler.bind(this);
        this.saveChanges = this.saveChanges.bind(this);
    
        this.state = {
            listFields:[
                {
                   value: '',
                   inValid: false,
                   touched: false,
                   elementConfig: {
                       type: "text",
                       placeholder: 'Title'
                   }
                },
                {
                   value: '',
                   inValid: false,
                   touched: false,
                   elementConfig: {
                       type: "text",
                       placeholder: 'Body'
                   }
               }
           ]
        }
    }

    componentDidMount(){
        let requiredData = {...this.props.data};
        let clonedList = [...this.state.listFields];
        requiredData =  clonedList.map((list)=>{
            let property = list.elementConfig.placeholder.toLowerCase();
            let listKeys = Object.keys(requiredData);
            let modifiedResult = {};
            if(listKeys.includes(property)){
                list.value = requiredData[property]
                modifiedResult = list;
            }
            return modifiedResult;
        })
        this.setState({
            ...this.state,
            listFields:[...requiredData]
        })
    }

    changeHandler(event,index, touched = true){
        let val = event.target.value;
        let stateFields = [...this.state.listFields];
        let inValid = Boolean(stateFields[index].value.length);
        stateFields[index].value = val;
        stateFields[index].inValid = !inValid;
        stateFields[index].touched = touched;
        this.setState({
            ...this.state,
            listFields:[...stateFields]
        })
    }
    saveChanges() {
        let result = [...this.state.listFields];
        result = result.reduce((acc,list) => {
            const property = list.elementConfig.placeholder.toLowerCase();
            acc[property] = list.value
            return acc;
        },{});
        let modifiedData = {
            ...this.props.data,
            ...result
        }
        this.props.updatedData(modifiedData)
    }
    cancel() {

    }

    render(){
        const listFields = [...this.state.listFields];
        return (
            
            <div class="editForm">
                <div class="title">EDIT FORM</div>
                {
                    listFields.map((field,index) => {
                        return (
                            <Input 
                                elementConfig={field.elementConfig}
                                value={field.value}
                                inValid={field.inValid}
                                touched={field.touched}
                                changed={(event) => this.changeHandler(event,index)}
                                onBlur={(event) => this.changeHandler(event,index, false)}
                                key={index}/>
                        )
                    })
                }
                <div><Button clicked={this.saveChanges}>Save</Button>
                <Button clicked={this.props.cancel}>Cancel</Button></div>
            </div>
        );
    }
}

export default EditForm;