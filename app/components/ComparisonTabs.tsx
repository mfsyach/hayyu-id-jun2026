type Side = { title: string; items: string[] };

function DashIcon() {
  return (
    <span className="mt-2 h-px w-3 shrink-0 bg-muted/60" aria-hidden="true" />
  );
}

function CheckIcon() {
  return (
    <svg
      className="mt-0.5 h-4 w-4 shrink-0 text-white"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 10.5 8 14.5 16 5.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ComparisonCard({
  side,
  variant,
}: {
  side: Side;
  variant: "neutral" | "brand";
}) {
  const isBrand = variant === "brand";
  const title = isBrand ? "Dengan ISST - Hayyu" : side.title;

  return (
    <article
      className={`rounded-2xl p-7 sm:p-8 ${
        isBrand
          ? "bg-primary text-white shadow-xl shadow-primary/20"
          : "bg-white ring-1 ring-black/5"
      }`}
    >
      <h3
        className={`mb-5 border-b pb-3 text-[15px] font-semibold uppercase tracking-[0.16em] ${
          isBrand ? "border-white/15 text-white/90" : "border-black/10 text-muted"
      }`}
    >
      {title}
      </h3>
      <ul className="space-y-3">
        {side.items.map((item) => (
          <li
            key={item}
            className={`flex gap-3 text-left text-[17px] leading-relaxed ${
              isBrand ? "text-white/90" : "text-body"
            }`}
          >
            {isBrand ? <CheckIcon /> : <DashIcon />}
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function ComparisonTabs({
  left,
  right,
}: {
  left: Side;
  right: Side;
}) {
  return (
    <div className="mx-auto mt-10 grid max-w-5xl gap-5 lg:grid-cols-2">
      <ComparisonCard side={left} variant="neutral" />
      <ComparisonCard side={right} variant="brand" />
    </div>
  );
}
