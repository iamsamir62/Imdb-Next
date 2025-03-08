import Results from "@/components/Results";

export default async function SearchPage({ params }) {
  // Destructure and ensure the searchTerm is defined
  const { searchTerm } = params;

  // Check if searchTerm is not undefined and trim it
  if (!searchTerm) {
    return <h1 className="text-center pt-6">Search term is missing!</h1>;
  }

  const formattedSearchTerm = searchTerm.trim(); // Trim to remove extra spaces
  const encodedSearchTerm = encodeURIComponent(formattedSearchTerm); // Encode special characters

  // Log the search term to check what is being sent to the API
  console.log("Search Term:", encodedSearchTerm);

  // Fetch data from API based on search term
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${encodedSearchTerm}&language=en-US&page=1&include_adult=false`
  );

  const data = await res.json();

  // Log API response to see if results are being returned
  console.log("API Response:", data);

  const results = data.results;

  return (
    <div>
      {/* Render No results found message if results are empty */}
      {results && results.length === 0 && (
        <h1 className="text-center pt-6">No results found</h1>
      )}

      {/* Render Results if there are any */}
      {results && results.length > 0 && <Results results={results} />}
    </div>
  );
}
