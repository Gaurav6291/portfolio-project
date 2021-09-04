import { v4 as uuidv4 } from 'uuid';
import GlassdoorP from '../glassdoorProject1.png';
import upGradP from '../upGradProject.png';
import HaynnisP from '../hyannisProject.png';

// import CoinTrackerImg from '../images/cointracker.jpg';
// import CavinImg from '../images/cavinimg.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'upGrad - clone',
    desc:
      'An application to track your all data from one place. I developed the website and the mobile app',
    img: GlassdoorP,
    href: "https://github.com/Gaurav6291/UpGrad",
  },
  {
    id: uuidv4(),
    name: 'Glassdoor - clone',
    desc:
      'An app to help people to get an overview of how they can make the city beautiful.',
    img: upGradP,
    href: "https://github.com/chandan1499/Project-glassdoor",
  },
  {
    id: uuidv4(),
    name: 'Haynnis Plaza Hotel - clone',
    desc:
      'Using this app you can track any e coin. Also you will get a good advise about investment form the professional',
    img: HaynnisP,
    href: "https://github.com/vshubhams/Hyannis-Plaza",
  },
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
];

export default projects;