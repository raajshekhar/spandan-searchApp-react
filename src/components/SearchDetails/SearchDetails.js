import React from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Button from '../UI/Button/Button'
import './SearchDetails.css';

const detailsModal = ({data, editDetails, cancel}) => {
    let {id, title, body} = data[0];
    let details = (
        <div className="details-modal">
            <h3>DETAILS</h3>
            <div className="d-flex">
                <span>Title:</span>
                <span>
                    {title}
                </span>
            </div>
            <div className="d-flex">
                <span>Body:</span>
                <span>{body}</span>
            </div>
            <div>
                <div><Button className="edit-btn" clicked={()=>editDetails(id)}>Edit </Button>
                <Button className="cancel-btn" clicked={cancel}>Cancel</Button></div>
            </div>
            
        </div>
    )
 return (<Modal modalClosed={cancel} show={true}>{details}</Modal>)
}

export default detailsModal;
