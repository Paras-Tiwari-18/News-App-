import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Select from "react-select";

export default function Category_dropdown() {
  const categories = [
    "business", "crime", "domestic", "education", "entertainment",
    "environment", "food", "health", "lifestyle", "politics",
    "science", "sports", "technology", "top", "tourism", "world",
  ].map(cat => ({
    value: cat,
    label: cat.charAt(0).toUpperCase() + cat.slice(1),
  }));

  const [selected, setSelected] = useState([]);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  // read existing query params (so they don't get lost)
  const query = searchParams.get("q") || "";
  const page = searchParams.get("page") || "";
  const languagesQuery=searchParams.get("language")||"";
  const handleChange = (selectedOptions) => {
    if (selectedOptions && selectedOptions.length >0 && selectedOptions.length <= 5) {
      setSelected(selectedOptions);
      // build category string
      const categoriesQuery = selectedOptions.map(opt => opt.value).join(",");

      // rebuild the URL with preserved q and page params
      navigate(
        `/?q=${encodeURIComponent(query)}${
          page ? `&page=${page}` : ""
        }${categoriesQuery ? `&category=${categoriesQuery}` : ""}${languagesQuery ? `&language=${languagesQuery}` : ""}`
      );
    } else if (selectedOptions && selectedOptions.length > 5) {
      alert("You can select up to 5 categories only!");
    } else {
      setSelected([]); // when user clears selection
      navigate(
        `/?q=${encodeURIComponent(query)}${
          page ? `&page=${page}` : ""
        }${languagesQuery ? `&language=${languagesQuery}` : ""}`
      );
    }
  };

  return (
    <Select
      isMulti
      options={categories}
      value={selected}
      onChange={handleChange}
      placeholder="Browse news by category"
      className="basic-multi-select"
      classNamePrefix="select"
    />
  );
}
