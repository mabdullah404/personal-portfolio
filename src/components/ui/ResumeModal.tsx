'use client';

import React, { useEffect } from 'react';
import { CloseIcon, InfoIcon, GraduationCapIcon } from './Icons';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  resumeFileName: string;
}

export function ResumeModal({ isOpen, onClose, resumeFileName }: ResumeModalProps) {
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6" role="dialog" aria-modal="true" aria-labelledby="resume-modal-title">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-lg rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-2xl z-10 dark:border-zinc-800 dark:bg-zinc-950">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-red-600 border border-rose-200 dark:bg-red-950/40 dark:border-red-500/20 dark:text-red-400">
              <InfoIcon size={22} />
            </div>
            <div>
              <h3 id="resume-modal-title" className="text-lg font-bold text-slate-900 dark:text-zinc-100">
                Resume PDF Setup Notice
              </h3>
              <p className="text-xs text-slate-500 dark:text-zinc-400">File location: public/resume/{resumeFileName}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-800 focus:outline-none focus:ring-2 focus:ring-red-500 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
            aria-label="Close modal"
          >
            <CloseIcon size={20} />
          </button>
        </div>

        <div className="mt-5 space-y-4 text-sm text-slate-600 dark:text-zinc-300">
          <p className="leading-relaxed">
            Per your portfolio requirements, a download is only triggered when your actual PDF document exists.
            The file <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs text-red-600 font-mono dark:bg-zinc-900 dark:text-red-400">public/resume/{resumeFileName}</code> has not been placed in this repository yet.
          </p>

          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-2 text-xs dark:border-zinc-800/80 dark:bg-zinc-900/60">
            <p className="font-semibold text-slate-900 dark:text-zinc-200">How to activate automatic resume download:</p>
            <ol className="list-decimal pl-4 space-y-1 text-slate-600 dark:text-zinc-400">
              <li>Save your resume as a PDF named <span className="text-slate-900 font-mono font-medium dark:text-zinc-200">{resumeFileName}</span>.</li>
              <li>Drop it into the <span className="text-slate-900 font-mono font-medium dark:text-zinc-200">public/resume/</span> folder.</li>
              <li>Once added, clicking the Resume button will instantly download your PDF document.</li>
            </ol>
          </div>

          <p className="text-xs text-slate-500 dark:text-zinc-400">
            In the meantime, all your verified education details, skills, and projects are available on this page.
          </p>
        </div>

        <div className="mt-6 flex flex-col-reverse sm:flex-row sm:items-center sm:justify-end gap-3">
          <button
            onClick={onClose}
            className="w-full sm:w-auto rounded-lg px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 transition-colors dark:text-zinc-400 dark:hover:text-zinc-100 dark:hover:bg-zinc-900 dark:border-zinc-800"
          >
            Close
          </button>
          <a
            href="#education"
            onClick={onClose}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700 transition-colors shadow-xs"
          >
            <GraduationCapIcon size={16} />
            <span>View Verified Education</span>
          </a>
        </div>
      </div>
    </div>
  );
}
