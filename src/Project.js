import React, {Component} from 'react';
import {motion } from "framer-motion"
import Grid from '@material-ui/core/Grid';

import Layout from './Layout';
import face from './img/face.jpg'

const move = 100;

const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };

const leftVariants = {
  exit: { x: [0, -move], opacity: [1, 0]},
  enter: { x: [-move, 0], opacity: [0, 1]}
};

const rightVariants = {
  exit: { x: [0, move], opacity: [1, 0]},
  enter: { x: [move, 0], opacity: [0, 1]}
};


const projects = [{title: 'Connect Four Solver', url: 'https://github.com/Rezxx/ConnectFour_Solver', desc: 'Offers a best move in a ConnectFour game using Alpha-Beta pruning MiniMax algo.'}
             ,{title: 'Face Recognition', url: 'https://github.com/Rezxx/Face-Recognition', desc: 'Face recognition tool uses EigenFace and k-NN classifier'}
             ,{title: 'Pool Game', url: 'https://github.com/Rezxx/PoolGame', desc:'Virtual pool game under Qt enviornment'}
             ,{title: 'Bird', url: 'https://github.com/Rezxx/Bird', desc: 'Web music player based on Django and React'}
             ,{title: 'Digger', url: 'https://bitbucket.org/Rex9611/info3600-bugchecker/src/master/', desc: 'Static analysis tool finding Java Null Pointer Exceptions based on Soufflé and Doop'}
             ];

const Thumbnail = ({ project, i }) => {
  const odd = !(i & 1);
  const image = <motion.div key='image'
    whileHover={{ scale: 0.9 }}
    whileTap={{ scale: 0.8 }}
    transition={transition} 
    style={{overflow:'hidden'}}>
    <a href={project.url}>
      <motion.img
        src={face}
        alt="Place Holder"
        whileHover={{scale: 1.2 }}
        transition={transition}
      />
    </a>
  </motion.div>;

  const text = <div key='text' style={{margin:'0 20px', minWidth: '15vw'}}>
      <div className='porject_name'>
        <a href={project.url}>{project.title}</a>
      </div>{project.desc}
    </div>;

  return(
  <Grid item xs={odd ? 12 : 6}>
    <motion.div variants={odd ? leftVariants : rightVariants} className="thumbnail">
     {odd ? [image,text] : [text,image]}
    </motion.div>
  </Grid>);
}

const Content = props =>  
  <div className='gallery'>
    <motion.div className='line' variants={{enter:{scaleY:[0, 1], opacity:[0, 1]}, exit:{scaleY:[1, 0], opacity:[1, 0]}}}/>
    <Grid container justify="flex-end" alignContent='space-around' alignItems='center' spacing={10}>
      {projects.map((project, i) => (
          <Thumbnail key={i} project={project} i={i} />
        ))}
    </Grid>
  </div>;

class Project extends Component {

  componentDidMount(){
		document.body.style.backgroundImage = "none";
	}

	render(){
		return <motion.div
	        animate="enter"
	        exit="exit"
	        variants={{exit: { transition: { staggerChildren: 0.2 }}, 
            enter:{transition: { staggerChildren: 0.2 }}
          }}>
          <Layout {...this.props} component={Content}/>
      	</motion.div>
	}
}  


export default Project;