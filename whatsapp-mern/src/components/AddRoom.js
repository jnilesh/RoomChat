import React, { useState } from 'react';
import './AddRoom.css';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import AddCommentIcon from '@material-ui/icons/AddComment';
import Axios from '../axios';
import { useStateValue } from '../ContextApi/StateProvider';


export default function AddRoom() {
//   const classes = useStyles();
  const [{ user }, dispatch] = useStateValue();
  const [open, setOpen] = React.useState(false);
  const [rname, setRname] = useState("");
  const [rdes, setRdes] = useState("");

  const submitRoom = async (e) => {
    e.preventDefault();
    console.log(rname + " " + rdes);
    await Axios.post(('/rooms'),{
        name: rname,
        description: rdes,
        creator: {
            name: user.displayName,
            uid : user.uid
        }

    });


    setRname('');
    setRdes('');
    handleClose();
    }      

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
        <div onClick={handleOpen} className="sidebar__addNew">
            <AddCommentIcon fontSize="large"/> 
            <h3> Add new Chat</h3>
        </div> 
      
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="sidebar__modal"
        // className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className="modal_paper"
        //   className={classes.paper}
          >
          <h2 id="transition-modal-title">New Room</h2>
              <form className="modal_form" onSubmit={submitRoom}>
                <input required
                value={rname} 
                 onChange={e => setRname(e.target.value)}
                 type="text" 
                 placeholder="Enter Room Name"/>
                <textarea 
                required
                value={rdes} 
                onChange={e => setRdes(e.target.value)}
                type="text"
                rows="4" 
                placeholder="Enter Room Description"/>
                <button type="submit" >ADD</button>
              </form>
            
            {/* <p id="transition-modal-description">react-transition-group animates me.</p> */}
          </div>
        </Fade>
      </Modal>
    </div>
  );
}


