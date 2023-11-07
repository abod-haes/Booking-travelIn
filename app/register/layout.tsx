import "react-toastify/dist/ReactToastify.css"

export const metadata = {
    title: "Simple TodoApp",
    description: "simple todo app for learning next js 13",
}

export default function RegisterLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
            <main>{children}</main>
    )
}
