import Image from 'next/image';
import React from 'react';
import searchIcon from 'public/assets/svg/search-icon.svg';
import useTransformed from 'hooks/useTransformed';
import StyledSearchBox from './SearchBox.styled';

const SearchBox: React.FC = () => {
  const [isTransformed, setTransformed] = useTransformed();

  const handleChange = (e: { target: HTMLInputElement }) => {
    console.log(e.target.value);
    if (!isTransformed) setTransformed(true);
    if (isTransformed && e.target.value === '') setTransformed(false);
  };

  return (
    <StyledSearchBox className={`search${isTransformed ? ' transformed' : ''}`}>
      <form>
        <label htmlFor="phrase">
          <span className="search__label" aria-hidden="false">
            Wyszukaj termin
          </span>
          <input
            type="text"
            placeholder="wyszukaj termin"
            className={`search__input${isTransformed ? ' transformed' : ''}`}
            name="phrase"
            id="phrase"
            onChange={(e) => handleChange(e)}
            autoComplete="off"
          />
        </label>
        <button type="submit" className="search__icon" aria-label="szukaj">
          <Image src={searchIcon} alt="" />
        </button>
      </form>
    </StyledSearchBox>
  );
};

export default SearchBox;
