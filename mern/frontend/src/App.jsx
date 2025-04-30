import { Box, useColorModeValue } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import CreatePage from './pages/CreatePage';
import CreatePageGym from './pages/CreatePageGym';
import CreatePageTrainer from './pages/CreatePageTrainer';
import ViewPage from './pages/ViewPage';
import ViewPageGym from './pages/ViewPageGym';
import ViewPageTrainer from './pages/ViewPageTrainer';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';

function App() {
  return (
    <Box minH={"100vh"} bg={useColorModeValue("grey.100", "gray.900")}>
      <Navbar />
      <Routes> 
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="create/gym" element={<CreatePageGym />} />
        <Route path="create/trainer" element={<CreatePageTrainer />} />
        <Route path="/view" element={<ViewPage />} />
        <Route path="/view/gym" element={<ViewPageGym />} />
        <Route path="/view/trainer" element={<ViewPageTrainer />} />
      </Routes>
    </Box>
  );
}

export default App;
