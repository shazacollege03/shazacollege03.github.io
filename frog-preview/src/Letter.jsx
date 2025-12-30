import { useState } from "react";
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

    return (
        <div className="letter-viewer">
            <img src={pages[page]} alt={`Letter page ${page + 1}`} />

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
