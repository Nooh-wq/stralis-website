import type { Metadata } from "next";
import { Work } from "@/components/sections/Work";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected work from The Stralis.",
};

export default function WorkPage() {
  return (
    <div className="pt-8">
      <Work />
    </div>
  );
}
