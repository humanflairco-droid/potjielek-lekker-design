const SectionDivider = ({ text }: { text?: string }) => (
  <div className="py-8 flex justify-center">
    {text ? (
      <div className="ornament-divider w-full max-w-md px-6">
        <span className="font-heading text-primary/60 text-sm italic whitespace-nowrap">{text}</span>
      </div>
    ) : (
      <div className="w-24 h-px bg-primary/30" />
    )}
  </div>
);

export default SectionDivider;
