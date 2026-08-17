export function SimpleFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-10 px-[6vw] border-t border-border text-center">
      <p className="text-nav text-muted m-0">
        &copy; {year} Valeria Velasco Photography. All rights reserved.
      </p>
    </footer>
  );
}
