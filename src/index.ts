import { greet } from './greetings';
import { userInfo } from 'os';

const hours = new Date().getHours();

const username: string =
  process.argv[2] || userInfo({ encoding: 'utf8' }).username;

console.log(greet((daytime) => `Good ${daytime}, ${username}!`, hours));
