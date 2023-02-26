export default function Lista() {
  const videos = [
    {
      id: 1,
      title: "React Tutorial",
      link: "https://www.youtube.com/watch?v=Ke90Tje7VS0",
      thumbnail: "https://i.ytimg.com/vi/Ke90Tje7VS0/maxresdefault.jpg",
    },
    {
      id: 2,
      title: "JavaScript Tutorial",
      link: "https://www.youtube.com/watch?v=PkZNo7MFNFg",
      thumbnail: "https://i.ytimg.com/vi/PkZNo7MFNFg/maxresdefault.jpg",
    },
    {
      id: 3,
      title: "Node.js Tutorial",
      link: "https://www.youtube.com/watch?v=TlB_eWDSMt4",
      thumbnail: "https://i.ytimg.com/vi/TlB_eWDSMt4/maxresdefault.jpg",
    },
    {
      id: 4,
      title: "CSS Flexbox Tutorial",
      link: "https://www.youtube.com/watch?v=JJSoEo8JSnc",
      thumbnail: "https://i.ytimg.com/vi/JJSoEo8JSnc/maxresdefault.jpg",
    },
    {
      id: 5,
      title: "HTML Tutorial",
      link: "https://www.youtube.com/watch?v=pQN-pnXPaVg",
      thumbnail: "https://i.ytimg.com/vi/pQN-pnXPaVg/maxresdefault.jpg",
    },
  ];

  function renderVideo(videos) {
    return (
      <div key={videos.id}>
        <h2>{videos.title}</h2>
        <a href={videos.link}>
          <img src={videos.thumbnail} alt={videos.title}></img>
        </a>
      </div>
    );
  }
  return <div>{videos.map(renderVideo)}</div>;
}
