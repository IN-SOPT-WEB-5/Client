import { React } from 'react';
import MovieCard from './MovieCard';
import TopBtn from './TopBtn';
import { movieData } from '../../constants/movieData';
import styled from 'styled-components';
import AddMovieBtn from '../../assets/AddMovieBtn.png';
// import MovieCard1st from './MovieCard1st';

function MovieSelect() {
  return (
    <ItemsRepeat>
      {/* {movieData.map((movieData) => (
        <MovieCard movieData={movieData} key={movieData.id} />
      ))} */}
      {movieData.map((movie) =>
        movie.isFirst ? (
          // <MovieCard1st movieData={movie} key={movie.id} />
          <div>
            <div>
              <PosterImg src={movie.image} />
            </div>
            <ContentsHead>
              <AgeImg src={movie.ageImage} />
              <Title>{movie.title}</Title>
            </ContentsHead>
            <ContentsBody>
              <Date>개봉일 {movie.openingDate}</Date>
              <Rate>예매율 {movie.ticketingRate} %</Rate>
            </ContentsBody>
            <ContentsFooter>
              <BtnImg src={movie.ticketingBtn1st} />
              <CinemaBtnImg src={movie.cinemaBtn} />
              <HeartBtnImg src={movie.heartBtn} />
            </ContentsFooter>
          </div>
        ) : (
          <MovieCard movieData={movie} key={movie.id} />
        ),
      )}

      <AddMovieBtnImg src={AddMovieBtn} />
      <TopBtn />
    </ItemsRepeat>
  );
}

export default MovieSelect;

const AddMovieBtnImg = styled.img`
  margin-top: 3.2rem;
  margin-bottom: 6rem;
`;

const ItemsRepeat = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 110rem;
  position: relative;
`;

const ContentsFooter = styled.div`
  margin-top: 0.8rem;
`;

const CinemaBtnImg = styled.img`
  margin-left: 1.1rem;
`;

const HeartBtnImg = styled.img`
  margin-left: 1.1rem;
`;

const BtnImg = styled.img``;

const Rate = styled.span`
  margin-left: 1.1rem;
  font: ${({ theme }) => theme.fonts.body2};
`;

const Date = styled.span`
  border-right: 0.1rem solid ${({ theme }) => theme.colors.gray4};
  padding-right: 1.1rem;
  font: ${({ theme }) => theme.fonts.body2};
`;

const ContentsBody = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.4rem;
`;

const ContentsHead = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1.6rem;
`;

const Title = styled.span`
  color: ${({ theme }) => theme.colors.gray1};
  font: ${({ theme }) => theme.fonts.headline3};
  margin-left: 1.2rem;
`;

const AgeImg = styled.img``;

const PosterImg = styled.img`
  width: 23.5rem;
  height: 35.2rem;
  margin-top: 2.1rem;
`;
