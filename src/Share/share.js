import React, { useState } from 'react';
import { FacebookIcon, FacebookShareButton, TwitterIcon, TwitterShareButton, WhatsappShareButton, WhatsappIcon, TelegramShareButton, TelegramIcon } from 'react-share';
import { Modal, Button } from 'react-bootstrap';
import style from "./share.module.css"
import { IoClipboardSharp } from "react-icons/io5"

const SharePage = ({ pageLink }) => {
  const [showModal, setShowModal] = useState(false);
  const [showCopiedMessage, setShowCopiedMessage] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(pageLink);
    setShowCopiedMessage(true);
    setTimeout(() => setShowCopiedMessage(false), 3000); // hide message after 3 seconds
  };

  return (
    <>
      <div>
        <Button onClick={() => setShowModal(true)}>Share this Recipe</Button>
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Share</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className={style.socials}>
            <FacebookShareButton url={pageLink}>
              <FacebookIcon size={40} round />
            </FacebookShareButton>
            <TwitterShareButton url={pageLink} title="Check out this page!">
              <TwitterIcon size={40} round />
            </TwitterShareButton>
            <WhatsappShareButton url={pageLink}>
                <WhatsappIcon size={40} round />
            </WhatsappShareButton>
            <TelegramShareButton url={pageLink}>
                <TelegramIcon size={40} round />
            </TelegramShareButton>
            <button onClick={handleCopyLink} className={style.button}><IoClipboardSharp/></button> <br></br>
            
            </div>
          </Modal.Body>
          <Modal.Footer>
          {showCopiedMessage && <p>Link copied!</p>} <span></span>
            <Button className={style.button} onClick={() => setShowModal(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default SharePage;