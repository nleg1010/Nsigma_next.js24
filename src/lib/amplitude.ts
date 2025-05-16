// lib/amplitude.ts
import * as amplitude from "@amplitude/analytics-browser";

const AMPLITUDE_API_KEY = process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY!;

export const initAmplitude = () => {
  amplitude.init(AMPLITUDE_API_KEY, {
    autocapture: {
      elementInteractions: true,
    },
  });
};
