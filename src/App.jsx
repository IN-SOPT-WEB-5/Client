//import Router from './Router';
import GeneralNav from './@components/@common/GeneralNav';
import styled from 'styled-components';

function App() {
  return (
    <div>
      <GeneralNav></GeneralNav>
      <ScrollHelp></ScrollHelp>
    </div>
  );
}

export default App;

const ScrollHelp = styled.div`
  width: 300rem;
  height: 300rem;
`;
