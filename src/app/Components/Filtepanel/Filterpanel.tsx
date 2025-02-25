
"use client";
import { useState, useEffect } from "react";
import { categoryQuery } from "sanity/lib/fetch";

interface FilterPanelProps {
  onFilter: (category: string | null) => void;
}

const FilterPanel: React.FC<FilterPanelProps> = ({ onFilter }) => {
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await categoryQuery();
        setCategories(["All", ...data.map((category: any) => category.name)]);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  const handleFilterChange = (category: string) => {
    setSelectedCategory(category === "All" ? null : category);
    onFilter(category === "All" ? null : category);
  };

  return (
    <div className="w-full bg-white p-4 shadow rounded">
      <div className="flex items-center gap-3">
        <span className="font-medium">Filter by Category:</span>
        <select
          className="border rounded px-3 py-2"
          onChange={(e) => handleFilterChange(e.target.value)}
          value={selectedCategory || "All"}
        >
          {categories.length > 0 ? (
            categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))
          ) : (
            <option>Loading...</option>
          )}
        </select>
      </div>
    </div>
  );
};

export default FilterPanel;
