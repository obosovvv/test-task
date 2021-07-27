import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function Modal(props) {
  const handleClose = () => {
    props.setModalState(false)
  };

  const characters = (
    <ul>
      {
        props.modalData.characters?.map((character) => {
          return (
            <li>{ character.name }</li>
          )
        })
      }
    </ul>
  )

  return (
    <div>
      <Dialog
        open={props.state}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{'Additional info about episode'}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Characters are:
            { characters }
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
