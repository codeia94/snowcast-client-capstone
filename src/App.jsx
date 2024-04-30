import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ProvincePage from './pages/ProvincePage/ProvincePage';
import MountainsPage from './pages/MountainsPage/MountainsPage';
import MountainDetailsPage from './pages/MountainDetailsPage/MountainDetailsPage';

function App() {
  return (
    <BrowserRouter>
			<Header />
			<Routes>

				{/* Province Page - perhaps a list of all provinces */}
				<Route path="/province" element={<ProvincePage />} />

				{/* List of ski mouintains within a chosen province */}
				<Route path="/province/:province" element={<MountainsPage />} />

				{/* Details of chosen mountain */}
				<Route path="/province/:province/:id" element={<MountainDetailsPage />} />

			</Routes>
			<Footer />
		</BrowserRouter>
  );
}

export default App;
