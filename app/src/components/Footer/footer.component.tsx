export function Footer() {
  return (
    <footer className="bg-secondary text-white py-4 mt-6">
      <div className="grid md:grid-cols-3 gap-8 grid-cols-1">
        <div className="container mx-auto text-center">
          <p>
            &copy; {new Date().getFullYear()} SkinMama. All rights reserved.
          </p>
        </div>
        <div className="container mx-auto text-center">
          <p>Privacy Policy</p>
        </div>
        <div className="container mx-auto text-center">
          <p>Terms and Conditions</p>
        </div>
      </div>
    </footer>
  );
}
