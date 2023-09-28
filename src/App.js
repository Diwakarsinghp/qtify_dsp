import React, { useEffect, useState } from 'react'
import { HeroImg, NavBar, FAQAccordion, GridSection, Line, MusicPlayer, } from './components';
import { fetchNewAlbums, fetchTopAlbums, fetchSongs } from './api/api';

const App = () => {

  const [TopAlbumsData, setTopAlbumsData] = useState([]);
  const [NewAlbumData, setNewAlbumData] = useState([]);
  const [SongData, setSongData] = useState([]);

  const getDataTopAlbums = async () => {
    try {
      const res = await fetchTopAlbums();
      setTopAlbumsData(res);
    } catch (error) {
      console.error(error)
    }
  }

  const getDataNewAlbums = async () => {
    try {
      const res = await fetchNewAlbums();
      setNewAlbumData(res);
    } catch (error) {
      console.error(error)
    }
  }

  const getDataSongs = async () => {
    try {
      const res = await fetchSongs();
      setSongData(res);
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getDataTopAlbums();
    getDataNewAlbums();
    getDataSongs()
  }, [])

  return (
    <div>
      <NavBar data={TopAlbumsData} />
      <HeroImg/>
      <GridSection title={"Top Albums"} data={TopAlbumsData} type={"album"} />
      <GridSection title={"New Albums "} data={NewAlbumData} type={"album"} />
      <Line />
      <GridSection title={"Songs "} data={SongData} type={"song"} setDataSong={setSongData} />
      <FAQAccordion />
      <Line />
      <MusicPlayer data={TopAlbumsData} />
    </div>
  )
}

export default App;



