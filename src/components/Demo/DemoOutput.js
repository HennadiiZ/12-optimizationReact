import React from 'react';
import MyParagrap from './MyParagraph';

const DemoOutput = (props) => {
  // return <p>This is New !!!</p>;
  console.log('DemoOutput RUNNING');
  return <MyParagrap>{props.show ? 'This is New' : ''}</MyParagrap>;
};

export default React.memo(DemoOutput);