import Image from 'next/image';
import logoLight from '../public/logo-light.png';

export default function LogoLight() {
  return (
    <Image
      src={logoLight}
      alt="LeCLUB"
      width={120}
      height={40}
    />
  )
}