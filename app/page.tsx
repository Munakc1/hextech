import React from "react";
import Footer from "./components/Footer";

export default function Home(): React.ReactElement {
  return React.createElement(
    'div',
    { className: 'min-h-screen bg-black p-[35px]' },
    React.createElement(
      'div',
      { className: 'border border-black rounded-md' },
      React.createElement(
        'div',
        {
          className: 'border rounded-md',
          style: { borderColor: '#bcaaa4' }
        },
        React.createElement(
          'div',
          {
            className:
              'bg-black text-black grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-sans'
          },
          // main content
          React.createElement(
            'main',
            {
              className:
                'flex flex-col gap-[32px] row-start-2 items-center sm:items-start w-full'
            },
            React.createElement('p', { className: 'text-white' }, 'Hello World')
          ),
          // footer
          React.createElement(
            'footer',
            { className: 'row-start-3 w-full' },
            React.createElement(Footer)
          )
        )
      )
    )
  );
}
