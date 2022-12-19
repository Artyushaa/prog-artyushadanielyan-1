import Header from "../components/Header";
export default function Layout({ children }) {
    return (
        <>
            <div className="wrapper">
                <Header />
                {children}
            </div>
        </>
    )
}