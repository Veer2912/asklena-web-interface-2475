import { Route, Switch } from "wouter";
import { AnimatePresence, motion } from "framer-motion";
import Index from "./pages/index";
import Features from "./pages/features";
import Solutions from "./pages/solutions";
import Pricing from "./pages/pricing";
import { Provider } from "./components/provider";

function App() {
        return (
                <Provider>
                        <AnimatePresence mode="wait">
                                <Switch>
                                        <Route path="/">
                                                {() => <PageWrapper><Index /></PageWrapper>}
                                        </Route>
                                        <Route path="/features">
                                                {() => <PageWrapper><Features /></PageWrapper>}
                                        </Route>
                                        <Route path="/solutions">
                                                {() => <PageWrapper><Solutions /></PageWrapper>}
                                        </Route>
                                        <Route path="/pricing">
                                                {() => <PageWrapper><Pricing /></PageWrapper>}
                                        </Route>
                                </Switch>
                        </AnimatePresence>
                </Provider>
        );
}

function PageWrapper({ children }: { children: React.ReactNode }) {
        return (
                <motion.div
                        initial={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
                        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                        exit={{ opacity: 0, scale: 1.02, filter: "blur(10px)" }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                        {children}
                </motion.div>
        );
}

export default App;
