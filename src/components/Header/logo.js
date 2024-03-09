import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/logo.png';

const Logo = () => {
    return (
        <Link href="/" className="flex py-6 items-center text-dark dark:text-light">
            <div className=" w-8 sm:w-12 overflow-hidden mr-2 md:mr-4">
                <Image
                    src={logo}
                    alt="Cubesic logo"
                    className="w-full h-full"
                    sizes="20vw"
                    priority
                />
            </div>
            <span className="font-bold dark:font-semibold text-xl md:text-xl">
                Cubesic
            </span>
        </Link>
    );
};

export default Logo;
