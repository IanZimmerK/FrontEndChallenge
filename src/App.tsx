import { useState } from "react";
import Navbar from "./components/Navbar";
import Pagination from "./components/Pagination";
import Footer from "./components/Footer";
import FiltersSection from "./components/FiltersSection";
import "./components/styles/global.css";
import ProductCard from "./components/ProductCard";
import ImageProduct from "./assets/product-image.png";

// Mock product data for UI display
const mockProducts = Array.from({ length: 20 }).map((_, i) => ({
  id: i,
  name: "Blue Partyhat",
  oldPrice: 522.5,
  newPrice: 450,
  image: ImageProduct,
  description: "Unleash the power of your game with this exclusive item.",
}));

function App() {
  // State for filters and pagination
  const [game, setGame] = useState("All");
  const [search, setSearch] = useState("");
  const [price, setPrice] = useState("All");
  const [itemType, setItemType] = useState("All");
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="app">
      {/* Navigation bar at the top */}
      <Navbar />
      <main>
        <div className="content-container">
          {/* Filters section with search and dropdowns */}
          <FiltersSection
            search={search}
            onSearchChange={setSearch}
            game={game}
            onGameChange={setGame}
            price={price}
            onPriceChange={setPrice}
            itemType={itemType}
            onItemTypeChange={setItemType}
          />

          <div className="products-panel">
            {/* Header with count and sort control */}
            <div className="products-header">
              <p className="products-count">Showing 20 - from 125</p>
              <div className="sort-section">
                <div className="sort-icon-group">
                  <svg className="sort-icon" viewBox="0 0 24 24">
                    <path d="M3 17h6v-2H3v2zm0-6h12v-2H3v2zm0-6v2h18V5H3z" />
                  </svg>
                </div>

                <div className="sort-text-group">
                  <span className="sort-label">Sort By</span>
                  <span className="sort-value">Featured</span>
                </div>

                {/* Sort dropdown toggle */}
                <button
                  className={`sort-arrow-button ${isSortOpen ? "open" : ""}`}
                  onClick={() => setIsSortOpen((prev) => !prev)}
                >
                  <svg className="sort-arrow" viewBox="0 0 24 24">
                    <path d="M7 10l5 5 5-5H7z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Product grid display */}
            <div className="product-grid">
              {mockProducts.map((item) => (
                <ProductCard
                  key={item.id}
                  name={item.name}
                  newPrice={item.newPrice}
                  oldPrice={item.oldPrice}
                  image={item.image}
                  description={item.description}
                />
              ))}
            </div>

            {/* Pagination control */}
            <Pagination
              totalPages={11}
              currentPage={currentPage}
              onPageChange={(page) => setCurrentPage(page)}
            />
          </div>
        </div>
      </main>

      {/* Footer section */}
      <Footer />
    </div>
  );
}

export default App;
