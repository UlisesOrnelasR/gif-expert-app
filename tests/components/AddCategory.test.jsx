import { render, screen, fireEvent } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe("Pruebas al componente <AddCategory />", () => {
  test("Debe de cambiar el valor de la caja de texto", () => {});

  render(<AddCategory onNewCategory={() => {}} />);
  const input = screen.getByRole("textbox");
  fireEvent.input(input, { target: { value: "Naruto" } });
  expect(input.value).toBe("Naruto");
});
