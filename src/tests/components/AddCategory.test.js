import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";

describe("Testes no componente <AddCategory/>", () => {
  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test("Deve mostrar a categoria corretamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Deve mudar a caixa de texto", () => {
    const input = wrapper.find("input");
    const value = "Olá Mundo";

    input.simulate("change", {
      target: {
        value: value,
      },
    });

    expect(wrapper.find("p").text().trim()).toBe(value);
  });

  test("Não deve postar a informação com submit", () => {
    wrapper.find("form").simulate("submit", { preventDefault() {} });
    expect(setCategories).not.toHaveBeenCalled();
  });

  test("Deve chamar setCategories e limpar a caixa de texto", () => {
    const value = "Olá Mundo";
    // 1. simular o inputChange
    wrapper.find("input").simulate("change", { target: { value } });
    // 2. simular o submit
    wrapper.find("form").simulate("submit", { preventDefault() {} });
    // 3. setCategories deve ser chamado
    expect(setCategories).toHaveBeenCalled();
    expect(setCategories).toHaveBeenCalledTimes(1);
    expect(setCategories).toHaveBeenLastCalledWith(expect.any(Function));
    // 4. o valor do input deve estar vazio ''
    expect(wrapper.find("input").prop("value")).toBe("");
  });
});
