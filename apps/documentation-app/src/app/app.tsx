import { Button } from "@albanese-ui/button";
import { Footer } from "@albanese-ui/footer";
import { Header } from "@albanese-ui/header";

export function App() {
    return (
        <>
            <Header title="albanese-ui" >
                <Button label="Login" variant="outline" />
                <Button label="Sign Up" />
            </Header>
            
            <Footer text="© 2025 Albanese UI">
                <Button label="Privacy Policy" variant="ghost"/>
                <Button label="Contacts" variant="ghost"/>
            </Footer>
        </>
    )
}

export default App;
