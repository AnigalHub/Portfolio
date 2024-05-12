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
      const nextTheme = ctx.state.types.find(x=>x.type !== ctx.state.currentTheme)
      ctx.state.currentTheme = nextTheme.type;
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
