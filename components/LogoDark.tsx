import Image from 'next/image';
import logoDark from '../public/logo-dark.png';

export default function LogoDark() {
  return (
    <Image
      src={logoDark}
      alt="LeCLUB"
      width={170}
      height={52}
    />
  )
}