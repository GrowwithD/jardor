import { Eyebrow } from "@/components/atoms/Eyebrow";
import { Heading } from "@/components/atoms/Heading";
import { Paragraph } from "@/components/atoms/Paragraph";
import { cn } from "@/lib/cn";

type Props = {
  eyebrow?: string;
  title: string;
  lead?: string;
  align?: "left" | "center" | "right";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  lead,
  align = "center",
  className,
}: Props) {
  const alignCls =
    align === "center"
      ? "items-center text-center"
      : align === "right"
      ? "items-end text-right"
      : "items-start text-left";

  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        alignCls,
        className
      )}
    >
      {eyebrow && (
        <Eyebrow
          tone="gold"
          className="text-[0.6rem] md:text-xs"
        >
          {eyebrow}
        </Eyebrow>
      )}

      <Heading
        as="h2"
        size="xl"
        align={align}
        className="text-brand-cream"
      >
        {title}
      </Heading>

      {lead && (
        <Paragraph
          size="sm"
          muted
          className="max-w-2xl"
        >
          {lead}
        </Paragraph>
      )}
    </div>
  );
}