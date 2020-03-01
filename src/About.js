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
	    	I’m writing this cover letter to express my interests in the Graduate Software Developer position. I think it can be a great starting point of my career for all the opportunities and challenges for it can bring. <br/><br/>
			I obtained my Bachelor of Computer Science(Advanced)(Honours) from University of Sydney in 2019.I have maintained an excellent academic record in my study with average score of 80+ and have achieved first class honours in my honour year, focusing on static code analysis. I have also had multiple group work occasions throughout the study, which taught me skills in leadership, communication, organisation and how to become a better group player. I was also the academic tutor at USYD in the past year teaching first year computer science subjects and it gave me some work experience along with one other research internship at Synopsys.<br/><br/>
			With little room for more words here, I would appreciate an opportunity of interview.<br/><br/>
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