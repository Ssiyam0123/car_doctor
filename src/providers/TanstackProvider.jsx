"use client";

const { QueryClient, QueryClientProvider } = require("@tanstack/react-query");

const client = new QueryClient();

const TanstackProvider = ({ children }) => {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};

export default TanstackProvider;
