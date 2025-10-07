const Footer = () => {
  return (
    <footer className="bg-green-900 text-white text-center py-3 mt-auto">
      <div className="container mx-auto">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Pamantasan ng Cabuyao. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
