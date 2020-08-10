import React from 'react'
import './Navbar.css'
import clsx from 'clsx'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles';

const styles = {
  outlinedButton: {
    color: "#2A6956",
    border: "1px solid #2A6956"
  },
  containedButton: {
    color: "#2A6956",
    border: "1px solid #2A6956",
    backgroundColor: "#6BC4A9"
  }
}

function Navbar(props) {
  const {classes, className} = props
  return (
    <div className="nav-bar">
      <h2>Reinforcement learning</h2>
        <Button className={clsx(classes.outlinedButton, className)}>Sign in</Button>
        <Button className={clsx(classes.containedButton, className)}>Register</Button>
    </div>
  );
}

export default withStyles(styles)(Navbar)