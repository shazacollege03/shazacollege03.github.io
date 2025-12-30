import { useState } from "react";

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
          onClick={() => setPage(p => Math.max(0, p - 1))}
          disabled={page === 0}
        >
          ◀
        </button>

        <button
          onClick={() =>
            setPage(p => Math.min(pages.length - 1, p + 1))
          }
          disabled={page === pages.length - 1}
        >
          ▶
        </button>
      </div>
    </div>
  );
}
