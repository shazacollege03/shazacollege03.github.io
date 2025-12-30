import { useState, useRef , useEffect} from "react";
import leftButton from "/src/assets/left-button.svg";
import rightButton from "/src/assets/right-button.svg";

const pages = [
    "/src/assets/letter/pg1.JPG",
    "/src/assets/letter/pg2.JPG",
    "/src/assets/letter/pg3.JPG",
    "/src/assets/letter/pg4.JPG",
];

export default function LetterViewer() {
    const [page, setPage] = useState(0);
    const scrollRef = useRef(null);
  
    // Scroll back to top when page changes
    useEffect(() => {
      scrollRef.current?.scrollTo({
        top: 0,
        behavior: "instant",
      });
    }, [page]);
  
    return (
      <div className="letter-viewer">
        <div className="letter-scroll-area" ref={scrollRef}>
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
        </div>
    );
}
