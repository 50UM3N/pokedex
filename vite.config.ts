import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslintPlugin from "vite-plugin-eslint"; // for showing the linting in console at build time as well as dev time.
import dotenv from "dotenv";
import * as path from "path";

const dotEnvReplacement = (env: { [key: string]: string }) => {
    const replacements = Object.entries(env).reduce((obj, [key, val]) => {
        obj[`process.env.${key}`] = `"${val}"`;
        return obj;
    }, {});

    return {
        name: "dotenv-replacement",
        config(obj) {
            obj.define = obj.define || {};
            Object.assign(obj.define, replacements);
        },
    };
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    let env = null;
    switch (mode) {
        case "development":
            env = dotenv.config().parsed;
            break;
        case "production":
            env = dotenv.config({ path: "./.env.prod" }).parsed;
            break;
        case "staging":
            env = dotenv.config({ path: "./.env.staging" }).parsed;
            break;
        default:
            env = dotenv.config({ path: "./.env.staging" }).parsed;
            break;
    }
    env = { MODE: mode, ...env };
    return {
        plugins: [react(), eslintPlugin(), dotEnvReplacement(env)],
        resolve: {
            alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
        },
    };
});
