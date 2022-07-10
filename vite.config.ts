import path from "path"
import { defineConfig } from "vite"
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    outDir: "./dist",
    emptyOutDir: true,
    target: "esnext",
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "Gastore plugin Solid",
      fileName: "gastore-plugin-solid",
    },
  },
  plugins: [dts({
    outputDir: "./dist/types"
  })]
})
