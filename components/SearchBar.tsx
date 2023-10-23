"use client";

import { scrapeAndStoreProduct } from "@/lib/actions";
import { useState } from "react";

const isValidAmazonProductLink = (link: string) => {
  try {
    const parsedUrl = new URL(link);
    const hostName = parsedUrl.hostname;

    if (
      hostName.includes("amazon.com") ||
      hostName.includes("amazon.") ||
      hostName.endsWith("amazon")
    ) {
      return true;
    }
  } catch (error) {
    return false;
  }

  return false;
};

const SearchBar = () => {
  const [searchPrompt, setSearchPrompt] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isValidLink = isValidAmazonProductLink(searchPrompt);

    alert(isValidLink ? "Valid Link" : "Invalid Link");

    if (!isValidLink) {
      return alert("Please provide a valid Amazon product link");
    }

    try {
      setLoading(true);

      const product = await scrapeAndStoreProduct(searchPrompt);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="flex flex-wrap gap-4 mt-12" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Product Link"
        className="searchbar-input"
        value={searchPrompt}
        onChange={(e) => setSearchPrompt(e.target.value)}
      />
      <button
        className="searchbar-btn"
        type="submit"
        disabled={searchPrompt === ""}
      >
        {loading ? "Searching..." : "Search"}
      </button>
    </form>
  );
};

export default SearchBar;
