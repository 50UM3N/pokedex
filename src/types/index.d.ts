declare namespace process {
    let env: {
        ENV_MODE: string;
        APP_BASE_API: string;
        APP_URL: string;
        MODE: "development" | "production";
    };
}
