import React, { useState } from "react";
import axios from "../config/axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Spinner from "react-bootstrap/Spinner";
import { useEffect } from "react";

const Problem2 = () => {
  const [showA, setShowA] = useState("");
  const [showB, setShowB] = useState("");
  const [contact, setContact] = useState([]);
  const fetchAllContact=async ()=>{
    const {data}= await axios.get("/contacts")
    console.log(data)

  }
  useEffect(()=>{
    fetchAllContact();
    console.log(contact)

  },[])

  const handleCloseA = () => setShowA(false);
  const handleShowA = () => setShowA(true);
  const handleCloseB = () => setShowB(false);
  const handleShowB = () => setShowB(true);

  return (
    <div className="container">
      <Modal show={showA} onHide={handleCloseA}>
        <Modal.Header closeButton>
          <Modal.Title>All Contacts</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label class="form-check-label" for="flexRadioDefault1">
              Even checked
            </label>
          </div>
          <Button variant="primary" onClick={handleCloseA}>
            Button C
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showB} onHide={handleCloseB}>
        <Modal.Header closeButton>
          <Modal.Title>US contacts</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseB}>
            Button C
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

        <div className="d-flex justify-content-center gap-3">
          <button
            className="btn btn-lg btn-outline-primary"
            onClick={handleShowA}
            type="button"
          >
            All Contacts
          </button>
          <button
            className="btn btn-lg btn-outline-warning"
            onClick={handleShowB}
            type="button"
          >
            US Contacts
          </button>
        </div>
      </div>
    </div>
  );
};

export default Problem2;
