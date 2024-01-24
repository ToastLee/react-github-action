import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('the counter start at 0', () => {
  render(<App />);
  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent(0);
});

//플러스 마이너스 버튼 존재하는지 테스트
test('minus button has correct text', () => {
  render(<App/>);
  const buttonElement = screen.getByTestId("minus-button");
  expect(buttonElement).toHaveTextContent("-");
})

test('plus button has correct text', () => {
  render(<App/>);
  const buttonElement = screen.getByTestId("plus-button");
  expect(buttonElement).toHaveTextContent("+");
})

//플러스 마이너스 기능 제대로 작동하는지 테스트
test('When the + button is pressed, the counter changes to 1', () => {
  render(<App/>);
  const buttonElement = screen.getByTestId("plus-button");
  fireEvent.click(buttonElement);
  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent(1);
})

test('When the - button is pressed, the counter changes to -1', () => {
  render(<App/>);
  const buttonElement = screen.getByTestId("minus-button");
  fireEvent.click(buttonElement);
  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent(-1);
})

//on/off 버튼인지 테스트
test('on/off button has blue color', () => {
  render(<App/>);
  const buttonElement = screen.getByTestId("on/off-button");
  expect(buttonElement).toHaveStyle({backgroundColor: "blue"});
})

//on/off 버튼 누르면 +,-버튼이 비활성 되는지 테스트
test("Prevent the -,+ button from being pressed when the on/off button is clicked", () => {
  render(<App/>);
  const onOffbuttonElement = screen.getByTestId("on/off-button");
  fireEvent.click(onOffbuttonElement);
  const plusButtonElement = screen.getByTestId("plus-button");
  const minusButtonElement = screen.getByTestId("minus-button");
  expect(plusButtonElement).toBeDisabled();
  expect(minusButtonElement).toBeDisabled();
})

