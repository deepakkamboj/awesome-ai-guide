import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span style={{ fontWeight: "bold" }}>Awesome AI Guide</span>,
  project: {
    link: "https://github.com/deepakkamboj/awesome-ai-guide",
  },
  chat: {
    link: "https://discord.com",
  },
  docsRepositoryBase: "https://github.com/deepakkamboj/awesome-ai-guide",
  footer: {
    text: "Nextra Docs Template",
  },
};

export default config;
