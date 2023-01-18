import Header from "../components/Header/Header";
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