import Image from "next/image";

const productViews = [
  { src: "/assets/syntidesk/dashboard-overview.jpg", alt: "SyntiDesk dashboard overview" },
  { src: "/assets/syntidesk/interactions-review.jpg", alt: "SyntiDesk interaction review workspace" },
  { src: "/assets/syntidesk/appointments.jpg", alt: "SyntiDesk appointments workspace" },
  { src: "/assets/syntidesk/work-queue.jpg", alt: "SyntiDesk work queue workspace" },
  { src: "/assets/syntidesk/overview-poster.jpg", alt: "SyntiDesk product overview" },
];

export default function Testimonials() {
  return (
    <section className="oak-layout-proof mx-auto max-w-[1120px] px-6 py-20 text-center md:px-10">
      <div className="text-[13px] font-extrabold uppercase tracking-wide text-[#0B55FF]">
        SyntiDesk in action
      </div>
      <h2 className="mt-3 text-[34px] font-bold leading-[1.04] text-[#101832] sm:text-[46px] lg:text-[58px]">
        One front desk for every customer operation.
      </h2>
      <p className="mx-auto mt-3 max-w-lg text-[15px] font-medium text-[#5A6172] sm:text-[16px]">
        See interactions, appointments, work queues, and operational visibility in one place.
      </p>

      <div className="mt-12 grid grid-cols-1 gap-5 text-left md:grid-cols-2">
        {productViews.map((view, index) => (
          <figure
            key={view.src}
            className={`group overflow-hidden rounded-[20px] border border-[#ded6cf] bg-white p-2 shadow-[0_14px_32px_rgba(54,45,41,.08)] ${index === 0 ? "md:col-span-2" : ""}`}
          >
            <Image
              src={view.src}
              alt={view.alt}
              width={1536}
              height={760}
              className={`w-full rounded-[14px] object-cover transition-transform duration-300 group-hover:scale-[1.015] ${index === 4 ? "aspect-[16/9]" : "aspect-[2/1]"}`}
            />
          </figure>
        ))}
      </div>
    </section>
  );
}
