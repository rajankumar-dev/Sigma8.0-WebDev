'use client';

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";


 
function QueryClientProviderClient({Children}){

    const [queryClient] = useState(() => new QueryClient());

    return(
        <QueryClientProvider client={queryClient}>
            {Children}
        </QueryClientProvider>
    )
}
export default QueryClientProviderClient