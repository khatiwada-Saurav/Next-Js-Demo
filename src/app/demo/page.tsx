import Link from "next/link";

export default async function Demo() {
  return (
    <div>
      <Link prefetch={false} href="/">
        Home
      </Link>
    </div>
  );
}
