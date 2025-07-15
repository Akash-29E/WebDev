import {franc} from 'franc'
import langs from 'langs'

const input = process.argv[2];
console.log(input);
const langcode = franc(input);
console.log(langcode);
const language = langs.where("3", langcode).name;
console.log(`Input language: ${language}`);

