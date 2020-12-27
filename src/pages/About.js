import React from 'react';
import {ListGroup, Button, Image} from 'react-bootstrap'
import '../components/WidthLimit.scss'
const About = () => {
    return(
        <ListGroup>
            <div className="mx-lg-5 mr-3 ml-3 mb-5 d-flex flex-column align-items-center text-center">
            <Image 
              alt="logo" 
              width="120" 
              height="150" 
              src={`${process.env.PUBLIC_URL}/HamidouBallo1.JPG`}
              className="mb-4"
              rounded
              />
              <h4 className="text-white mb-4">
                  <strong>About Me</strong>
              </h4>
              <h5 className="text-white mb-5 max-button">
                  I am an aspiring software engineer currently looking for opportunities to perfect my craft.
                  In my free time I play soccer and go to the gym. Click the "My Resume" button bellow
                  to know more about me.  
              </h5>
              <Button variant="outline-light" 
                      href={`${process.env.PUBLIC_URL}Portfolio Site Res.pdf`}
                      size="ld"
                      download
                      >
                          My Resume
              </Button>
            </div>
        </ListGroup>
    );
};

export default About;