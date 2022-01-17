import bg from 'public/assets/images/bg.jpg';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  place-content: center;
`;

const App: React.FC = () => {
  console.log(document);

  return (
    <Wrapper>
      <h1>Hello from podval</h1>
      <img src={bg} alt='' width={300} />
    </Wrapper>
  );
};

export default App;
