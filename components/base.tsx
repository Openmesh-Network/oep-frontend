import NextLink from "next/link"

export function Title({ children, id }: { children: any; id?: string }) {
  return (
    <span id={id} className="pt-12 text-3xl font-bold">
      {children}
    </span>
  )
}

export function Subtitle({ children }: { children: any }) {
  return <span className="pt-6 text-xl font-bold">{children}</span>
}

export function Text({
  children,
  className,
}: {
  children: any
  className?: string
}) {
  return <span className={className}>{children}</span>
}

export function Link({ href, children }: { href: string; children: any }) {
  return (
    <NextLink
      className="text-blue-600 hover:text-blue-800 underline"
      href={href}
      target="_blank"
    >
      {children}
    </NextLink>
  )
}

export function ListItem({ children }: { children: any }) {
  return (
    <>
      <span>- {children}</span>
      <br />
    </>
  )
}
