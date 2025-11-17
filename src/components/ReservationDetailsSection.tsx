"use client";

import ButtonGold from "@/components/atoms/ButtonGold";
import ButtonOutlineGold from "@/components/atoms/ButtonOutlineGold";
import BatikSectionLayout from "@/components/layouts/BatikSectionLayout";
import SectionHeader from "@/components/molecules/SectionHeader";

export default function ReservationContent() {
    return (
        <BatikSectionLayout>
            {/* HEADER */}
            <div className="max-w-5xl mx-auto">
                <SectionHeader
                    eyebrow="Reservations"
                    title="Reserve Your Evening at Jard’or"
                    subtitle="Jard’or welcomes guests by reservation. Please select your preferred date and time through our booking partner — our team will confirm your evening personally."
                    align="center"
                />
            </div>

            {/* ===== TWO COLUMN LAYOUT ===== */}
            <div className="max-w-6xl mx-auto px-6 mt-16 grid md:grid-cols-2 gap-14">
                {/* LEFT TEXT BLOCK */}
                <div
                    data-aos="fade-right"
                    data-aos-duration="900"
                    data-aos-easing="ease-out-cubic"
                    data-aos-once="true"
                    className="space-y-6 text-base text-brand-cream/80 leading-[1.85]"
                >
                    <p>
                        We recommend booking in advance, especially for weekends and
                        special occasions. Our team will do its best to accommodate seating
                        preferences depending on availability.
                    </p>

                    <p>
                        Once your reservation is received through Chope, our host desk may
                        reach out for final confirmation — especially for larger groups,
                        wine dinners, or personalized arrangements.
                    </p>

                    <p>
                        Should you wish to plan a private event, wine dinner, or group
                        celebration, feel free to leave a note in your booking or contact
                        us directly. We will be pleased to curate a tailored experience for
                        your evening.
                    </p>

                    <ul className="space-y-1.5 pt-3 text-brand-cream/70 list-disc">
                        <li>• Dinner service by reservation only.</li>
                        <li>• Groups of 6+ guests may require a deposit or set menu.</li>
                        <li>• Kindly inform us of dietary preferences &amp; allergies.</li>
                        <li>• Smart casual attire is appreciated.</li>
                    </ul>
                </div>

                {/* RIGHT CARD */}
                <div
                    data-aos="fade-left"
                    data-aos-duration="900"
                    data-aos-delay="120"
                    data-aos-easing="ease-out-cubic"
                    data-aos-once="true"
                    className="

            border border-brand-gold/40

            p-8
            backdrop-blur-sm
            h-fit
            ring-1 ring-brand-gold/10
            transition-all duration-500
          "
                >
                    <p className="text-eyebrow mb-4">Book Online</p>

                    <p className="text-base text-brand-cream/70 leading-relaxed mb-6">
                        Secure your table instantly via Chope. You will receive a confirmation
                        directly from the platform — when needed, our team will follow up.
                    </p>

                    <div className="flex flex-col gap-4">
                        <ButtonGold href="https://www.chope.co" target="_blank">
                            Book via Chope
                        </ButtonGold>

                        <p className="text-md text-brand-cream/75 text-center mt-3">
                            For urgent inquiries, you may also reach our concierge via WhatsApp.
                        </p>

                        <ButtonOutlineGold href="https://wa.me/628000000000" target="_blank">
                            WhatsApp Concierge
                        </ButtonOutlineGold>
                    </div>
                </div>
            </div>
        </BatikSectionLayout>
    );
}