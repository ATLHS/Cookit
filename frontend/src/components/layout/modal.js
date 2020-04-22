import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Alert from 'react-bootstrap/Alert';

const alertModal = props => {
    const [show, setShow] = useState(false);
    return (
      <>
        <Modal
          show={show}
          onHide={() => setShow(false)}
          dialogClassName="modal-90w"
        >
            <Alert className="m-0" variant="danger">
            This is a primary alert with an example link. Give it a click if you like.
           </Alert>
        </Modal>
      </>
    );
  }

  export default alertModal;
  