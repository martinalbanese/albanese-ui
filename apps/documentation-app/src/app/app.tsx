import { Button } from "@albanese-ui/button";
import { Footer } from "@albanese-ui/footer";
import { Header } from "@albanese-ui/header";
import { Hero } from "@albanese-ui/hero";

export function App() {
    return (
        <>
            <Header title="albanese-ui" >
                <Button label="Login" variant="outline" />
                <Button label="Sign Up" />
            </Header>

            <div>
                <Hero
                    title="Benvenuti in Albanese UI!"
                    subtitle="Una libreria di componenti UI facili da usare"
                >
                    <Button label="Scopri di più" variant="solid" />
                </Hero>
            </div>

            <Footer text="© 2025 Albanese UI">
                <Button label="Privacy Policy" variant="ghost" />
                <Button label="Contacts" variant="ghost" />
            </Footer>
        </>
    )
}

export default App;
