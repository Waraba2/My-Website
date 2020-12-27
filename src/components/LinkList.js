import React from 'react';
import { ListGroup, Image } from 'react-bootstrap';
import LinkButton from './LinkButton'
const LinkList = () => {
    const links = [
        'https://github.com/Waraba2', 
        'https://www.linkedin.com/in/waraba2/',
        'https://medium.com/@ballowara',
    ];
    return (
    <ListGroup>
        <div className="mx-lg-5 mr-3 ml-3 d-flex flex-column align-items-center"> 
            <Image 
              alt="logo" 
              width="120" 
              height="150" 
              src={`${process.env.PUBLIC_URL}/HamidouBallo1.JPG`}
              className="mb-4"
              rounded
              />
              < h5 className="mb-4 text-white">Hamidou Ballo</h5>
              {links.map((link)=> (
                  <LinkButton key={link} link={link} />
              ))}
        </div>
        </ListGroup>
    );
};

export default LinkList;