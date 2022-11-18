import MovieInfo from './MovieInfo';
import styled from 'styled-components';
import allMovieIcon from '../../../assets/allMovieIcon.svg';
import scheduleIcon from '../../../assets/scheduleIcon.svg';
import fastTicketing from '../../../assets/fastTicketingIcon.svg';

const Root = styled.section`
  background-color: ${({ theme }) => theme.colors.gray1};
  padding-top: 5.7rem;
  padding: 5.7rem 0 5.4rem;
`;

const MovieCategoryBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MovieCategory = styled.article`
  color: ${({ theme, isSelected }) => (isSelected ? theme.colors.white : theme.colors.gray3)};
  font: ${({ theme }) => theme.fonts.headline3};
`;

const DivisionBar = styled.span`
  width: 0.1rem;

  background-color: ${({ theme }) => theme.colors.gray3};
  height: 2.4rem;

  margin: 0 1.4rem;
`;

const MovieInfoWrapper = styled.section`
  display: flex;
  justify-content: center;
  /* justify-content: space-around; */

  padding: 0 9rem;
  margin-top: 4.5rem;
`;

const SearchWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 3rem;
  padding: 2.4rem 0;
`;

const SearchBox = styled.article`
  display: flex;
  align-items: center;

  margin: 0 6.6rem;
`;

const SearchImage = styled.img`
  margin-right: 2rem;
`;

const SearchLink = styled.strong`
  color: ${({ theme }) => theme.colors.white};
`;

export default function BoxOffice() {
  return (
    <Root>
      <MovieCategoryBox>
        <MovieCategory isSelected={true}>박스오피스</MovieCategory>
        <DivisionBar></DivisionBar>
        <MovieCategory isSelected={false}>상영예정작</MovieCategory>
      </MovieCategoryBox>
      <MovieInfoWrapper>
        <MovieInfo isRepresent={true} />
        <MovieInfo isRepresent={false} />
        <MovieInfo isRepresent={false} />
        <MovieInfo isRepresent={false} />
      </MovieInfoWrapper>
      <SearchWrapper>
        <SearchBox>
          <SearchImage src={allMovieIcon} alt="search-link" />
          <SearchLink>상영시간표</SearchLink>
        </SearchBox>
        <DivisionBar />
        <SearchBox>
          <SearchImage src={scheduleIcon} alt="search-link" />
          <SearchLink>빠른예매</SearchLink>
        </SearchBox>
        <DivisionBar />
        <SearchBox>
          <SearchImage src={fastTicketing} alt="search-link" />
          <SearchLink>영화전체보기</SearchLink>
        </SearchBox>
      </SearchWrapper>
    </Root>
  );
}
