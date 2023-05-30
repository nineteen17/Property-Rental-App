import { QueryClient, QueryClientProvider } from "react-query";
import Hello from "./components/Hello";
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <>
      <Hello />
      </>
    </QueryClientProvider>
  );
}

export default App;
