
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="text-center mt-20">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <Link href="/" className="text-blue-500 underline mt-4 inline-block">
        Go Home
      </Link>
    </div>
  );
}
