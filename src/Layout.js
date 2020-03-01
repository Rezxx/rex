import React from 'react';
import { Link } from "react-router-dom";
import { motion } from "framer-motion"

import Title from './Title';
import Icons from './Icons';
import rex from './img/rex_cv.pdf'

const Content = ({component: C}) => 
	<motion.div className='content'>
	     {C ? <C/> : ""}
	</motion.div>;

export default props => {
  const link = ['/about', '/project', '/contact'];
  return(
  	<div>
	    <div className="sidenav">
	      {link.map(t => <Link style={props.location.pathname === t ? {color:'#4675d2'} : {}} key={t} to={t}>{t.replace('/','')}</Link>)}
	    	<a href={rex}>Resume</a>
	    </div>
	    <Title {...props}/>
	    <Icons/>
	    <Content component={props.component}/>
    </div>);
}