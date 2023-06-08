import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Header from "./components/shared/header/Header";
// import Footer from "./components/shared/footer/Footer";
import Home from "./components/routed/home/Home";

import Login from "./components/routed/login/Login";
import Register from "./components/routed/register/Register";
import Watchlist from "./components/routed/watchlist/Watchlist";
import CurrentListings from "./pages/CurrentListings";
import ListingsId from "./components/routed/listings-id/ListingsId";
import Application from "./pages/Application";
import ApplicationNext from "./pages/ApplicationNext";
import Booking from "./pages/Booking";
import SuccessApplyPage from "./pages/SuccessApplyPage";
import SuccessBookingPage from "./pages/SuccessBookingPage";
import RegisterSuccess from "./components/routed/register-success/RegisterSuccess";



function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />          
          <Route path="/watchlist" element={<Watchlist />} />
          <Route path="/rent" element={<CurrentListings />} />
          <Route path="/properties/:id" element={<ListingsId /> } />
          <Route path="/apply/:id" element={<Application />} />
          <Route path="/apply-next/:id" element={<ApplicationNext />} />
          <Route path="/booking/:id" element={<Booking />} />
          <Route path="/apply/success/:id" element={<SuccessApplyPage />} />
          <Route path="/booking/success/:id" element={<SuccessBookingPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/register-success" element={<RegisterSuccess />} />
        </Routes>
      </div>
    </QueryClientProvider>
  );
}

export default App;
