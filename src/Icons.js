import React from 'react';

import { Icon } from 'antd';
import {motion } from "framer-motion"


const MyIcon = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1650837_efahpb1m6g.js', 
});

const icons = [['icon-ziyuan','https://github.com/Rezxx'], 
['icon-LinkedIn','https://www.linkedin.com/in/rex-shen-49485b148/'], 
['icon-facebook','https://www.facebook.com/profile.php?id=100008996261914']];

export default props => 
	<div className='icons'>
		{icons.map(([icon, url]) => 
			<motion.button key={icon}  whileHover={{ scale: 0.95 }} whileTap={{ scale: 0.8 }}>
				<a href={url}><motion.div whileHover={{ scale: 1.2 , opacity:0.8}}><MyIcon key={icon} type={icon} /></motion.div></a>
			</motion.button>)}
	</div>