import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { GiBroadsword, GiMoneyStack, GiFeather } from "react-icons/gi";
import "./styles/FiltersSection.css";


// Props definition
type Props = {
  search: string;
  onSearchChange: (value: string) => void;
  game: string;
  onGameChange: (value: string) => void;
  price: string;
  onPriceChange: (value: string) => void;
  itemType: string;
  onItemTypeChange: (value: string) => void;
};

// Filters section with select boxes and search input
 
export default function FiltersSection({
  search,
  onSearchChange,
  game,
  onGameChange,
  price,
  onPriceChange,
  itemType,
  onItemTypeChange,
}: Props) {

  // UI toggle states
  const [isPriceOpen, setIsPriceOpen] = useState(false);
  const [isItemOpen, setIsItemOpen] = useState(false);
  const [isGameOpen, setIsGameOpen] = useState(false);

  return (
    <section className="filters-section">
      {/* Section title */}
      <h1 className="filters-title">Condimentum consectetur</h1>

      {/* Filters row */}
      <div className="filter-controls">

        {/* Game Selector */}
        <div className="filter-select select-game">
          <GiBroadsword className="filter-icon" />
          <div className="filter-text-group">
            <span className="filter-value">Select a game</span>
          </div>
          <div className="filter-arrow-wrapper">
            <svg
              className={`filter-arrow ${isGameOpen ? "open" : ""}`}
              viewBox="0 0 24 24"
            >
              <path d="M7 10l5 5 5-5H7z" />
            </svg>
            <select
              value={game}
              onChange={(e) => onGameChange(e.target.value)}
              onClick={() => setIsGameOpen((prev) => !prev)}
              className="native-select"
            >
              <option value="All">All</option>
              <option value="RuneScape">RuneScape</option>
              <option value="World of Warcraft">World of Warcraft</option>
              <option value="League of Legends">League of Legends</option>
            </select>
          </div>
        </div>

        <div className="filter-duo">

          {/* Search input */}
          <div className="filter-box search-box">
            <FiSearch className="icon-left" />
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => onSearchChange(e.target.value)}
            />
          </div>

           {/* Price filter */}
          <div className="filter-select border-right">
            <GiMoneyStack className="filter-icon" />
            <div className="filter-text-group">
              <span className="filter-label">Price</span>
              <span className="filter-value">{price}</span>
            </div>
            <div className="filter-arrow-wrapper">
              <svg
                className={`filter-arrow ${isPriceOpen ? "open" : ""}`}
                viewBox="0 0 24 24"
              >
                <path d="M7 10l5 5 5-5H7z" />
              </svg>
              <select
                value={price}
                onChange={(e) => onPriceChange(e.target.value)}
                onClick={() => setIsPriceOpen((prev) => !prev)}
                className="native-select"
              >
                <option value="All">All</option>
                <option value="Low">Low</option>
                <option value="High">High</option>
              </select>
            </div>
          </div>

          {/* Item type filter */}
          <div className="filter-select">
            <GiFeather className="filter-icon" />
            <div className="filter-text-group">
              <span className="filter-label">Item Type</span>
              <span className="filter-value">{itemType}</span>
            </div>
            <div className="filter-arrow-wrapper">
              <svg
                className={`filter-arrow ${isItemOpen ? "open" : ""}`}
                viewBox="0 0 24 24"
              >
                <path d="M7 10l5 5 5-5H7z" />
              </svg>
              <select
                value={itemType}
                onChange={(e) => onItemTypeChange(e.target.value)}
                onClick={() => setIsItemOpen((prev) => !prev)}
                className="native-select"
              >
                <option value="All">All</option>
                <option value="Weapon">Weapon</option>
                <option value="Armor">Armor</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
