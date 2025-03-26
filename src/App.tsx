import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import LostManuscriptsPage from "./pages/LostManuscripts";
import ControversialAuthorsPage from "./pages/ControversialAuthors";
import ShareStoriesPage from "./pages/ShareStories";
import AboutPage from "./pages/About";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="min-h-screen bg-[var(--parchment)]">
          <Navbar />
          <main className="pt-[calc(var(--navbar-height,3.5rem)+1rem)] min-h-[calc(100vh-var(--navbar-height,3.5rem))]">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/lost-manuscripts" element={<LostManuscriptsPage />} />
              <Route path="/controversial-authors" element={<ControversialAuthorsPage />} />
              <Route path="/share-stories" element={<ShareStoriesPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
