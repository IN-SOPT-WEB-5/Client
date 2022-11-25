import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

function severMovieData() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchMovieData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`http://107.21.205.44:3000/movie`);
        setData(response.data);
        console.log(response.data.data);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchMovieData();
  }, []);

  if (loading) {
    return <div>로딩중</div>;
  }

  if (!data) {
    return null;
  }

  return <div>severMovieData</div>;
}
return (
  <>
    <div data={data} />
  </>
);

export default severMovieData;
