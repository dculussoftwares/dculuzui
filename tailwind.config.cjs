module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './.storybook/**/*.{js,jsx,ts,tsx,mdx}'
  ],
  safelist: [
    {
      pattern: /./
    },
  ],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
  plugins: [require("dculusux")],
  dculusux: {
    themes: [
      {
        light: {
          primary: '#f8300d',
          'primary-focus': '#cb7906',
          'primary-content': '#4b1111',

          secondary: '#366cc4',
          'secondary-focus': '#313cdd',
          'secondary-content': '#913b3b',

          accent: '#37cdbe',
          'accent-focus': '#2ba69a',
          'accent-content': '#ffffff',

          neutral: '#3b424e',
          'neutral-focus': '#2a2e37',
          'neutral-content': '#ffffff',

          'base-100': '#ffffff',
          'base-200': '#f9fafb',
          'base-300': '#ced3d9',
          'base-content': '#1e2734',

          info: '#1c92f2',
          success: '#009485',
          warning: '#ff9900',
          error: '#ff5724',

          '--rounded-box': '0.1rem',
          '--rounded-btn': '0.1rem',
          '--rounded-badge': '1.9rem',

          '--animation-btn': '0.25s',
          '--animation-input': '0.2s',

          '--btn-text-case': 'uppercase',
          '--navbar-padding': '0.5rem',
          '--border-btn': '1px'
        }
      }
    ]
  }
}
