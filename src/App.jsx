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

				{/* Country page - homepage */}
				<Route path="/" element={<CountryPage />} />

				{/* Province Page - perhaps a list of all provinces */}
				<Route path="/province" element={<ProvincePage />} />

				{/* List of ski mouintains within a chosen province */}
				<Route path="/province/:province" element={<MountainsPage />} />

				{/* Details of chosen mountain */}
				<Route path="/province/:province/:id" element={<MountainDetailsPage />} />

				{/* List of summarize forecast by province */}
				<Route path="/province/:province/forecast" element={<ForecastPage />} />

				{/* List of trail maps by province */}
				<Route path="/province/:province/trailmap" element={<TrailMapPage />} />

				{/* List of live feed cams by province*/}
				<Route path="/province/:province/cams" element={<LiveCamPage />} />


			</Routes>
			<Footer />
		</BrowserRouter>
  );
}

export default App;
