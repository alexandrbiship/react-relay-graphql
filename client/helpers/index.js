export const isMobile = () => screen.width < 728;

const removeNewLine = input => input.replace(/\n/g, '');

const reduceToSingleSpace = input => input.replace(/ +(?= )/g, '');

const removeSpaceBeforeNonWord = input => input.replace(/ (?!\w)/g, '');

const removeSpaceAfterBracket = input => input.replace(/\{ /g, '{');

export const minifyRelayQuery = input => removeSpaceAfterBracket(removeSpaceBeforeNonWord(removeNewLine(reduceToSingleSpace(input))));
