import dts from 'bun-plugin-dts';

await Bun.build({
  entrypoints: ['./src/index.ts'],
  outdir: './dist',
  minify: true,
  splitting: false,
  sourcemap: 'external',
  target: 'node',
  plugins: [dts()],
}).catch(console.error)
