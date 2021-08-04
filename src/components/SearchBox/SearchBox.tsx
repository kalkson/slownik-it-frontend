import Image from 'next/image';
import React from 'react';
import searchIcon from 'public/assets/svg/search-icon.svg';
import StyledSearchBox from './SearchBox.styled';

const SearchBox: React.FC = () => (
  <StyledSearchBox className="search">
    <form>
      <label htmlFor="phrase">
        <span className="search__label" aria-hidden="false">
          Wyszukaj termin
        </span>
        <input
          type="text"
          placeholder="wyszukaj termin"
          className="search__input"
          name="phrase"
          id="phrase"
        />
      </label>
      <button type="submit" className="search__icon" aria-label="szukaj">
        <Image src={searchIcon} alt="" />
      </button>
    </form>
  </StyledSearchBox>
);

export default SearchBox;
