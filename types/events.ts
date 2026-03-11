export interface EventData {
    severity: string;
    summary: string;
    suggestedAction: string;
}

export interface EventState {
    data: EventData | null;
    isLoading: boolean;
    error: string | null;
}