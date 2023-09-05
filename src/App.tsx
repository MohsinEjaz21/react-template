
import { Wrapper } from '@src/components/Wrapper';
import { HomePage } from '@src/pages/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Wrapper>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
