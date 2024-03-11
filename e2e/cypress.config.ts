import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run ker1n:serve:development',
        production: 'nx run ker1n:serve:production',
      },
      ciWebServerCommand: 'nx run ker1n:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
