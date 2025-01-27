// Charka extendTheme.
import { extendTheme } from "@chakra-ui/react";

// Import override modules.
import breakpoints from './breakpoints';
import styles from './styles';
import fonts from './fonts';

// Import component overrides.
import Button from './components/button';
import List from "./components/list";
import Link from "./components/link";
import Input from './components/input';

// Custom app theme overrides.

// TODO: figure out correct typing for override. If any is not added causes VSCode to yell at me.
const overrides : any = {
    styles,
    breakpoints,
    fonts,
    components: {
        Button,
        List,
        Link,
        Input
    }
};

export default extendTheme(overrides);