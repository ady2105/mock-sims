import React from "react";
import { AlertTriangle, TrendingDown, ZapOff, EyeOff, Award, ArrowRight, Flame } from "lucide-react";

export function DiagnosticAlertsView({ diagnostics }) {
  const getIcon = (iconName) => {
    switch (iconName) {
      case "AlertTriangle": return <AlertTriangle className="h-5 w-5 text-black" />;
      case "TrendingDown": return <TrendingDown className="h-5 w-5 text-black" />;
      case "ZapOff": return <ZapOff className="h-5 w-5 text-black" />;
      case "EyeOff": return <EyeOff className="h-5 w-5 text-black" />;
      default: return <Award className="h-5 w-5 text-black" />;
    }
  };

  return (
    <div className="space-y-5 font-sans">
      {/* Top Banner */}
      <div className="neo-card-orange p-5 text-black flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <div className="flex items-center space-x-2">
            <span className="bg-white p-1 border-2 border-black shadow-[2px_2px_0px_#000]">
              <Flame className="h-4 w-4 text-black" />
            </span>
            <h3 className="text-xl font-black uppercase tracking-tight">
              Where You Are Lacking: Tactical Diagnostic Audit
            </h3>
          </div>
          <p className="text-xs sm:text-sm font-bold text-black/80 mt-1">
            Algorithmic detection of behavioral traps, time bleed, and score leakage
          </p>
        </div>
        <span className="neo-btn bg-white px-3 py-1 text-xs self-start sm:self-auto">
          {diagnostics.length} Diagnostic Flags
        </span>
      </div>

      {/* Diagnostics List */}
      <div className="space-y-4">
        {diagnostics.map((diag, idx) => (
          <div key={idx} className="neo-card p-5 bg-white space-y-3">
            <div className="flex items-start justify-between gap-3 pb-2 border-b-2 border-black">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-[#FEF08A] border-2 border-black shadow-[2px_2px_0px_#000]">
                  {getIcon(diag.icon)}
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase px-2 py-0.5 bg-[#FED7AA] border border-black">
                    {diag.category}
                  </span>
                  <h4 className="text-base font-black text-black uppercase mt-1">
                    {diag.title}
                  </h4>
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm font-bold text-black/80 leading-relaxed">
              {diag.description}
            </p>

            <div className="p-3 bg-[#FEF9C3] border-2 border-black text-xs flex items-start space-x-2.5">
              <ArrowRight className="h-4 w-4 text-black flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-black font-black uppercase block mb-0.5">
                  Actionable Remedy:
                </strong>
                <span className="text-black/80 font-bold">{diag.recommendation}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
