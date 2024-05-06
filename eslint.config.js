import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  {languageOptions: { globals: globals.node }},
  pluginJs.configs.recommended,
  {
    ignores: [
      "node_modules",
      "mochawesome-report",
      "coverage"
    ]
  }
];