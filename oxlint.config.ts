import { defineConfig } from "oxlint";
import core from "ultracite/oxlint/core";
import { selectJsPlugins } from "ultracite/oxlint/js-plugins";
import antiSlop from "ultracite/oxlint/anti-slop";

const jsPlugins = selectJsPlugins(["jsdoc-js", "sonarjs", "github"]);

export default defineConfig({
  env: core.env,
  extends: [core, jsPlugins, antiSlop],
  ignorePatterns: core.ignorePatterns,
  jsPlugins: jsPlugins.jsPlugins,
  options: { typeAware: true },
});
