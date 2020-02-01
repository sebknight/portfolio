import React from 'react';
import viszla from '../../assets/viszla.jpg';
import Image from '../Image';
import Subsubheading from '../Subsubheading';
import Paragraph from '../Paragraph';
import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column wrap;
  height: auto;
  width: 80%;
  margin: 0 auto;
  margin-top: 40px; 
`

const Work = () => {

  return (
    <Wrapper>
      <div>
        <Subsubheading content="My work" />
      </div>
        <Image src={viszla} height="250px" width="250px" />
      <div>
        <Paragraph content="I love to laugh and have fun" />
      </div>
    </Wrapper>
  );
}

export default Work;