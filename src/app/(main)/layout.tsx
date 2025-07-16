export default function MainLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <div>main</div>
      {children}
    </div>
  )
}
