import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const ModalAddEp = ({handleSubmit,handleNumber,handleUrl,handleClose,handleShow,show,handleNew,formRef}) => {
   
  return (
    
    <>
    <Button style={{marginLeft:"3.5cm"}} variant="primary" onClick={handleShow}>
        Add Episode
    </Button>

    <Modal  show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Add Episodes</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form  ref={formRef}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Episode number</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder=""
                        autoFocus
                        onChange={handleNumber}
                        name="number"
                        min="1"
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Url</Form.Label>
                    <Form.Control
                        type="url"
                        placeholder=""
                        autoFocus
                        onChange={handleUrl}
                        name="url"
                    /> 
                </Form.Group>
                <Form.Group  className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>New</Form.Label>
                    <input style={{marginLeft:"0.5cm"}}
                        type="checkbox"
                       
                        autoFocus
                        onChange={handleNew}
                        name="New"
                    /> 
                </Form.Group>
                
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="success" onClick={handleSubmit}>
                Save Changes
            </Button>
        </Modal.Footer>
    </Modal>
</>
  )
}

export default ModalAddEp