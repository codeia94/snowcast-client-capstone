import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
			<Header />
			<Routes>

				{/* Countries */}
				<Route path="/" />

				{/* Provinces */}
        {/* <Route path="/countries/:countryId" /> */}

				{/* Ski Resorts */}
        {/* <Route path="/countries/:countryId/provinces/:provinceId" /> */}

				{/* Resort Details */}
        {/* <Route path="/countries/:countryId/provinces/:provinceId/resorts/:resortId" /> */}
			</Routes>
			<Footer />
		</BrowserRouter>
  );
}

export default App;
