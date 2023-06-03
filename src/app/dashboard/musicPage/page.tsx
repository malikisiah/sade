import VideoPlayer from "./videoPlayer";

async function getSongData(songName: string) {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  const encodedSongName = encodeURIComponent(songName);

  const res = await fetch(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=sade%20${encodedSongName}love&type=video&key=${apiKey}`
  );

  return res.json();
}

export default async function Music() {
  const song_1 = await getSongData("Sweetest Taboo");
  const videoId_1 = song_1.items[2].id.videoId;

  const song_2 = await getSongData("Like a Tattoo");
  const videoId_2 = song_2.items[1].id.videoId;

  const song_3 = await getSongData("By Your Side");
  const videoId_3 = song_3.items[0].id.videoId;

  return (
    <>
      <div>
        <h1 className='text-center font-bold text-xl pt-12 pb-10'>
          {" "}
          Top Songs on Spotify
        </h1>

        <div>
          <VideoPlayer vidID={videoId_1}></VideoPlayer>
          <VideoPlayer vidID={videoId_2}></VideoPlayer>
          <VideoPlayer vidID={videoId_3}></VideoPlayer>
        </div>
      </div>
    </>
  );
}
