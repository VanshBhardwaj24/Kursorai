/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#1e293b",
          "200": "#15202b",
          "300": "#111827",
          "400": "#0f172a",
          "500": "rgba(255, 255, 255, 0)",
        },
        blueviolet: {
          "100": "#7c3aed",
          "200": "rgba(126, 34, 206, 0.3)",
          "300": "rgba(126, 34, 206, 0.9)",
        },
        whitesmoke: {
          "100": "#f7f9f9",
          "200": "#f7f7f7",
          "300": "#f3f4f6",
        },
        aliceblue: "#f1f5f9",
        darkslategray: {
          "100": "#425364",
          "200": "#374151",
          "300": "#334155",
        },
        white: "#fff",
        mediumslateblue: {
          "100": "#8b5cf6",
          "200": "#5865f2",
        },
        lightskyblue: "#6bc9fb",
        lightslategray: "#8b98a5",
        darkorchid: "#5b21b6",
        lavender: "#ede9fe",
        black: "#000",
      },
      fontFamily: {
        inter: "Inter",
        roboto: "Roboto",
      },
      borderRadius: {
        "8xs-8": "4.8px",
        "9980xl": "9999px",
      },
    },
    fontSize: {
      mini: "15px",
      smi: "13px",
      xs: "12px",
      sm: "14px",
      "15xl": "34px",
      base: "16px",
      "25xl": "44px",
      lgi: "19px",
      xl: "20px",
      mid: "17px",
      "3xl": "22px",
      "2xs": "11px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
