import Image from "next/image";

export default function ImagePlaceholder({
  alt,
  filename,
  className = "",
  ratio = "aspect-[4/3]",
}: {
  alt: string;
  filename: string;
  className?: string;
  variant?: "light" | "dark";
  ratio?: string;
}) {
  return (
    <div
      className={`relative ${ratio} overflow-hidden rounded-2xl bg-surface ring-1 ring-primary/10 ${className}`}
    >
      <Image
        src={`/images/${filename}`}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-cover"
        priority={filename.startsWith("hero-")}
      />
    </div>
  );
}
