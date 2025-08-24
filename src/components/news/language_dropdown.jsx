import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router";
import Select from "react-select";

export default function LanguageDropdown() {
  const languages = [
    { value: "hi", label: "Hindi" },
    { value: "bn", label: "Bengali" },
    { value: "ta", label: "Tamil" },
    { value: "te", label: "Telugu" },
    { value: "ml", label: "Malayalam" },
    { value: "kn", label: "Kannada" },
    { value: "mr", label: "Marathi" },
    { value: "gu", label: "Gujarati" },
    { value: "pa", label: "Punjabi" },
    { value: "or", label: "Odia" },
    { value: "as", label: "Assamese" },
    { value: "ur", label: "Urdu" },
    { value: "en", label: "English (India)" },
  ];

  const [selected, setSelected] = useState([]);
  const [searchParams]=useSearchParams();
  const navigate=useNavigate();
  const query = searchParams.get("q") || "";
  const page = searchParams.get("page") || "";
  const categoriesQuery=searchParams.get("category")||"";
  const langQuery=searchParams.get("language")||"";

  useEffect(()=>{
    if(langQuery){
      const langArray=langQuery.split(",");
      const selectedLangs=languages.filter(lang=>langArray.includes(lang.value));
      setSelected(selectedLangs);

    }
  },[langQuery]);


  const handleChange = (selectedOptions) => {
    if (selectedOptions && selectedOptions.length >0 && selectedOptions.length <= 5) {
      setSelected(selectedOptions);
      // build category string
      const languagesQuery = selectedOptions.map(opt => opt.value).join(",");

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
        }${categoriesQuery ? `&category=${categoriesQuery}` : ""}`
      );
    }
  };

  return (
    <Select
      isMulti
      options={languages}
      value={selected}
      onChange={handleChange}
      placeholder="Select a language"
      className="basic-single"
      classNamePrefix="select"
    />
  );
}
