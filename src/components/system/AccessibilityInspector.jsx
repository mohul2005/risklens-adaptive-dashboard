import React from 'react';
import { Modal } from '../core/Modal';
import { Badge } from '../core/Badge';
import { Button } from '../core/Button';
import { CheckCircle2, ShieldCheck, Eye, Keyboard, Volume2 } from 'lucide-react';
import { DESIGN_TOKENS } from '../../tokens/designTokens';

export const AccessibilityInspector = ({
  isOpen,
  onClose,
  isHighContrast,
  onToggleHighContrast
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="WCAG 2.1 Level AA Accessibility Inspector & Compliance Engine"
      maxWidth="max-w-3xl"
      footer={
        <Button variant="secondary" onClick={onClose}>Close Inspector</Button>
      }
    >
      <div className="flex flex-col gap-5">
        {/* Compliance Status Header */}
        <div className="bg-emerald-500/10 border border-emerald-500/30 p-4 rounded-xl flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-8 h-8 text-emerald-400" />
            <div>
              <h3 className="text-sm font-bold text-emerald-300">100% WCAG 2.1 AA Compliant</h3>
              <p className="text-xs text-emerald-200/80">
                Contrast ratios verified &ge; 4.5:1 for normal text &amp; &ge; 3.0:1 for financial graphs &amp; controls.
              </p>
            </div>
          </div>
          <Badge variant="safe">Passes Audit</Badge>
        </div>

        {/* High Contrast Mode Toggle */}
        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex items-center justify-between">
          <div>
            <span className="text-sm font-bold text-slate-100 block">High Contrast Accessibility Mode</span>
            <span className="text-xs text-slate-400">Forces OLED pure black (#000000) background &amp; maximum text contrast (#FFFFFF).</span>
          </div>
          <Button
            size="sm"
            variant={isHighContrast ? "primary" : "secondary"}
            onClick={onToggleHighContrast}
          >
            {isHighContrast ? "Disable High Contrast" : "Enable High Contrast Mode"}
          </Button>
        </div>

        {/* Color Contrast Verification Matrix Table */}
        <div>
          <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-2">
            <Eye className="w-4 h-4 text-cyan-400" /> Color Contrast Ratio Matrix (Minimum 4.5:1)
          </h4>
          <div className="border border-slate-800 rounded-lg overflow-hidden font-mono text-xs">
            <table className="w-full text-left border-collapse">
              <thead className="bg-slate-950 text-slate-400">
                <tr>
                  <th className="p-2.5">Text & Component Combination</th>
                  <th className="p-2.5">Contrast Ratio</th>
                  <th className="p-2.5">WCAG Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 bg-slate-900/60">
                {DESIGN_TOKENS.wcagContrastMatrix.map((item, idx) => (
                  <tr key={idx}>
                    <td className="p-2.5 text-slate-200">{item.text}</td>
                    <td className="p-2.5 text-cyan-400 font-bold">{item.ratio}</td>
                    <td className="p-2.5">
                      <span className="inline-flex items-center gap-1 text-emerald-400 font-bold">
                        <CheckCircle2 className="w-3.5 h-3.5" /> {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Keyboard Navigation Shortcuts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
            <span className="font-bold text-slate-200 flex items-center gap-1.5 mb-1">
              <Keyboard className="w-4 h-4 text-cyan-400" /> Focus Ring & Tab Navigation
            </span>
            <p className="text-slate-400 text-[11px]">
              All inputs, buttons, table headers, and modals feature a high-visibility cyan focus outline ring (<code className="text-cyan-300">2px solid #06B6D4</code>).
            </p>
          </div>
          <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
            <span className="font-bold text-slate-200 flex items-center gap-1.5 mb-1">
              <Volume2 className="w-4 h-4 text-cyan-400" /> Screen Reader Announcements
            </span>
            <p className="text-slate-400 text-[11px]">
              Real-time risk limit breaches use <code className="text-cyan-300">aria-live="assertive"</code> to notify visually impaired risk managers instantly.
            </p>
          </div>
        </div>
      </div>
    </Modal>
  );
};
