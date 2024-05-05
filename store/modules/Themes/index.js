export const Themes = {
  namespaced: true,
  state: {
    types: [
      { name: 'Светлая тема', type: 'light' },
      { name: 'Темная тема', type: 'dark' },
    ],
    currentTheme: 'light',
    systemTheme: 'light',
  },
  actions: {
    changeTheme(ctx){
      ctx.state.types.push(ctx.state.types.shift())
      ctx.state.currentTheme = ctx.state.types[0].type;
    },
    setTheme(ctx, theme){
      ctx.state.currentTheme = theme;
    },
    loadTheme(ctx){
      let setSystemTheme = () => {
        let systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        ctx.state.systemTheme = systemTheme;
        ctx.dispatch('setTheme', systemTheme)
      }
      window.matchMedia('(prefers-color-scheme: dark)').addListener(function () {
        setSystemTheme()
      });
      setSystemTheme()
    },
  },
  getters: {
    CurrentTheme: (state) => state.currentTheme,
  },
};
