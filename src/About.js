import React, {Component} from 'react';
import {motion } from "framer-motion"
import Layout from './Layout';
import me from './img/me.jpg';


class About extends Component {

    componentDidMount(){
		document.body.style.backgroundImage = "none";
	}

    render(){
    	const variants = {exit: { x: [0, 100], opacity: [1, 0]},
		  enter: { x: [-100, 0], opacity: [0, 1]}
		};
    	const content = props=><motion.div variants={variants}>
    		<div className="me"><img src={me} alt=""/></div>
    		Hey there, My name is Rex Shen and I am currently looking for a Graduate Developer position in Australia. <br/><br/>
			I have recently graduated from <b>University of Sydney</b> with a <b>Bachelor of Computer Science and Technology(Advanced)(Honours)</b> degree(I know, it is a long title) in 2019. I am a person who enjoys solving problems and learning new skills or knowledges, and that's the reason why I persued the advanced stream to push myself taking more challenges and landed with an 80+ WAM. I have also obtained a <b>First Class Honour</b> from my degree as well with work focusing on Static Code Analysis.<br/><br/>
			Apart from the coursework that I did in uni, I have also taken part in the teaching side of the classroom.  It has been more than one year since I started tutoring first-year Computer Science subject in USYD(<a className='normal' href='https://cusp.sydney.edu.au/students/view-unit-page/uos_id/289822/vid/317314'>INFO1110</a> and <a className='normal' href='https://cusp.sydney.edu.au/students/view-unit-page/uos_id/289823/vid/318475'>INFO1113</a>). I have learnt more about teamwork, communication and organisation as well as a deeper understanding of Computer Science from this experience.<br/><br/>
			I would like to thank you for visiting my site and give me a thumbs up if liked my profile ;)<br/>

    	</motion.div>;

		return <motion.div animate="enter" exit="exit" 
			variants={{exit: { transition: { staggerChildren: 0.3 }}, 
            enter:{transition: { staggerChildren: 0.3 }}
          }}>
	      	<Layout {...Object.assign({}, this.props, {component:content})}/>

	    </motion.div>;
	}
}  
  


export default About;