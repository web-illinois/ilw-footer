import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
    root: "src",
    build: {
        outDir: "../dist",
        lib: {
            name: "ilw-footer",
            entry: "ilw-footer.ts",
            fileName: "ilw-footer",
            formats: ["es"],
        },
        rollupOptions: {
            external: [/^@?lit/],
            output: {
                assetFileNames: () => {
                    return "[name][extname]";
                },
            },
        },
    },
    server: {
        hmr: false,
    },
    plugins: [dts()],
});