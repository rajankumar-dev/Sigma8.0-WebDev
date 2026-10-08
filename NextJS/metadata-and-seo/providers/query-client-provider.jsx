'use client';

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
 
function QueryClientProvider({Children}){
    return(
        <QueryClientProvider client={queryClient}>
            {Children}
        </QueryClientProvider>
    )
}
export default QueryClientProvider