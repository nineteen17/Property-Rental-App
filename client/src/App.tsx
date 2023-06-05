import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Header from "./components/shared/header/Header";
import Footer from "./components/shared/footer/Footer";
import Home from "./components/routed/home/Home";

import Login from "./components/routed/login/Login";
//import Register from "./components/routed/register/Register";
import Watchlist from "./components/routed/watchlist/Watchlist";
import CurrentListings from "./pages/CurrentListings";

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
        </Routes>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}

export default App;
