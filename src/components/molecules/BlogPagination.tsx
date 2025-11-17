"use client";

type BlogPaginationProps = {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
};

export default function BlogPagination({
    currentPage,
    totalPages,
    onPageChange,
}: BlogPaginationProps) {
    if (totalPages <= 1) return null;

    return (
        <div
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-easing="ease-out-cubic"
            data-aos-delay={150}
            className="mt-6 flex flex-col items-center gap-3"
        >
            <p className="text-[9px] md:text-[10px] text-brand-cream/70 tracking-[0.16em] uppercase">
                Page {currentPage} of {totalPages}
            </p>

            <div className="flex items-center gap-2">
                {/* Prev */}
                <button
                    type="button"
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`
            px-3 py-1.5 rounded-full text-[9px] uppercase tracking-[0.18em]
            border border-brand-gold/35
            bg-black/60
            text-brand-cream/80
            disabled:opacity-35 disabled:cursor-not-allowed
            hover:bg-brand-gold/10 hover:text-brand-gold
            transition-all
          `}
                >
                    Prev
                </button>

                {/* Page numbers */}
                <div className="flex items-center gap-1.5">
                    {Array.from({ length: totalPages }).map((_, idx) => {
                        const page = idx + 1;
                        const isActive = page === currentPage;

                        return (
                            <button
                                key={page}
                                type="button"
                                onClick={() => onPageChange(page)}
                                className={`
                  min-w-[32px]
                  px-2.5 py-1.5
                  rounded-full
                  text-[9px]
                  tracking-[0.14em]
                  uppercase
                  border
                  transition-all
                  ${isActive
                                        ? "border-brand-gold bg-brand-gold text-black shadow-[0_0_24px_rgba(200,169,107,0.35)]"
                                        : "border-brand-gold/25 bg-black/70 text-brand-cream/70 hover:border-brand-gold/60 hover:text-brand-gold hover:bg-brand-gold/5"
                                    }
                `}
                            >
                                {page}
                            </button>
                        );
                    })}
                </div>

                {/* Next */}
                <button
                    type="button"
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`
            px-3 py-1.5 rounded-full text-[9px] uppercase tracking-[0.18em]
            border border-brand-gold/35
            bg-black/60
            text-brand-cream/80
            disabled:opacity-35 disabled:cursor-not-allowed
            hover:bg-brand-gold/10 hover:text-brand-gold
            transition-all
          `}
                >
                    Next
                </button>
            </div>
        </div>
    );
}