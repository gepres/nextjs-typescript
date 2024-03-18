'use client';
import { useBreakpoints } from "@/config";

export default function Home() {
  const {isXs,active} = useBreakpoints();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-green_default text-7xl font-bold">hola</h1>
    </main>
  );
}
