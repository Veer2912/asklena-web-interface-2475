import { Metadata } from "./metadata";
import { SoundProvider } from "./sound-provider";

interface ProviderProps {
  children: React.ReactNode;
}

export function Provider({ children }: ProviderProps) {
  return (
    <SoundProvider>
      <Metadata />
      {children}
    </SoundProvider>
  );
}