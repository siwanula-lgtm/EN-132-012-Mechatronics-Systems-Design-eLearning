import {
  Box,
  Cable,
  Code,
  Cog,
  Container,
  Cpu,
  Factory,
  Radar,
  Zap,
  type LucideIcon,
} from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  Box,
  Cable,
  Code,
  Cog,
  Container,
  Cpu,
  Factory,
  Radar,
  Zap,
};

export default function ModuleIcon({ name, className }: { name: string; className?: string }) {
  const Icon = ICONS[name] ?? Cpu;
  return <Icon className={className} />;
}
