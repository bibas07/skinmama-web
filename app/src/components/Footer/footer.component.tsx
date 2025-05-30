import { Instagram } from "lucide-react";
import React from "react";
import { FaTiktok } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-rose-400">SkinMama</h3>
            <p className="text-neutral-400 text-sm">
              SkinMama is a platform that provides personalized skincare
              routines, skin analysis tools, and smart skincare products.
            </p>
            <div className="flex space-x-4">
              <a
                href="http://instagram.com/skinmama_ai?igsh=b3djYnVjZ3FtbGFp&utm_source=qr"
                className="text-neutral-400 hover:text-rose-400 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.tiktok.com/@skinmama.ai?_t=ZS-8w4K7weBemV&_r=1"
                className="text-neutral-400 hover:text-rose-400 transition-colors"
              >
                <FaTiktok className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-neutral-400 hover:text-rose-400 transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-neutral-400 hover:text-rose-400 transition-colors"
                >
                  How it Works
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-neutral-400 hover:text-rose-400 transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-neutral-400 hover:text-rose-400 transition-colors"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-neutral-400 hover:text-rose-400 transition-colors"
                >
                  About Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-neutral-400 hover:text-rose-400 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-neutral-400 hover:text-rose-400 transition-colors"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-800">
          <p className="text-center text-neutral-400 text-sm">
            © {new Date().getFullYear()} SkinMama. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
