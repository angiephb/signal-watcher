'use client';
import { EventData } from "@/types/events";
import { MdSecurity } from "react-icons/md";

interface AnalysisCardProps {
    data: EventData;
}

export const AnalysisCard = ({ data }: AnalysisCardProps) => {
    const getSeverityColor = (severity: string) => {
        switch (severity) {
            case 'CRITICAL': return 'bg-red-600/90 text-white border-red-500';
            case 'HIGH': return 'bg-orange-500/90 text-white border-orange-500';
            case 'MED': return 'bg-yellow-400/90 text-black border-yellow-400';
            case 'LOW': return 'bg-green-500/90 text-white border-green-500';
            default: return 'bg-gray-200/90 text-black border-gray-300';
        }
    };

    return (
        <div className="w-full relative overflow-hidden rounded-2xl border border-white/20 dark:border-white/10 bg-white/40 dark:bg-black/40 backdrop-blur-md shadow-xl p-6 transition-all animate-in slide-in-from-bottom-5">
            <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold font-[Roboto] text-zinc-900 dark:text-zinc-50">
                    Resultados del Análisis
                </h2>
                <span className={`px-3 py-1 text-xs font-bold tracking-wider rounded-full border shadow-sm ${getSeverityColor(data.severity)}`}>
                    {data.severity}
                </span>
            </div>
            
            <div className="space-y-4 font-[Montserrat]">
                <div className="space-y-1">
                    <p className="text-sm font-semibold text-zinc-600 dark:text-zinc-400 uppercase tracking-wide">
                        Resumen del Evento
                    </p>
                    <p className="text-zinc-800 dark:text-zinc-200 text-lg leading-relaxed">
                        {data.summary}
                    </p>
                </div>
                <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 space-y-1">
                    <p className="text-sm font-semibold text-zinc-600 dark:text-zinc-400 uppercase tracking-wide">
                        Acción Recomendada
                    </p>
                    <div className="flex items-start gap-3 mt-2 bg-blue-50/50 dark:bg-blue-900/20 p-3 rounded-lg border border-blue-100 dark:border-blue-900/50">
                        <MdSecurity className="text-2xl text-blue-600 dark:text-blue-400 shrink-0" />
                        <p className="font-medium text-blue-900 dark:text-blue-100">
                            {data.suggestedAction}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}