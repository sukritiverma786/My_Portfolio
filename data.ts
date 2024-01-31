
import { IProject, IService, Iskill } from './type'
import { RiComputerLine } from 'react-icons/ri'
import { AiOutlineAntDesign } from 'react-icons/ai'
import { FaServer } from 'react-icons/fa'
import { AiOutlineApi } from 'react-icons/ai'
import { MdDeveloperMode } from  'react-icons/md'
import {BsCircleFill} from 'react-icons/bs'



export const services:IService[] =[
    {
        Icon: RiComputerLine,
        title:'frontend Dev',
        about:'I can build a beautiful and scaletble spa using <b> html </b> and <b> React.js</b>',
        
    },


    {
        Icon: FaServer,
        title:'Backend Devlopment',
        about:
        'handle database, server, upi using <b>&other popular frameworks',
        
    },

    {
        Icon: AiOutlineApi,
        title:'API Devlopment',
        about:
        'I can develop robust Rest Api using <b> django- rest-api <b> & </b> and <b> Node Api</b>',
        
    },

    {
        Icon: MdDeveloperMode,
        title:'competitive coder',
        about:
        'a daily problem solver in<MackerRank and </b> Lest Code<b>',
        
    },
    {
        Icon: AiOutlineAntDesign,
        title:'API Devlopment',
        about:
        'I can develop robust Rest Api using <b> django- rest-api <b> & </b> and <b> Node Api</b>',
        
    },

    {
        Icon: RiComputerLine,
        title:'Whatever',
        about:'I can build a beytiful and scaletble spa using <b> html </b> and <b> React.js</b>',
        
    },
    
]


export const languages:Iskill[]=[
    {
        name:'figma',
        level:'85%',
        Icon:BsCircleFill
    },

    {
        name:'photoshop',
        level:'45%',
        Icon:BsCircleFill
    },

    {
        name:'Illustrator',
        level:'60%',
        Icon:BsCircleFill
    },

    {
        name:'Framer',
        level:'45%',
        Icon:BsCircleFill
    },

    {
        name:'Python',
        level:'45%',
        Icon:BsCircleFill
    },

    {
        name:'Python',
        level:'80%',
        Icon:BsCircleFill
    },

]


export const tools:Iskill[]=[
    {
        name:'figma',
        level:'85%',
        Icon:BsCircleFill
    },

    {
        name:'photoshop',
        level:'45%',
        Icon:BsCircleFill
    },

    {
        name:'Illustrator',
        level:'60%',
        Icon:BsCircleFill
    },

    {
        name:'Framer',
        level:'45%',
        Icon:BsCircleFill
    },
    
]

export const projects:IProject[]=[
    {
        name:"COVID Tracker",
        description:"This app shows a statistical view about corona virus over the world",
        image_path:"/image/covid.jpg",
        deployed_url:"https://covid-19-tracker-by-sumit.web.app/",
        github_url:"https://github.com/dey-sumit/covid-19-tracker",
        category:["react"],
        key_techs:["React","Chart.js","Material UI"],
    },
    {
        name:"Algorithm visualizer",
        description:"An web app which shows how an algorithm (path finding or sorting)works with cool animation",
        image_path:"/image/algoVisual.png",
        deployed_url:"https://visual-algorithm.web.app/",
        github_url:"https://github.com/Dey-sumit/algorithm-visualizer",
        category:["react"],
        key_techs:["React","firebase","Framer Motion"],
    },
    {
        name:"Dev Talks",
        description:"Social Media app for developers who can share project,create posts, etc...",
        image_path:"/image/dev.jpg",
        deployed_url:"https://dev-talks.herokuapp.com/",
        github_url:"https://github.com/Dey-sumit/Dev-talks",
        category:["node","mongo","react"],
        key_techs:["React","Redux","Node","Express","Mongo"],
    },
    {
        name:"Realtime Chat App",
        description:"Basic Realtime Chat App where one can create a room can talk to each other",
        image_path:"/image/chatapp.jpg",
        deployed_url:"https://sumit-chat.netlify.app/",
        github_url:"https://github.com/Dey-Sumit/chat-app-socket.io-react-node",
        category:["node","react"],
        key_techs:["React","Node","Express","Socket","Bootstrap"], 
    },
    {
        name:"Tweeter clone",
        description:"Basic Realtime Chat App where one can create a room can talk to each other",
        image_path:"/image/tweetme.jpg",
        deployed_url:"https://github.com/Dey-Sumit/tweetme/",
        github_url:"https://github.com/Dey-Sumit/chat-app-socket.io-react-node",
        category:["django","react"],
        key_techs:["React","Django","Django REST API"], 
    },
    {
        name:"YouTube suing Youtube",
        description:'Full(almost) Functional YouTube replica where one can login with his/her youtube account to enjoy "not-YouTube". User can like a video,comment on a video & Much More', 
        image_path:"/image/YoutubeClone.jpg",
        deployed_url:"https://not-utube.web.app",
        github_url:"https://github.com/Dey-Sumit/youtube-clone-tutorial-up",
        category:["express"],
        key_techs:["React", "Redux","Firebase Auth","YouTube API","Sass","Bootstrap"],
    },
    {
        name:"Football App",
        description:"Basic Realtime Chat App where one can create a room can talk to each other",
        image_path:"/image/football.jpg",
        deployed_url:"https://o-my-goal.web.app/",
        github_url:"https://github.com/Dey-Sumit/football-app",
        category:["react"],
        key_techs:["React","Redux","firebase Auth" ,"API","Sass","Bootstrap"], 
    },
]