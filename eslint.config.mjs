// eslint.config.mjs
import { defineConfig } from "eslint/config";
import next from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import globals from "globals";

export default defineConfig([
    // Base rules dari Next.js (termasuk React & JSX)
    ...next,

    // Tambahan TypeScript rules
    ...nextTs,

    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
        ignores: [
            // Folder hasil build
            ".next/**",
            "out/**",
            "build/**",
            // File environment
            "next-env.d.ts",
            // Opsional: hapus kalau kamu mau lint test files juga
            "**/*.test.*",
            "**/__tests__/**",
        ],
        rules: {
            // ✅ Tambahan rekomendasi
            "react-hooks/exhaustive-deps": "warn",
            "@next/next/no-img-element": "off",
            "@typescript-eslint/no-unused-vars": [
                "warn",
                { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
            ],
            "no-console": ["warn", { allow: ["warn", "error"] }],
        },
    },
]);