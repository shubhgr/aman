import Image from "next/image";

export default function GradRightLogo({
  className = "h-8 w-auto",
}: {
  className?: string;
}) {
  return (
    <Image
      src="/gradright-logo.png"
      alt="GradRight"
      width={210}
      height={48}
      className={`object-contain object-left ${className}`}
    />
  );
}
