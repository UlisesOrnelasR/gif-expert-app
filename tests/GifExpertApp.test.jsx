import { render } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe("Prebas en el componente <GifExpertApp />", () => {
  test("Deberia hacer match con el snapshot", () => {
    const { contaienr } = render(<GifExpertApp />);
    expect(contaienr).toMatchSnapshot();
  });
});
