import { EventState, EventData } from "@/types/events";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: EventState = {
    data: null,
    isLoading: false,
    error: null,
};

export const fetchEvent = createAsyncThunk(
    'events/fetchEvent',
    async (termSearch: string, { rejectWithValue }) => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/events/analyze`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ term: termSearch })
            });

            if (!response.ok) {
                return rejectWithValue("Error al obtener el análisis del evento");
            }

            const data: EventData = await response.json();
            return data;
        } catch (error) {
            return rejectWithValue("Ocurrió un error inesperado al conectar al servidor");
        }
    }
);

export const eventSlice = createSlice({
    name: "eventResults",
    initialState,
    reducers: {
        clearEvent: (state) => {
            state.data = null;
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchEvent.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchEvent.fulfilled, (state, action: PayloadAction<EventData>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchEvent.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as string;
            });
    }
});

export const { clearEvent } = eventSlice.actions;
export default eventSlice.reducer;