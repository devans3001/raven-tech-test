"use client";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { BarChart3, List, Rows3 } from "lucide-react";

export default function DensityControls({
  layout = "compact",
  onLayoutChange,
  limit = "10",
  onLimitChange
}) {
  const [selectedLayout, setSelectedLayout] = useState(layout);
  const [selectedLimit, setSelectedLimit] = useState(limit);

  const handleLayoutChange = (value) => {
    setSelectedLayout(value);
    onLayoutChange?.(value);
  };

  const handleLimitChange = (value) => {
    setSelectedLimit(value);
    onLimitChange?.(value);
  };

  return (
    <div className="flex items-center justify-between">
      {/* Layout Selector */}
      <ToggleGroup
        type="single"
        value={selectedLayout}
        onValueChange={handleLayoutChange}
        className=" p-1 rounded-md"
      >
        <ToggleGroupItem
          value="compact"
          aria-label="Compact view"
          className={cn("data-[state=on]:bg-[#353945]")}
        >
          <List size={16} className="text-[#f26363]" />
        </ToggleGroupItem>
        <ToggleGroupItem
          value="comfortable"
          aria-label="Comfortable view"
          className={cn("data-[state=on]:bg-[#353945]")}
        >
          <Rows3 size={16} className="text-[#2FC57D]" />
        </ToggleGroupItem>
        <ToggleGroupItem
          value="expanded"
          aria-label="Expanded view"
          className={cn("data-[state=on]:bg-[#353945]")}
        >
          <BarChart3 size={16} className="text-[#f26363]" />
        </ToggleGroupItem>
      </ToggleGroup>

      {/* Rows Per Page Selector */}
      <Select value={selectedLimit} onValueChange={handleLimitChange}>
        <SelectTrigger className="w-[80px] bg-[#1E2023] border-none text-white text-sm">
          <SelectValue placeholder="10" />
        </SelectTrigger>
        <SelectContent className="bg-[#1E2023] text-white border border-[#333]">
          {[10, 25, 50, 100].map((num) => (
            <SelectItem key={num} value={String(num)} className="hover:bg-[#272A2E]">
              {num}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
