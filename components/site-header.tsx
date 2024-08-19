export function SiteHeader() {
  return (
    <header className="top-0 z-40 w-full bg-transparent">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1 rounded-md bg-black/80">
            <w3m-button />
          </nav>
        </div>
      </div>
    </header>
  )
}
