import { render, screen,fireEvent } from "@testing-library/react"
import React from 'react';
import userEvent from '@testing-library/user-event' 
import App from "./App"
import { expect, vi } from "vitest"
const onShowDetails = vi.fn();
describe("App", () => {
// test("first test", () => {
// render(<App />)
// const linkElement = screen.getByText(/Generated QR Code/i)
// expect(linkElement).toBeInTheDocument()
// })
// test('Button component renders correctly', () => {
//     render(<App />);
//     const inputElement = screen.getByPlaceholderText('Enter URL');
//     const generateButton = screen.getByText('Generate QR Code');
  
//     expect(inputElement).toBeInTheDocument();
//     expect(generateButton).toBeInTheDocument();
//   });
//   test("button is clicked using userEvent", async () => {
//     const user = userEvent.setup()
//     render(<App />)
//     const buttonElement = screen.getByRole("button",{name:"show deateiles"})
//     await user.click(buttonElement);
//     const linkElement = screen.getByText(/27.9.2023, 15:27:04/i)
//     expect(linkElement).toBeInTheDocument()
//     });
test('Button component renders correctly', () => {
    render(<App />);
    const inputElement = screen.getByPlaceholderText('Enter URL');
    const generateButton = screen.getByText('QR code');
    const showDetailsButton = screen.getByText('show deateiles');
  
    expect(inputElement).toBeInTheDocument();
    expect(generateButton).toBeInTheDocument();
    expect(showDetailsButton).toBeInTheDocument();
  });
  test('Button component generates QR code on button click', async () => {
    render(<App />);
    const inputElement = screen.getByPlaceholderText('Enter URL');
    const generateButton = screen.getByText('QR code');
    userEvent.type(inputElement, 'https://example.com');
    userEvent.click(generateButton);
    const qrCodeImage = await screen.findByAltText('QR Code');
    expect(qrCodeImage).toBeInTheDocument();
  });

})

