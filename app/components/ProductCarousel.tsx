"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { externalProjectLinkProps } from "./siteData";

export type SkincareProduct = {
  category: string;
  name: string;
  price: string;
  image: string;
  href: string;
};

function ChevronIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={direction === "left" ? "rotate-180" : undefined}
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function ProductCard({ product }: { product: SkincareProduct }) {
  return (
    <a
      href={product.href}
      {...externalProjectLinkProps(product.href)}
      className="group block"
    >
      <div className="relative h-[150px] overflow-hidden rounded-br-[24px] rounded-tl-[24px] bg-primary-50 md:h-[235px]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1280px) 300px, (min-width: 768px) 25vw, 50vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.035]"
        />
      </div>
      <p className="mt-5 text-[12px] font-medium uppercase tracking-[0.18em] text-primary">
        {product.category}
      </p>
      <h3 className="mt-1.5 text-[17px] font-normal leading-snug text-ink transition-colors group-hover:text-primary">
        {product.name}
      </h3>
      <p className="mt-2 text-[16px] font-medium text-primary">{product.price}</p>
    </a>
  );
}

export default function ProductCarousel({ products }: { products: SkincareProduct[] }) {
  const pageSize = 4;
  const [page, setPage] = useState(0);
  const pageCount = Math.ceil(products.length / pageSize);

  const visibleProducts = useMemo(
    () => products.slice(page * pageSize, page * pageSize + pageSize),
    [page, products],
  );

  const goToPage = (nextPage: number) => {
    const boundedPage = Math.max(0, Math.min(nextPage, pageCount - 1));
    setPage(boundedPage);
  };

  return (
    <div>
      <div className="mb-7 flex items-center justify-between gap-4">
        <p className="text-[13px] font-medium uppercase tracking-[0.18em] text-primary/70">
          {String(page + 1).padStart(2, "0")} / {String(pageCount).padStart(2, "0")}
        </p>
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Lihat 4 skincare sebelumnya"
            onClick={() => goToPage(page - 1)}
            disabled={page === 0}
            className="flex size-11 items-center justify-center rounded-full border border-primary/25 bg-white text-primary transition-colors hover:bg-primary hover:text-white disabled:cursor-not-allowed disabled:border-primary/10 disabled:text-primary/25 disabled:hover:bg-white"
          >
            <ChevronIcon direction="left" />
          </button>
          <button
            type="button"
            aria-label="Lihat 4 skincare berikutnya"
            onClick={() => goToPage(page + 1)}
            disabled={page === pageCount - 1}
            className="flex size-11 items-center justify-center rounded-full border border-primary/25 bg-white text-primary transition-colors hover:bg-primary hover:text-white disabled:cursor-not-allowed disabled:border-primary/10 disabled:text-primary/25 disabled:hover:bg-white"
          >
            <ChevronIcon direction="right" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4 md:gap-x-8">
        {visibleProducts.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>
    </div>
  );
}
