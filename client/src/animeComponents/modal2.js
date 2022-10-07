import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
const Modals2= ({handleSubmit,handleNumber,handleUrl,handleClose,handleShow,show,Trailer,formRef}) => {
     
  return (
    
    <>
    <Button style={{marginLeft:"1.5cm",marginRight:'0.5cm'}} variant="primary" onClick={handleShow}>
       Modify Trailer
    </Button>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Modify Trailer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form   ref={formRef} style={{minWidth:"8cm"}}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>anime Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder=""
                        autoFocus
                        onChange={handleNumber}
                        name="animeName"
                        defaultValue={Trailer?.animeName}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>animePicture</Form.Label>
                    <Form.Control
                        type="url"
                        placeholder=""
                        
                        onChange={handleUrl}
                        name="animePicture"
                        defaultValue={Trailer?.animePicture}
                    /> 
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>season</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder=""
                        
                        onChange={handleUrl}
                        name="season"
                        min="1"
                        defaultValue={Trailer?.season}
                    /> 
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>trailer</Form.Label>
                    <Form.Control
                        type="url"
                        placeholder=""
                       
                        onChange={handleUrl}
                        name="trailer"
                        defaultValue={Trailer?.trailer}
                    /> 
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>animeDescription</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder=""
                       
                        onChange={handleNumber}
                        name="animeDescription"
                        defaultValue={Trailer?.animeDescription}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>genre</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder=""
                        
                        onChange={handleNumber}
                        name="genre"
                        defaultValue={Trailer?.genre}
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

export default Modals2