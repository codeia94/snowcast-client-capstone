import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ProvincePage from './pages/ProvincePage/ProvincePage';

function App() {
  return (
    <BrowserRouter>
			<Header />
			<Routes>

				{/* Root redirects to default province path, or you can directly change it to provinces listing */}
				{/* <Route exact path="/" render={() => <Redirect to="/provinces" />} /> */}

				{/* Province Page - perhaps a list of all provinces */}
				<Route path="/province" element={<ProvincePage />} />

				{/* Specific Ski Resorts within a province */}
				{/* <Route path="/provinces/:provinceId/resorts" component={ResortsPage} /> */}

				{/* Specific Resort Details */}
				{/* <Route path="/provinces/:provinceId/resorts/:resortId" component={ResortDetailsPage} /> */}
			</Routes>
			<Footer />
		</BrowserRouter>
  );
}

export default App;
