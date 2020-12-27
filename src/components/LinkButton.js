import React , {useState, useEffect} from 'react';
import {Button} from 'react-bootstrap'
import{Icon} from '@iconify/react'
import githubIcon from '@iconify/icons-simple-icons/github'
import linkedinIcon from '@iconify/icons-simple-icons/linkedin'
import mediumIcon from '@iconify/icons-simple-icons/medium'
import './WidthLimit.scss'
const LinkButton = (props) => {
    const [icon, setIcon] = useState('')
    useEffect(()=>{
        if(props.link.includes('medium')){
            setIcon(<Icon icon={mediumIcon} />);
        } else if (props.link.includes('github')){
            setIcon(<Icon icon={githubIcon} />);
        } else if (props.link.includes('linkedin')){
            setIcon(<Icon icon={linkedinIcon} />);
        }
    }, [props])
   return <Button 
            variant="outline-light" 
            href={props.link} 
            className="mb-3 max-button" 
            size="lg" 
            block
          >
              {icon} 

   </Button>;
};

export default LinkButton;