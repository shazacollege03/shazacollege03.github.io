import { useState, useRef, useEffect } from "react";
import leftButton from "/src/assets/left-button.svg";
import rightButton from "/src/assets/right-button.svg";
import audioButton from "/src/assets/audio.svg";
import spotifyButton from "/src/assets/spotify-icon.svg";
import refreshButton from "/src/assets/refresh-but.svg";

const pages = [
    "/src/assets/pg1.JPG",
    "/src/assets/pg2.JPG",
    "/src/assets/pg3.JPG",
    "/src/assets/pg4.JPG",
];

export default function LetterViewer() {
    const [page, setPage] = useState(0);
    const scrollRef = useRef(null);
    const [showSpotify, setShowSpotify] = useState(false);

    // Scroll to top on page change + hide Spotify
    useEffect(() => {
        scrollRef.current?.scrollTo({ top: 0 });
        setShowSpotify(false);
    }, [page]);

    const handleScroll = () => {
        if (page !== pages.length - 1) return;

        const el = scrollRef.current;
        if (!el) return;

        const atBottom =
            el.scrollTop + el.clientHeight >= el.scrollHeight - 2;

        setShowSpotify(atBottom);
    };

    return (
        <div className="letter-viewer" >

            <button className="audio-button">
                <h3 className="audio-label pixelify-sans-fontt">Hear it,</h3>
                <h3 className="audio-label pixelify-sans-fontt"> from my heart to yours &lt;3</h3>
                <img src={audioButton} alt="Play audio" />
            </button>

            <button
                className="refresh-button"
                onClick={() => window.location.reload()}
                aria-label="Refresh page"
            >
                <img src={refreshButton} alt="Refresh" />
            </button>

            <div className="letter-scroll-area" ref={scrollRef} onScroll={handleScroll}>
                <img
                    src={pages[page]}
                    alt={`Letter page ${page + 1}`}
                    draggable={false}
                />
            </div>

            <div className="letter-controls">
                <button
                    className="icon-button"
                    onClick={() => setPage(p => Math.max(0, p - 1))}
                    disabled={page === 0}
                >
                    <img src={leftButton} alt="Previous page" />
                </button>


                <button
                    className="icon-button"
                    onClick={() =>
                        setPage(p => Math.min(pages.length - 1, p + 1))
                    }
                    disabled={page === pages.length - 1}
                >
                    <img src={rightButton} alt="Next page" />
                </button>

            </div>

            {showSpotify && (
                <a
                    href="https://open.spotify.com/playlist/5ipRJEQdDE9LrznubETXlT?si=a0af819c1ac94bbd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="spotify-button"
                >
                    <h4 className="listen-text pixelify-sans-fontt">
                        Listen!
                    </h4>
                    <img src={spotifyButton} alt="Spotify playlist" />
                </a>
            )}
        </div>
    );
}
