import { render } from "@testing-library/react";
import Enzyme, { shallow } from "enzyme";
import ItemService from "./index";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("<ItemService />", () => {
  const initialProps = {
    data: {
      front_queue_active: {
        checkin: "1",
        new: "1",
      },
    },
    index: 0,
    category: "kesehatan",
  };
  it("check object is true value", () => {
    const container = shallow(<ItemService {...initialProps} />);
    expect(container).toMatchSnapshot();
  });
});
