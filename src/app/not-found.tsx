import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col gap-8 py-12">
      <div className="text-foreground-muted">404</div>
      
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-foreground">
          This page doesn&apos;t exist.
        </h1>
        <p className="text-foreground-muted">
          Maybe it was moved, maybe it never was.
        </p>
      </div>

      <Link 
        href="/" 
        className="text-link hover:underline transition-colors"
      >
        Return home
      </Link>
    </div>
  );
}
