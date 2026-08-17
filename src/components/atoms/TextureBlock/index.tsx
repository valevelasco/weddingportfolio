interface TextureBlockProps {
  label: string;
  aspect?: string;
  texture?: 'a' | 'b' | 'a-fine';
  className?: string;
}

const textureClass: Record<NonNullable<TextureBlockProps['texture']>, string> = {
  a: 'texture-a',
  'a-fine': 'texture-a-fine',
  b: 'texture-b',
};

export function TextureBlock({ label, aspect = '4/5', texture = 'b', className = '' }: TextureBlockProps) {
  return (
    <div
      className={`relative border border-border flex items-end p-4 ${textureClass[texture]} ${className}`}
      style={{ aspectRatio: aspect }}
      role="img"
      aria-label={label}
    >
      <span className="font-sans text-label text-muted tracking-tightish">{label}</span>
    </div>
  );
}
