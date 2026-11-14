import React from "react";
import { X, Send, AlertTriangle, CheckCircle2 } from "lucide-react";
import { EXAM_METADATA } from "../data/examData";

export function SubmitModal({
  isOpen,
  onClose,
  onConfirmSubmit,
  getPaletteCounts
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4 select-none font-sans">
      <div className="neo-card bg-white max-w-2xl w-full flex flex-col overflow-hidden border-3 border-black shadow-[8px_8px_0px_#000]">
        {/* Header */}
        <div className="bg-[#FDE047] border-b-3 border-black text-black px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <span className="bg-[#FB923C] p-1.5 border-2 border-black shadow-[2px_2px_0px_#000]">
              <Send className="h-4 w-4 text-black" />
            </span>
            <h2 className="text-base font-black uppercase tracking-wide">
              CAT Mock Examination Summary & Submission
            </h2>
          </div>
          <button onClick={onClose} className="neo-btn bg-white p-1">
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto space-y-4">
          <div className="flex items-center space-x-2.5 p-3 bg-[#FEF08A] border-2 border-black text-black text-xs font-bold">
            <AlertTriangle className="h-4 w-4 flex-shrink-0 text-black" />
            <span>Once confirmed, your test will end immediately and detailed diagnostic analytics will be generated.</span>
          </div>

          <div className="border-2 border-black overflow-x-auto">
            <table className="w-full text-xs text-left">
              <thead className="bg-[#FDE047] font-black uppercase border-b-2 border-black">
                <tr>
                  <th className="py-2.5 px-3 border-r-2 border-black">Section</th>
                  <th className="py-2.5 px-3 text-center border-r-2 border-black">Total Qs</th>
                  <th className="py-2.5 px-3 text-center border-r-2 border-black bg-[#86EFAC]">Answered</th>
                  <th className="py-2.5 px-3 text-center border-r-2 border-black bg-[#FCA5A5]">Not Answered</th>
                  <th className="py-2.5 px-3 text-center bg-[#FEF08A]">Marked Review</th>
                </tr>
              </thead>
              <tbody className="divide-y-2 divide-black font-mono font-bold">
                {EXAM_METADATA.sections.map((sec) => {
                  const counts = getPaletteCounts(sec.id);
                  return (
                    <tr key={sec.id} className="hover:bg-slate-50">
                      <td className="py-2.5 px-3 font-sans font-black text-black border-r-2 border-black">
                        {sec.shortName}
                      </td>
                      <td className="py-2.5 px-3 text-center border-r-2 border-black">
                        {sec.questionCount}
                      </td>
                      <td className="py-2.5 px-3 text-center font-black text-black border-r-2 border-black">
                        {(counts.ANSWERED || 0) + (counts.ANSWERED_MARKED || 0)}
                      </td>
                      <td className="py-2.5 px-3 text-center text-black border-r-2 border-black">
                        {counts.NOT_ANSWERED || 0}
                      </td>
                      <td className="py-2.5 px-3 text-center text-black">
                        {counts.MARKED_REVIEW || 0}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#FEF9EF] border-t-3 border-black flex items-center justify-end space-x-3">
          <button
            onClick={onClose}
            className="neo-btn bg-white px-4 py-2 text-xs text-black"
          >
            Cancel & Return
          </button>
          <button
            onClick={onConfirmSubmit}
            className="neo-btn bg-[#FB923C] hover:bg-[#F97316] text-black px-5 py-2 text-xs flex items-center space-x-1.5"
          >
            <CheckCircle2 className="h-4 w-4" />
            <span>CONFIRM FINAL SUBMIT</span>
          </button>
        </div>
      </div>
    </div>
  );
}
