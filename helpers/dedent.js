const dedent = input => {
  let inputString = input;
  inputString = inputString.replace(/\s+\n/g, '\n'); // remove trailing whitespace
  inputString = inputString.replace(/[\t]+/g, '  '); // replace tabs with double spaces
  const lines = inputString.split(/\n/);
  // save indented spaces in matches array
  const matches = [];
  for (let i = 0; i < lines.length; i += 1) {
    const match = /^\s+/.exec(lines[i]);
    if (match) {
      matches.push(...match);
    } else if (lines[i].length) {
      return inputString;
    };
  }
  // find and remove common indentation from input string
  const newString = [];
  const size = Math.min(...matches.map(value => value.length));
  // const pattern = new RegExp('^\\s{' + size + '}');
  const pattern = new RegExp(`^\\s{${size}}`);
  lines.forEach(line => {
    const str = line.split(pattern);
    newString.push(str[str.length - 1]);
  });
  return newString.join('\n');
};

export default dedent;
