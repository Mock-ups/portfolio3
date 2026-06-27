import Link from "next/link";

export default function NotFound() {
  return (
    <section className="shell pt-24 md:pt-32 pb-24 min-h-[60vh] flex flex-col justify-center">
      <p className="eyebrow">Error — Sheet not found</p>
      <h1 className="display-xl mt-6">404</h1>
      <p className="mt-6 max-w-[44ch] text-lg text-graphite leading-relaxed">
        This drawing isn&rsquo;t in the set. The page may have moved or never
        existed.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/" className="btn btn--solid">
          Back home
        </Link>
        <Link href="/work" className="btn">
          View work
        </Link>
      </div>
    </section>
  );
}
