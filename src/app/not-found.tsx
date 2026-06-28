import Link from "next/link";

export default function NotFound() {
  return (
    <section className="shell pt-24 md:pt-32 pb-24 min-h-[60vh] flex flex-col justify-center text-center items-center">
      <p className="subtitle">
        <span className="subtitle__dot" />
        Error 404
      </p>
      <h1 className="h-xxl mt-6">Page not found</h1>
      <p className="lede mt-6 max-w-[44ch]">
        The page you&rsquo;re looking for may have moved or never existed.
      </p>
      <div className="mt-9 flex flex-wrap gap-3 justify-center">
        <Link href="/" className="btn">
          Back home
        </Link>
        <Link href="/work" className="btn btn--outline">
          View work
        </Link>
      </div>
    </section>
  );
}
