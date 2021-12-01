import React from "react";
import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe("Provas no <GifGridItem/>", () => {
  const title = "Um título";
  const url = "https://localhost/gif.jpg";
  const wrapper = shallow(<GifGridItem title={title} url={url} />);

  test("deve mostrar o componente corretamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("deve ter um parágrafo com o título", () => {
    const p = wrapper.find("p");
    expect(p.text().trim()).toBe(title);
  });

  test("deve ter uma imagem igual a url e alt dos props", () => {
    const img = wrapper.find("img");
    // console.log(img.html());
    expect(img.prop("src")).toBe(url);
    expect(img.prop("alt")).toBe(title);
  });

  test("deve ter um animate__fadeIn", () => {
    const div = wrapper.find("div");
    const className = div.prop("className");

    expect(className.includes("animate__fadeIn")).toBe(true);
  });
});
