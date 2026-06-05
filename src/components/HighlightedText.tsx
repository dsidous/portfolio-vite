type HighlightedTextProps = {
  text: string;
  className?: string;
};

const MARKUP_PATTERN = /\*\*(.+?)\*\*/g;

export function HighlightedText({ text, className }: HighlightedTextProps) {
  const parts = text.split(MARKUP_PATTERN);

  return (
    <span className={className}>
      {parts.map((part, index) =>
        index % 2 === 1 ? (
          <span key={index} className='text-teal-300 font-medium'>
            {part}
          </span>
        ) : (
          <span key={index}>{part}</span>
        ),
      )}
    </span>
  );
}
