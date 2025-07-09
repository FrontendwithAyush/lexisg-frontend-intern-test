import React from "react";

const ChatInput = ({ query, setQuery, loading, onSubmit }) => {
  return (
    <div className="mb-4">
      <div className="mb-2">
        <textarea
          className="form-control"
          rows="4"
          placeholder="Ask a legal question..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          disabled={loading}
        />
      </div>
      <button
        onClick={onSubmit}
        disabled={loading}
        className={`btn ${loading ? "btn-secondary" : "btn-primary"}`}
      >
        {loading ? "Thinking..." : "Submit"}
      </button>
    </div>
  );
};

export default ChatInput;
