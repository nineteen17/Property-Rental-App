import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();
import Header from "./components/shared/header/Header";
import Footer from "./components/shared/footer/Footer";
import Home from "./components/routed/home/Home";
import { Routes, Route } from "react-router-dom";
import CurrentListings from "./pages/CurrentListings";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rent" element={<CurrentListings />} />
        </Routes>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
export default App;
