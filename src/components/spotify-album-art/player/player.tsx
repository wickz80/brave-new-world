import React from "react";
import "./styles.scss";

interface Props {
  nowPlaying: SpotifyApi.CurrentlyPlayingResponse;
}

export const Player: React.FunctionComponent<Props> = props => {
  const { item, progress_ms } = props.nowPlaying;
  if (!item || !progress_ms) {
    return (
      <div className="main-wrapper">
        <p>Nothing playing...</p>
      </div>
    );
  }
  const progressBarStyles = {
    width: (progress_ms * 100) / item.duration_ms + "%"
  };

  return (
    <div className="main-wrapper">
      <div className="now-playing name">{item.name}</div>
      <div className="now-playing artist">{item.artists[0].name}</div>
      <div className="progress">
        <div className="progress__bar" style={progressBarStyles} />
      </div>
    </div>
  );
};
