import { Button } from "@albanese-ui/button";
import { Header } from "@albanese-ui/header";

export function App() {
    return (
        <>
            <Header title="albanese-ui" >
                <Button label="Login" variant="outline" />
                <Button label="Sign Up" />
            </Header>
        </>
    )

}

export default App;
