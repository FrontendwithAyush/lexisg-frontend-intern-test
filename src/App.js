import React, { useState } from "react";
import "./App.css";
import ChatInput from "./components/ChatInput";
import ChatResponse from "./components/ChatResponce";

function App() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleSubmit = () => {
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      const mockResponse = {
        answer:
          "Yes, under Section 166 of the Motor Vehicles Act, 1988, the claimants are entitled to an addition for future prospects even when the deceased was self-employed and aged 54–55 years at the time of the accident. In Dani Devi v. Pritam Singh, the Court held that 10% of the deceased’s annual income should be added as future prospects.",
        citations: [
          {
            text: "As the age of the deceased at the time of accident was held to be about 54–55 years... 10% of annual income should have been awarded...",
            source: "Dani_Devi_v_Pritam_Singh.pdf",
            link: "https://lexisingapore-my.sharepoint.com/:b:/g/personal/harshit_lexi_sg/EdOegeiR_gdBvQxdyW4xE6oBCDgj5E4Bo5wjvhPHpqgIuQ?e=TEu4vz",
          },
        ],
      };
      setResponse(mockResponse);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Lexi Legal Assistant</h1>
      <ChatInput
        query={query}
        setQuery={setQuery}
        loading={loading}
        onSubmit={handleSubmit}
      />
      {response && <ChatResponse response={response} />}
    </div>
  );
}

export default App;
