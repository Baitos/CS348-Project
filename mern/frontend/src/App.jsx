import { Box, useColorModeValue } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import CreatePage from './pages/CreatePage';
import CreatePageGym from './pages/CreatePageGym';
import CreatePageTrainer from './pages/CreatePageTrainer';
import ViewPage from './pages/ViewPage';
import ViewPageGym from './pages/ViewPageGym';
import ViewPageTrainer from './pages/ViewPageTrainer';
import HomePage from './pages/HomePage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import UserHomePage from './pages/UserHomePage';
import UserModifyGyms from './pages/UserModifyGyms';
import UserEditInfo from './pages/UserEditInfo';
import UserAddGyms from './pages/UserAddGyms';
import UserEditGyms from './pages/UserEditGyms';
import UserSearchPage from './pages/UserSearchPage';
import UserEditSpecificGym from './pages/UserEditSpecificGym';
import Navbar from './components/Navbar';

function App() {
  return (
    <Box minH={"100vh"} bg={useColorModeValue("grey.100", "gray.900")}>
      <Navbar />
      <Routes> 
        <Route path="/" element={<HomePage />} />
        <Route path="/user" element={<UserHomePage />} />
        <Route path="/user/search" element={<UserSearchPage />} />
        <Route path="/user/modify/add" element={<UserAddGyms />} />
        <Route path="/user/modify/edit" element={<UserEditGyms />} />
        <Route path="/user/modify/edit/gym" element={<UserEditSpecificGym />} />
        <Route path="/user/modify" element={<UserModifyGyms />} />
        <Route path="/user/edit" element={<UserEditInfo />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
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
