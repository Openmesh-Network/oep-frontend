import NextLink from "next/link"

export function Title({ children }: { children: any }) {
  return <span className="pt-12 text-3xl font-bold">{children}</span>
}

export function Subtitle({ children }: { children: any }) {
  return <span className="pt-6 text-xl font-bold">{children}</span>
}

export function Text({ children }: { children: any }) {
  return <span>{children}</span>
}

export function Link({ href, children }: { href: string; children: any }) {
  return (
    <NextLink className="text-blue-500" href={href} target="_blank">
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
