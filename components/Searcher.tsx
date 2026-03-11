'use client';

import { AppDispatch, RootState } from "@/store/store";
import { fetchEvent, clearEvent } from "@/store/eventSlice";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AnalysisCard } from "./AnalysisCard";

export const Searcher = () => {
    const [search, setSearch] = useState("");
    const [debouncedValue, setDebouncedValue] = useState(search);
    const dispatch = useDispatch<AppDispatch>();
    const router = useRouter();

    const { data: results, isLoading, error } = useSelector((state: RootState) => state.event);

    useEffect(() => {
        const timer = setTimeout(() => setDebouncedValue(search), 500);
        return () => clearTimeout(timer);
    }, [search]);

    useEffect(() => {
        if (debouncedValue.trim() !== '') {
            dispatch(fetchEvent(debouncedValue));
        } else {
            dispatch(clearEvent());
        }
    }, [debouncedValue, dispatch]);

    return (
        <div className="flex flex-col items-center justify-center gap-10">
            <h1 className="text-4xl font-bold font-[Roboto]">Signal Watcher</h1>
            <input
                id="search"
                name="search"
                placeholder="Dominio, Palabras Clave, etc."
                type="text"
                className="w-full rounded-md border border-gray-300 px-2 py-1 font-[Montserrat] bg-transparent bg-blur"
                value={search}
                onChange={(e) => (setSearch(e.target.value))}
            />
            {results && <AnalysisCard data={results} />}
        </div>
    )
}