import type { LayoutLoad } from "./$types";

export const load: LayoutLoad = async (e) => {
  return {
    message: 'LayoutLoad data from routes/+layout.ts'
  }
};