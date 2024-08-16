import { useState } from "react";

export const useFetching = (url: string) => {
    const [dataFetch, setDataFetch] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const fetching = async () => {
        try {
            setIsLoading(true)
            const resp = await fetch(url);
            const respData = await resp.json();
            setDataFetch(respData.results);
        } catch (e: unknown) {
            console.log(e)
        }
    }

    return { fetching, isLoading, dataFetch } as const;
}