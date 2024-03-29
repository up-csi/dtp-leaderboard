# DevCamp Leaderboard

| Name                         | GitHub         |
| ---------------------------- | -------------- |
| Sebastian Luis S. Ortiz      | [@BastiDood]   |
| Angelica Julianne A. Raborar | [@Anjellyrika] |

[@BastiDood]: https://github.com/BastiDood
[@Anjellyrika]: https://github.com/Anjellyrika

# Development

## Environment Variables

| Name                    | Description                                                                                     | Default                               |
| ----------------------- | ----------------------------------------------------------------------------------------------- | ------------------------------------- |
| `GITHUB_TOKEN`          | [GitHub API token][gh-api] used for querying additional user data.                              |
| `GOOGLE_TOKEN_URI`      | Obtained from the Google service account credentials.                                           | `https://oauth2.googleapis.com/token` |
| `GOOGLE_SPREADSHEET_ID` | Spreadsheet ID of the grading sheet.                                                            |
| `GOOGLE_NAMED_RANGE`    | Hard-coded named range used in the grading sheet.                                               | `all`                                 |
| `GOOGLE_EMAIL`          | Generated email obtained from the Google service account credentials.                           |
| `GOOGLE_PRIVATE_ID`     | ID of the service account's private key obtained from the Google service account credentials.   |
| `GOOGLE_PRIVATE_KEY`    | PKCS#8 private key of the service account obtained from the Google service account credentials. |

[gh-api]: https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens

## Running the Web Server

```bash
# Install the dependencies.
pnpm install

# Synchronize auto-generated files from SvelteKit.
pnpm sync

# Start the development server with live reloading + hot module replacement.
pnpm dev

# Compile the production build (i.e., with optimizations).
pnpm build

# Start the production preview server.
pnpm preview
```

## Linting the Codebase

```bash
# Check Formatting
pnpm fmt # prettier

# Apply Formatting Auto-fix
pnpm fmt:fix # prettier --write

# Check Linting Rules
pnpm lint:html   # linthtml
pnpm lint:css    # stylelint
pnpm lint:js     # eslint
pnpm lint:svelte # svelte-check

# Check All Lints
pnpm lint
```
