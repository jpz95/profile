import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <div>About us</div>
      <div>
        Back to{' '}
        <Link href="/" as={process.env.BACKEND_URL + '/'}>
          <a>Intro</a>
        </Link>
      </div>
    </div>
  );
}
