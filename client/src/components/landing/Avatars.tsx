import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

const people = [
  { id: 1, name: "Member 1", designation: "@redacted", image: "" },
  { id: 2, name: "Member 2", designation: "@redacted", image: "" },
  { id: 3, name: "Member 3", designation: "@redacted", image: "" },
  { id: 4, name: "Member 4", designation: "@redacted", image: "" },
  { id: 5, name: "Member 5", designation: "@redacted", image: "" },
  { id: 6, name: "Member 6", designation: "@redacted", image: "" },
];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
