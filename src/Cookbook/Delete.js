import React, { useState } from "react";
import deleteRecipeById from "./SanityDelete";
import { Modal, Button } from "react-bootstrap";

function DeleteDocumentButton({ ref_Id }) {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const handleModalClose = () => {
    setShowModal(false);
    handleReload();
  };

  const handleDelete = () => {
    deleteRecipeById(ref_Id);
    //handle show  modal here after the delete is pressed
    setShowModal(true);
  };

  const handleReload = () => {
    window.location.reload();
  };

  const handleCancel = () => {
    setShowConfirmation(false);
  };

  const handleConfirm = () => {
    setShowConfirmation(false);
    handleDelete();
  };

  return (
    <>
      <button
        onClick={() => setShowConfirmation(true)}
        className="btn btn-outline-danger"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-trash"
          viewBox="0 0 16 16"
        >
          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
          <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
        </svg>
      </button>
      {showConfirmation && (
        <div className="confirmation-dialog">
          <p>Are you sure you want to delete this document?</p>
          <button onClick={handleCancel} className="btn btn-outline-danger">
            Cancel
          </button>
          <button onClick={handleConfirm} className="btn btn-outline-danger">
            Delete
          </button>
        </div>
      )}

      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header>
          <Modal.Title>Recipe deleted</Modal.Title>
        </Modal.Header>
        <Modal.Body>The recipe has been successfully deleted.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteDocumentButton;
