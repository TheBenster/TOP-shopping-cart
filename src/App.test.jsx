import { render, screen} from "@testing-library/react";
import Navbar from "./components/Navbar";

describe('test test', () => {
    it('matches snapshot', () => {
        const nav = render(<Navbar/>);
        expect(nav).toMatchSnapshot();
    })
})