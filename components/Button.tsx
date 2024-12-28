
import clsx from "clsx";
import Link from "next/link";

type Props = {
  buttonLink: string;
  buttonText: string | null;
  className?: string;
};

export default function Button({ buttonLink, buttonText, className }: Props) {
  return (
    <Link
      href={buttonLink}
      className={clsx(
        "rounded-xl bg-orange-600 px-5 py-4 text-center text-xl font-bold uppercase tracking-wide text-white hover:bg-orange-700 focus:outline-none md:text-2xl",
        className,
      )}
    >
      {buttonText}
    </Link>
  );
}
