export default {
  server: {
    host: true,          // (allow) 0.0.0.0 inside container
    port: 5173,          // (fixed) match EXPOSE/compose
    strictPort: true,    // (fail fast) no silent port change
  },
};
