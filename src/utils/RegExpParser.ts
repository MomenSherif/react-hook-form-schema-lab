export default function RegExpParser(string: string): RegExp {
  const matches = string.match(/(\/?)(.+)\1([a-z]*)/i) as Array<string>;

  const regexpString = matches[2];
  const flags = matches[3];

  // invalid flags
  if (flags && !/^(?!.*?(.).*?\1)[gmixXsuUAJ]+$/.test(flags))
    return RegExp(string);

  return RegExp(regexpString, flags);
}
