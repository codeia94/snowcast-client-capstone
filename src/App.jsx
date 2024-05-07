import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import CountryPage from './pages/CountryPage/CountryPage';
import ProvincePage from './pages/ProvincePage/ProvincePage';
import MountainsPage from './pages/MountainsPage/MountainsPage';
import MountainDetailsPage from './pages/MountainDetailsPage/MountainDetailsPage';
import TrailMapPage from './pages/TrailMapPage/TrailMapPage';
import LiveCamPage from './pages/LiveCamPage/LiveCamPage';
import ForecastPage from './pages/ForecastPage/ForecastPage';

function App() {
  return (
    <BrowserRouter>
			<Header />
			<Routes>
				
				<Route path="/" element={<CountryPage />} />

				<Route path="/province" element={<ProvincePage />} />

				<Route path="/province/:province" element={<MountainsPage />} />

				<Route path="/province/:province/:id" element={<MountainDetailsPage />} />

				<Route path="/province/:province/forecast" element={<ForecastPage />} />

				<Route path="/province/:province/trailmap" element={<TrailMapPage />} />

				<Route path="/province/:province/cams" element={<LiveCamPage />} />


			</Routes>
			<Footer />
		</BrowserRouter>
  );
}

export default App;
