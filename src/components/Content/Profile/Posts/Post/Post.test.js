import { create, act } from "react-test-renderer";
import { PostContent, PostHeader } from "./Post";

describe("PostHeader component", () => {
  test("img tag source should be correct", () => {
    let component;
    act(() => {
      component = create(
        <PostHeader authorPhoto="photo" authorName="" dateCreated="" />
      );
    });
    const instance = component.root;
    const image = instance.findByType("img");
    expect(image.props.src).toBe("photo");
  });

  test("img tag source should be correct when prop is null", () => {
    let component;
    act(() => {
      component = create(
        <PostHeader authorPhoto={null} authorName="" dateCreated="" />
      );
    });
    const instance = component.root;
    const image = instance.findByType("img");
    expect(image.props.src).toBe(
      "https://cdn1.iconfinder.com/data/icons/avatars-1-5/136/84-512.png"
    );
  });
});

describe("PostContent component", () => {
  test("img tag should be hidden", () => {
    let component;
    act(() => {
      component = create(<PostContent content={{ text: null, image: null }} />);
    });
    const instance = component.root;
    expect(() => {
      instance.findByType("img");
    }).toThrow();
  });
});
