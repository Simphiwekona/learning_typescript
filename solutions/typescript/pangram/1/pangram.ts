export function isPangram(input: string): boolean {
  // So for understanding we first normalize the sentence and then we filter out non-letter like (spaces, numbers and punctuations)
  // and then we count unique letters
  return new Set(input.toLowerCase().match(/[a-z]/g)).size === 26
}
