import React, {Component} from 'react';
import { motion } from "framer-motion"

import Layout from './Layout';


class Home extends Component {

    componentDidMount(){
      document.body.style.backgroundImage = `url("https://images.squarespace-cdn.com/content/56b7af6e4d088edd8e4612ea/1550109262629-Y7ZJPDS7Z2D8RP9E0PAK/317968_463440357053079_1870862263_n.jpg?content-type=image%2Fjpeg")`;
    }

    render(){
    return <motion.div animate="enter" exit="exit">
      <Layout {...this.props}/>
      </motion.div>;
  }
}  
  


export default Home;