import Link from "next/link";

export default async function Demo() {
  return (
    <div>
      <Link prefetch href="/">
        Home
      </Link>
    </div>
  );
}
