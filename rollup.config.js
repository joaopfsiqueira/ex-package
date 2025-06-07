import typescript from 'rollup-plugin-typescript2';
import del from 'rollup-plugin-delete';
export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'lib/index.cjs', // CommonJS format for Node.js compatibility
      format: 'cjs'
    },
    {
      file: 'lib/index.esm.js', // ES module format for modern JavaScript environments
      format: 'esm'
    }
  ],
  plugins: [
    del({
      targets: 'lib/*'
    }),
    typescript({useTsconfigDeclarationDir: true}) // Use TypeScript plugin to compile TypeScript files
  ],
}