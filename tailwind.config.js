/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  // ? kendi theme ayarlarimizi eklemek icin bu kismi ekliyoruz.
  theme: {
    //! eğer tailwind'in default theme ayarları yerine kendimizinkini eklemek istemiyorsak mutlaka extend objesi içinde eklememiz gerekli yoksa tüm theme objesi değişir ve kendi eklediklerimiz dışındakileri kullanamayız.
    // ! extend icine ekledigimiz theme ler: sadece benim ekledigim css ler degil tailwind icinde benim css lerimde kullanilsin diye ekliyoruz.Extend disinda yazilanlar sadece eklenilen theme ayarlarini gosterir
    extend: {
      colors: {
        "gray-dark-main": "#23242a",
        "gray-dark-second": "#28292d",
        "gray-light": "#d3dce6",
        "red-main": "#ff4b45",
      },
    },
  },

  plugins: [],
  darkMode: "class",
};
