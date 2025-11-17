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
            data-aos-duration="700"
            data-aos-easing="ease-out-cubic"
            data-aos-delay={120}
            className="mt-6 flex flex-col items-center gap-3"
        >
            {/* Page Info */}
            <p className="text-[9px] md:text-[10px] text-brand-cream/70 tracking-[0.16em] uppercase">
                Page {currentPage} of {totalPages}
            </p>

            <div className="flex items-center gap-2">

                {/* Prev */}
                <button
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`
                        px-3 py-1.5 rounded-full text-[9px] uppercase tracking-[0.18em]
                        text-brand-cream/70
                        disabled:opacity-30 disabled:cursor-not-allowed
                        hover:text-brand-gold
                        transition-colors
                    `}
                >
                    Prev
                </button>

                {/* Page Numbers */}
                <div className="flex items-center gap-1.5">
                    {Array.from({ length: totalPages }).map((_, idx) => {
                        const page = idx + 1;
                        const active = page === currentPage;

                        return (
                            <button
                                key={page}
                                onClick={() => onPageChange(page)}
                                className={`
                                    min-w-[30px] px-2.5 py-1.5 rounded-full
                                    text-[9px] uppercase tracking-[0.14em]
                                    transition-all

                                    ${
                                        active
                                            ? "border border-brand-gold text-brand-gold"
                                            : "text-brand-cream/70 hover:text-brand-gold hover:border-brand-gold/50 border border-transparent"
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
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`
                        px-3 py-1.5 rounded-full text-[9px] uppercase tracking-[0.18em]
                        text-brand-cream/70
                        disabled:opacity-30 disabled:cursor-not-allowed
                        hover:text-brand-gold
                        transition-colors
                    `}
                >
                    Next
                </button>

            </div>
        </div>
    );
}