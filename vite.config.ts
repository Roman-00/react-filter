import { defineConfig } from 'vite';
import { fileURLToPath } from 'url';
import react from '@vitejs/plugin-react';

/**
 * Конфигурация приложения
 *
 * @link https://vitejs.dev/config/
 */
export default ({ mode }: { mode: string }) => {
    return defineConfig({
        plugins: [react()],
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url))
            }
        },
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `
                        @import "@/assets/scss/_variables.scss";
                        @import "@/assets/scss/_mixins.scss";`,
                    math:              'always',
                    javascriptEnabled: true,
                }
            },
        },
    })
};
