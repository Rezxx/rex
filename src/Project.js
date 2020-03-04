import React, {Component} from 'react';
import {motion } from "framer-motion"
import Grid from '@material-ui/core/Grid';
import {Tag} from 'antd';

import Layout from './Layout';
import face from './img/face.jpg'

import 'antd/lib/tag/style/index.css';

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


const projects = [{title: 'Connect Four Solver',stack:['Java'], img: face, url: 'https://github.com/Rezxx/ConnectFour_Solver', desc: 'Offers a best move in a ConnectFour game using Alpha-Beta pruning MiniMax algo.'}
             ,{title: 'Face Recognition', stack:['Python', 'OpenCV'], img: 'https://media.giphy.com/media/Kbwl4xM4ZhL1KD9RHd/giphy.gif', url: 'https://github.com/Rezxx/Face-Recognition', desc: 'Face recognition tool uses EigenFace and k-NN classifier'}
             ,{title: 'Throw Balls', stack:['Python', 'PyGame', 'OpenGL'] ,img: 'https://media.giphy.com/media/L0xUOFkNYvZysYkOOv/giphy.gif', url: 'https://github.com/Rezxx/Throw-Balls', desc:'A ball throwing game built using PyGame and OpenGL'}
             ,{title: 'Pool Game', stack:['C++', 'Qt'], img: face, url: 'https://github.com/Rezxx/PoolGame', desc:'Virtual pool game under Qt enviornment'}
             ,{title: 'Bird', stack:['React.js', 'Django', 'REST'], img: 'https://media.giphy.com/media/cMEcAd8nS8UAQAdtLi/giphy.gif', url: 'https://github.com/Rezxx/Bird', desc: 'Web music player based on Django and React, syncing Spotify and Youtube account'}
             ,{title: 'Digger', stack:['Datalog'], img: face, url: 'https://bitbucket.org/Rex9611/info3600-bugchecker/src/master/', desc: 'Static analysis tool finding Java Null Pointer Exceptions based on Soufflé and Doop'}
             ,{title: 'ClearPay', stack:['Java', 'Android'], img: 'https://media.giphy.com/media/RNWZ0rqJOLdGfWXG3R/giphy.gif', url: '#', desc:'An Android App for splitting bills between users, supporting offline transactions via Bluetooth.'}];

const colours = ["magenta", "red", "volcano", "orange", "gold", "lime", "green", "cyan", "blue", "geekblue", "purple", "processing"];
var stack = new Set();
projects.forEach(p =>{
  p.stack.forEach(s =>{
    stack.add(s);
  });
});

var maps = {};
[...stack].forEach((s, i) => {maps[s] = colours[i];console.log(s, i);});

const Thumbnail = ({ project, i }) => {
  const odd = !(i & 1);
  const image = <motion.div key='image'
    whileHover={{ scale: 0.9 }}
    whileTap={{ scale: 0.8 }}
    transition={transition} 
    style={{overflow:'hidden'}}>
    <a href={project.url}>
      <motion.img
        src={project.img}
        alt="Place Holder"
        whileHover={{scale: 1.3 }}
        transition={transition}
      />
    </a>
  </motion.div>;
  console.log(project);
  const text = <div key='text' style={{padding:'0 20px', minWidth: '15vw', maxWidth: '15vw'}}>
      <div className='porject_name'>
        <a href={project.url}>{project.title}</a>
      </div>
      {project.desc}
      <div style={{lineHeight:'30px'}}><b>Stack:</b> {project.stack.map(stack => <Tag key={stack} color={maps[stack]}>{stack}</Tag>)}</div>
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