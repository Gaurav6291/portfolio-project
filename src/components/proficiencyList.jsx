import { v4 as uuidv4 } from 'uuid';

import Html from '../html5.png';
import Css from '../css3.png';
import Express from '../express.png';
import Github from '../github.png';
import Js from '../JavaScript.png';
import MaterialUI from '../material-ui.png';
import Mongo from '../mongodb.png';
import Node from '../node.jpg';
import Npm from '../npm.png';
import React from '../React.png';
import Redux from '../redux.png';
import Styled from '../styledComponents.png'
// import CoinTrackerImg from '../images/cointracker.jpg';
// import CavinImg from '../images/cavinimg.jpg';

const Frontend = [
  {
    id: uuidv4(),
    name: 'Html',
   
    img: Html,
    
  },
  {
    id: uuidv4(),
    name: 'Css',
 
    img: Css,
   
  },
  {
    id: uuidv4(),
    name: 'JavaScript',
 
    img: Js,
   
  },
  {
    id: uuidv4(),
    name: 'React',
 
    img: React,
   
  },
  {
    id: uuidv4(),
    name: 'Redux',
 
    img: Redux,
   
  },
  {
    id: uuidv4(),
    name: 'NPM',
 
    img: Npm,
   
  },
  {
    id: uuidv4(),
    name: 'Material-ui',
 
    img: MaterialUI,
   
  },
  {
    id: uuidv4(),
    name: 'Github',
 
    img: Github,
   
  },
  {
    id: uuidv4(),
    name: 'Styled',
 
    img: Styled,
   
  },
]
const Backend = [
  {
    id: uuidv4(),
    name: 'Express',
   
    img: Express,
    
  },
  {
    id: uuidv4(),
    name: 'Mongodb',
 
    img: Mongo,
   
  },
  {
    id: uuidv4(),
    name: 'Nodejs',
 
    img: Node,
   
  },
]
//   {
//     id: uuidv4(),
//     name: "Movie Search Engine",
//     desc:
//       'A portfolio for Cavin jr. A artist from New york city. The portfolio is made using ReactJs and GatsbyJs.',
//     img: CavinImg,
//   },
//   {
//     id: uuidv4(),
//     name: 'Tracking Soft',
//     desc:
//       'A tracking website that will show the performance of the website. Also you will get some useful advice to improve the performance.',
//     img: ProjectImg,
//   },


export { Frontend, Backend };