'use client'

const { QueryClient, QueryClientProvider } = require("@tanstack/react-query");

const client = new QueryClient()

import React from 'react'

const TanstackProvider = ({children}) => {
  return (
   <QueryClientProvider client={client}>
    {children}
   </QueryClientProvider>
  )
}

export default TanstackProvider