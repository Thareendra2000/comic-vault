import React, { useEffect, useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import Comic_card from "./Comic_card";
import md5 from "crypto-js/md5";

const Comics = () => {
  const [searchTerm, setSearchTerm] = useState("Avengers");
  const [comics, setComics] = useState([]);

  const publicKey = process.env.REACT_APP_MARVEL_PUBLIC_KEY;
  const privateKey = process.env.REACT_APP_MARVEL_PRIVATE_KEY;

  const searchComics = async (keyword) => {
    const timestamp = new Date().getTime();
    const hash = md5(`${timestamp}${privateKey}${publicKey}`);

    const url = `https://gateway.marvel.com/v1/public/comics?apikey=${publicKey}&ts=${timestamp}&hash=${hash}&titleStartsWith=${keyword}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      const comicsData = data.data.results;
      setComics(comicsData);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    searchComics(searchTerm);
  }, [searchTerm]);

  const handleSearch = () => {
    searchComics(searchTerm);
  };

  return (
    <>
      <div className="search">
        <input
          type="text"
          placeholder="Search"
          className="search-bar"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="search-btn" onClick={handleSearch}>
          <FaMagnifyingGlass className="search-icon" />
        </button>
      </div>
      <div className="carousal">
        {comics.map((comic) => (
          <Comic_card
            key={comic.id}
            imgsrc={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
            title={comic.title}
          />
        ))}
      </div>
    </>
  );
};

export default Comics;
