import React from 'react';
import katex from 'katex';

interface MathTextProps {
  content: string;
  className?: string;
  as?: 'div' | 'span' | 'p';
}

export const MathText: React.FC<MathTextProps> = ({ content, className = '', as = 'span' }) => {
  if (!content) return null;

  // Split string by $$...$$ (block math) and $...$ (inline math)
  const renderMathContent = (text: string) => {
    const parts: React.ReactNode[] = [];
    const regex = /(\$\$[\s\S]*?\$\$|\$[^\$\n]+?\$)/g;
    let lastIndex = 0;
    let match: RegExpExecArray | null;

    const formatTextWithMarkdown = (raw: string, keyPrefix: string | number) => {
      // Parse **bold**
      const segments = raw.split(/(\*\*.*?\*\*)/g);
      return segments.map((seg, sIdx) => {
        if (seg.startsWith('**') && seg.endsWith('**')) {
          return (
            <strong key={`${keyPrefix}-${sIdx}`} className="font-bold text-slate-900">
              {seg.slice(2, -2)}
            </strong>
          );
        }
        return seg;
      });
    };

    while ((match = regex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(...formatTextWithMarkdown(text.substring(lastIndex, match.index), lastIndex));
      }

      const matchStr = match[0];
      const isDisplay = matchStr.startsWith('$$') && matchStr.endsWith('$$');
      const formula = isDisplay
        ? matchStr.slice(2, -2).trim()
        : matchStr.slice(1, -1).trim();

      try {
        const html = katex.renderToString(formula, {
          displayMode: isDisplay,
          throwOnError: false,
        });
        parts.push(
          <span
            key={`math-${match.index}`}
            className={isDisplay ? 'block my-2 overflow-x-auto py-1' : 'inline-block px-0.5'}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        );
      } catch {
        parts.push(
          <span key={`math-${match.index}`} className="font-mono bg-amber-50 text-amber-800 px-1 rounded">
            {formula}
          </span>
        );
      }

      lastIndex = regex.lastIndex;
    }

    if (lastIndex < text.length) {
      parts.push(...formatTextWithMarkdown(text.substring(lastIndex), lastIndex));
    }

    return parts;
  };

  const Component = as;
  return <Component className={className}>{renderMathContent(content)}</Component>;
};
