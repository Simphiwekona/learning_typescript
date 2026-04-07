export function format(name: string, number: number): string {
  // So we have to get the name 
  // Condition to check the last number 
  // return a sentence with name, number and sufix of the number

  const surfix = number % 100 >= 11 && number % 100 <= 13 ? 'th' : ['th', 'st', 'nd', 'rd'][number % 10] || 'th';

   return `${name}, you are the ${number}${surfix} customer we serve today. Thank you!`
  
}
