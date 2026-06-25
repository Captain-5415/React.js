import axios from "axios";
import { useEffect, useState } from "react";

export default function useFetchData(url) {
    const [data, setData] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchApi = async () => {
            try {
                setLoading(true);
                setError("");

                const response = await axios.get(url);

                setData(response.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchApi();
    }, [url]);

    return { data, loading, error };
}