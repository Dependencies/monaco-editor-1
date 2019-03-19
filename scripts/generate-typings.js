const fs = require('fs');

const args = process.argv.slice(2);
const outputPath = args[0];

if (!outputPath) {
  process.stderr.write('No output filename specified\n');
  process.exit(1);
}

const typingsPath = require.resolve('monaco-editor/monaco.d.ts');
const exportDeclaration = 'export = monaco;';

const typingsSource = fs.readFileSync(typingsPath, 'utf8');
const outputSource = `${typingsSource}\n\n${exportDeclaration}\n`;

fs.writeFileSync(outputPath, outputSource);
