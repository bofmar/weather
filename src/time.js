import { fromUnixTime } from 'date-fns';

function format(str) {
  let arr = str.split(' ');
  return arr.splice(0, 5).join(' ');
}

export default function getTime(unix) {
  return format(fromUnixTime(unix).toString());
}

