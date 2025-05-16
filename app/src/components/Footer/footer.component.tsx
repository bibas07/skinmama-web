import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-secondary text-white p-4">
      <div className="w-full grid grid-row md:grid-cols-3 gap-6">
        <div>
          <h4 className="text-lg font-bold w-full mb-2 text-center md:text-left">
            About Us
          </h4>
          <p className="text-sm">
            SkinMama is a platform that provides personalized skincare routines,
            skin analysis tools, and smart skincare products.
          </p>
        </div>

        <div className="flex flex-col">
          <div className="flex flex-row md:flex-col gap-4">
            <Link
              href="https://play.google.com/store/apps/details?id=com.skincare.skinai"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/google-play.png"
                alt="Google Play"
                width={120}
                height={40}
                className="object-contain"
              />
            </Link>
            <Link
              href="https://apps.apple.com/app/id6744535277"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/app-store.svg"
                alt="App Store"
                width={108}
                height={35}
                className="object-contain md:w-[120px]"
              />
            </Link>
          </div>
        </div>

        <div>
          <div className="text-lg font-bold mb-2 w-fit">Follow On</div>
          <div className="flex flex-row gap-2">
            <Link
              href="http://instagram.com/skinmama_ai?igsh=b3djYnVjZ3FtbGFp&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-amber-300 transition-colors"
            >
              <Image
                src={'/instagram.png'}
                alt="Instagram"
                width={30}
                height={30}
                className="rounded-full"
              />
            </Link>
            <Link
              href="https://www.tiktok.com/@skinmama.ai?_t=ZS-8w4K7weBemV&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-amber-300 transition-colors"
            >
              <Image
                src={'/tiktok.png'}
                alt="tiktok"
                width={50}
                height={50}
                className="rounded-full"
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-4 pt-2 border-t border-amber-50/30 text-center text-xs">
        © {new Date().getFullYear()} SkinMama. All rights reserved.
      </div>
    </footer>
  );
}
