import React, { Component } from 'react';
import Input from '../UI/Input/Input'
import Button from '../UI/Button/Button'
import './EditForm.css'
import Modal from '../UI/Modal/Modal';

/**
 * EditForm component contents the form to modify the selected data
 */
class EditForm extends Component {

    constructor(props){
        super(props);
        this.changeHandler = this.changeHandler.bind(this);
        this.saveChanges = this.saveChanges.bind(this);
    
        this.state = {
            formValid: true,
            listFields:[
                {
                   inValid: false,
                   touched: false,
                   elementConfig: {
                       type: "text",
                       placeholder: 'Title'
                   },
                   value: '',
                   title: 'Title',
                   error: '*Pease enter the title'
                },
                {
                    value: '',
                   inValid: false,
                   touched: false,
                   elementConfig: {
                       type: "text",
                       placeholder: 'Body'
                   },
                   title: 'Body',
                   error: '*Pease enter the title'
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
    /**
     * changeHandler is called on change of text in input field 
     * and update the state.
     */
    changeHandler(event,index, touched = true){
        let val = event.target.value;
        let stateFields = [...this.state.listFields];
        let inValid = Boolean(stateFields[index].value.trim().length);
        stateFields[index].value = val;
        stateFields[index].inValid = !inValid;
        stateFields[index].touched = true;
        this.setState({
            ...this.state,
            formValid: inValid,
            listFields:[...stateFields]
        })
    }

    /**
     * saveChanges is called on click of save button
     */
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

    render(){
        const listFields = [...this.state.listFields];
        const { formValid } = {...this.state};
        return (
			
                <form className="editForm" onSubmit={(event) => event.preventDefault()}>
                    <h3 className="title">EDIT FORM</h3>
                    {
                        listFields.map((field,index) => {
                            return (
                                <div className="d-flex" key={index}>
                                <label className="title">{`${field.title}`}:</label>
                                <Input 
                                    elementConfig={field.elementConfig}
                                    value={field.value}
                                    inValid={field.inValid}
                                    touched={field.touched}
                                    onChange={(event) => this.changeHandler(event,index)}
                                    onBlur={(event) => this.changeHandler(event,index, false)}
                                    errorMessage={field.error}
                                    />
                                    
                                    </div>
                            )
                        })
                    }
                    <div><Button disabled={!formValid} className="save-btn"  clicked={this.saveChanges}>Save </Button>
                    <Button className="cancel-btn" clicked={this.props.cancel}>Cancel</Button></div>
                </form>

        );
    }
}

export default EditForm;