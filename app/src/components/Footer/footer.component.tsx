import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-secondary text-white p-4">
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h4 className="text-lg font-bold border-b-2 border-amber-50 w-fit mb-2">
            About Us
          </h4>
          <p className="text-sm">
            SkinMama is a platform that provides personalized skincare routines,
            skin analysis tools, and smart skincare products.
          </p>
        </div>

        <div className="flex flex-col">
          <div className="text-lg font-bold mb-2 border-b-2 border-amber-50 w-fit">
            Download App
          </div>
          <div className="flex flex-row md:flex-col gap-2">
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
          <div className="text-lg font-bold mb-2 border-b-2 border-amber-50 w-fit">
            Follow On
          </div>
          <div className="flex flex-col gap-2">
            <Link
              href="https://www.instagram.com/skinmamaapp/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-amber-300 transition-colors"
            >
              <span>Instagram</span>
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
