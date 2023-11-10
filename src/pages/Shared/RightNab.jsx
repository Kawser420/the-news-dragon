import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGithub, FaGoogle, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import Qzone from './Q-Zone/QZone';

const RightNab = () => {
    return (
        <div>
            <h3 className='mt-4'>Login With</h3>
            <div className='d-block'>
                <Button variant="primary" className='mb-2'>< FaGoogle /> Login Google</Button>
                <Button variant="secondary"><FaGithub></FaGithub> Login Github</Button>
            </div>
            <div className="mt-3">
                <h3>Find Us On</h3>
                <ListGroup className='mx-auto'>
                    <ListGroup.Item><FaFacebook>facebook</FaFacebook></ListGroup.Item>
                    <ListGroup.Item><FaTwitter>twitter</FaTwitter></ListGroup.Item>
                    <ListGroup.Item><FaInstagram>instagram</FaInstagram></ListGroup.Item>
                </ListGroup>
            </div>
            <Qzone></Qzone>
        </div>
    );
};

export default RightNab;