import Image from "next/image";

const partners = [
  "partner-google-business-profile",
  "partner-google-ads",
  "partner-meta",
  "partner-openai",
  "partner-godaddy",
  "partner-zapier",
  "partner-twilio",
  "partner-google-analytics",
  "partner-google-search-console",
  "partner-canva",
  "partner-ahrefs",
  "partner-semrush",
  "partner-mailgun",
  "partner-leadconnector",
];

export default function Partners() {
  return (
    <section className="oak-layout-partners bg-[#0C1220] px-6 py-20 md:px-10">
      <div className="mx-auto max-w-[1120px] text-center">
        <h2 className="text-[30px] font-extrabold leading-[1.08] text-white sm:text-[38px] lg:text-[45.84px]">
          Just so you know we&rsquo;re legit,
          <br />
          we partner with&hellip;
        </h2>

        <div className="mt-14 grid grid-cols-2 place-items-center gap-x-10 gap-y-10 sm:grid-cols-3 md:grid-cols-4">
          {partners.map((p) => (
            <Image
              key={p}
              src={`/assets/${p}.png`}
              alt={p.replace("partner-", "").replace(/-/g, " ")}
              width={140}
              height={40}
              className="h-8 w-auto max-w-[140px] object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
