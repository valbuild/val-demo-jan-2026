import { initVal } from "@valbuild/next";

const { s, c, val, config, nextAppRouter } = initVal({
  project: "valbuild/val-demo-jan-2026",
  gitBranch: process.env.VERCEL_GIT_COMMIT_REF,
  gitCommit: process.env.VERCEL_GIT_COMMIT_SHA,
  defaultTheme: "dark",
});

export type { t } from "@valbuild/next";
export { s, c, val, config, nextAppRouter };
