import getSongsByTitle from "@/actions/getSongsByTitle";
import Header from "@/components/Header";
import SearchInput from "@/components/SearchInput";
import React from "react";

interface SearchProps {
  searchParams: {
    title: string;
  };
}

const Search = async ({ searchParams }: SearchProps) => {
  const songs = await getSongsByTitle(searchParams.title);
  return (
    <div>
      <Header className="from-bg-neutral-900">
        <h1 className="text-white text-3xl font-semibold">search</h1>
        <SearchInput />
      </Header>
    </div>
  );
};

export default Search;
