interface LayoutProps {
    children: React.ReactNode;
    title: string;
}

export function Layout({ children, title }: LayoutProps) {
    return (
        <>
            <title>{title}</title>
            {children}
        </>
    );
}
