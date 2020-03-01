import React from 'react';
import {motion } from "framer-motion"
import { Link } from "react-router-dom";

const transition = {
  duration: 0.7,
  ease: [0.43, 0.13, 0.23, 0.96]
};

const backVariants = {
  exit: { x: [0, 100], opacity: [1, 0]},
  enter: { x: [-100, 0], opacity: [0, 1]}
};

export default props => {
	const style = props.location.pathname === '/' 
	? {top:'80vh', marginLeft: '1vw'} 
	: {top:'10vh', marginLeft: '43vw',color:'black'};

	return <motion.div variants={backVariants} transition={transition}
	      className="title"
	      style={style}>
	      <Link to='/' style={{fontWeight: 400, fontSize: '30px', letterSpacing: '18px'}}>Rex Shen</Link>
	      <p>S&empty;ftw@re De&#8897;&exist;l&ouml;per</p>
	    </motion.div>;
}
