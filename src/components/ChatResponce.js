import React from "react";

const ChatResponse = ({ response }) => {
  const { answer, citations } = response;

  return (
    <div className="card p-4 shadow-sm">
      <p className="mb-3">{answer}</p>
      <hr />
      <div>
        <p className="fw-bold mb-1">Citation:</p>
        {citations.map((c, idx) => (
          <div key={idx}>
            <p className="fst-italic small mb-1">"{c.text}"</p>
            <a
              href={c.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-underline text-primary"
            >
              Open PDF: {c.source}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatResponse;
