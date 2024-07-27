import Logo from "@/components/Logo";
import Header from "./_components/Header";

export default function Layout({ children }) {
    return(
        <main>
            <Header/>
            {children}
            <div className="mt-20 mb-8 grid place-content-center text-center">
                <Logo />
                <p className="text-xs">Created by by <a href="https://github.com/DanielMajolagbe">D⚡</a></p>
            </div>
        </main>
    )
}