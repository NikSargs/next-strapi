import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import NewsList from "./pages/NewsList";
import NewsView from "./pages/NewsView";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <main className="main">
          <BrowserRouter>
            <Routes>

              <Route path="/newsview/:id" element={<NewsView />} />
              <Route path="/news" element={<NewsList />} />
              <Route exact path="*" element={<NewsList />} />
            </Routes>

          </BrowserRouter>
        </main>
      </div>
    </>
  );
}
export default App;