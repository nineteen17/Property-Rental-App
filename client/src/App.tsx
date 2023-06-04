import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();
import Header from "./components/shared/header/Header";
import Footer from "./components/shared/footer/Footer";
import Home from "./components/routed/home/Home";
import { Routes, Route } from "react-router-dom";
import Login from "./components/routed/login/Login";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}

export default App;
