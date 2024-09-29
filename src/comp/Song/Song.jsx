import React, { useState, useRef } from 'react';
import './song.css';
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { TbPlayerTrackPrevFilled } from "react-icons/tb";
import { TbPlayerTrackNextFilled } from "react-icons/tb";

const img = require("../../assets/song-image-3.jpg")
const song = require("../../music/love and dream.mp3")

const Song = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [lyricsVisible, setLyricsVisible] = useState(false);
    const audioRef = useRef(null);

    const togglePlayPause = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleTimeUpdate = () => {
        setCurrentTime(audioRef.current.currentTime);
    };

    const handleLoadedMetadata = () => {
        setDuration(audioRef.current.duration);
    };

    const handleInputChange = (e) => {
        const newTime = e.target.value;
        audioRef.current.currentTime = newTime;
        setCurrentTime(newTime);
    };

    const toggleLyrics = () => {
        setLyricsVisible(!lyricsVisible);
    };

    const progressPercentage = (currentTime / duration) * 100;

    return (
        <section className="music-player" id='song'>
            <div className="album-art">
                <img src={img} alt="Album Cover" />
            </div>
            <div className="track-info">
                <h2>love and dream</h2>
                <h3>shekweas</h3>
            </div>
            <audio
                ref={audioRef}
                src={song}
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
            ></audio>
            <div className="progress-bar">
                <span className='music-time'>
                    {Math.floor(currentTime / 60)}:{Math.floor(currentTime % 60).toString().padStart(2, '0')}
                </span>
                <input
                    type="range"
                    value={currentTime}
                    max={duration}
                    onChange={handleInputChange}
                    style={{
                        background: `linear-gradient(to right, #ff69b4 ${progressPercentage}%, #ddd ${progressPercentage}%)`,
                    }}
                />
                <span className='music-time'>
                    {Math.floor(duration / 60)}:{Math.floor(duration % 60).toString().padStart(2, '0')}
                </span>
            </div>
            <div className="controls">
                <button><TbPlayerTrackPrevFilled /></button>
                <button onClick={togglePlayPause}>
                    {isPlaying ? <FaPause /> : <FaPlay />}
                </button>
                <button><TbPlayerTrackNextFilled /></button>
            </div>
            <button onClick={toggleLyrics} className='lyrics-button'>Lyrics</button>
            {lyricsVisible && (
                <div className="lyrics">

                    <p>
                        Verse 1:
                        <br />
                        I’ve known you for a while, it’s been three months or so
                        <br />
                        And every time we walk, my heart beats more, it shows
                        <br />
                        You’re the moon and stars, the sun in all its light
                        <br />
                        But you’re more beautiful than any words I write
                        <br />
                        We walk in the evening, with the moon up in the sky
                        <br />
                        And every time I’m with you, I’m falling deeper, I can’t lie
                        <br />
                        There’s magic in the silence, when words aren’t needed now
                        <br />
                        I don’t want to say goodbye, but I know somehow
                        <br />
                        <br />
                        Chorus:
                        <br />
                        You’re the one I can’t forget, the one I see in dreams
                        <br />
                        Every time we’re close, it’s more than it all seems
                        <br />
                        You’re the stars, the flowers, the moon in full bloom
                        <br />
                        But you’re more than all of that, you light up every room
                        <br />
                        <br />
                        Verse 2:
                        <br />
                        We sit by your door, don’t wanna let you go
                        <br />
                        There’s something in this silence that no one else will know
                        <br />
                        I’ve fallen hard, but haven’t said the words out loud
                        <br />
                        I’ll keep them in my heart, ‘cause they make me proud
                        <br />
                        Every time you smile, I lose myself again
                        <br />
                        But I’m afraid to tell you, don’t know how to begin
                        <br />
                        We’re walking side by side, the night wraps us in light
                        <br />
                        And though I want to speak, I’ll hold on to it tight
                        <br />
                        <br />
                        Chorus:
                        <br />
                        You’re the one I can’t forget, the one I see in dreams
                        <br />
                        Every time we’re close, it’s more than it all seems
                        <br />
                        You’re the stars, the flowers, the moon in full bloom
                        <br />
                        But you’re more than all of that, you light up every room
                        <br />
                        <br />
                        Bridge:
                        <br />
                        Maybe one day, I’ll find the courage inside
                        <br />
                        To tell you what I feel, to no longer hide
                        <br />
                        But for now, I’ll walk with you, under the stars so bright
                        <br />
                        Hoping one day, you’ll see the love in my eyes tonight
                        <br />
                        <br />
                        Chorus:
                        <br />
                        You’re the one I can’t forget, the one I see in dreams
                        <br />
                        Every time we’re close, it’s more than it all seems
                        <br />
                        You’re the stars, the flowers, the moon in full bloom
                        <br />
                        But you’re more than all of that, you light up every room
                    </p>
                </div>
            )}
        </section>
    );
};

export default Song;