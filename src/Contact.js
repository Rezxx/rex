import React from 'react';
import Divider from '@material-ui/core/Divider';import { motion } from "framer-motion"

import Layout from './Layout';

const variants = {exit: { x: [0, 100], opacity: [1, 0]},
	  enter: { x: [-100, 0], opacity: [0, 1]}
	};

const content = props=><motion.div style={{textAlign:'center', letterSpacing: 5, margin: 50}} variants={variants}>
			<Divider/>
    		<div style={{margin:100}}><p className='head'>Email</p><br/> jshe9611@uni.sydney.edu.au</div>
    		<Divider/>
    	</motion.div>;

export default props => <motion.div animate="enter" exit="exit" 
			variants={{exit: { transition: { staggerChildren: 0.3 }}, 
            enter:{transition: { staggerChildren: 0.3 }}
          }}>
      <Layout {...Object.assign({}, props, {component:content})}/>
      </motion.div>;