export const Fetch_n = async ({ request }) => {
  try {
    console.log(request);
    const url = new URL(request.url);
    const query = url.searchParams.get("q") || "";
    const load_more = url.searchParams.get("page") || "";
    const category = url.searchParams.get("category") || "";
    const language=url.searchParams.get("language")||"";
    const api_url = `https://newsdata.io/api/1/latest?apikey=${import.meta.env.VITE_API_KEY}&country=in${
  query ? `&q=${query}` : ""
}${load_more ? `&page=${load_more}` : ""}${
  category.length > 0 ? `&category=${category}` : ""
}${language.length > 0 ? `&language=${language}` : ""}`;


    console.log("API URL:", api_url);

    const res = await fetch(api_url);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("Error fetching news:", error.message);
    return null;
  }
};
