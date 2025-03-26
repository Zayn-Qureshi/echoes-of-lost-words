import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import LostManuscriptsPage from "./pages/LostManuscripts";
import ForgottenAuthorsPage from "./pages/ForgottenAuthors";
import ShareStoriesPage from "./pages/ShareStories";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="min-h-screen">
          <Navbar />
          <main className="pt-20">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/lost-manuscripts" element={<LostManuscriptsPage />} />
              <Route path="/forgotten-authors" element={<ForgottenAuthorsPage />} />
              <Route path="/share-stories" element={<ShareStoriesPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
