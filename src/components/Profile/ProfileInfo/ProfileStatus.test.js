import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("Profile-status  component", () => {
  test("status from props should be in the state)", () => {
    const component = create(<ProfileStatus status = "its my new status"/>);
    const instance = component.getInstance();
    expect(instance.state.status).toBe('its my new status')
  });

  test("after creation span shold be displayed", () => {
    const component = create(<ProfileStatus status = "its my new status"/>);
    const root = component.root;
    let span = root.findAllByType("span");
    expect(span.length).toBe(1);
  });

  test("after creation span shold correct status", () => {
    const component = create(<ProfileStatus status = "its my new status"/>);
    const root = component.root;
    let span = root.findByType("span");
    expect(span.children[0]).toBe("its my new status");
  });

  test("input shold be displayed in editmode instead of span", () => {
    const component = create(<ProfileStatus status = "its my new status"/>);
    const root = component.root;
    let span = root.findByType("span");
    span.props.onDoubleClick();
    let input = root.findByType('input')
    expect(input.props.value).toBe("its my new status");
  });

  test("callback shold be called", () => {
    const mockCallback = jest.fn();
    const component = create(<ProfileStatus status = "its my new status" updateStatus ={mockCallback}/>);
    const instance = component.getInstance();
    instance.deactiveEditMode();
    expect(mockCallback.mock.calls.length).toBe(1);
  });
});