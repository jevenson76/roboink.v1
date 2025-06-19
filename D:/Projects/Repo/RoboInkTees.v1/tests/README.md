# RoboInk Playwright Tests

This directory contains automated tests for the RoboInk website using Playwright with MCP (Model Context Protocol) integration.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Install Playwright browsers:
   ```bash
   npx playwright install
   ```

3. Install system dependencies (if on Linux):
   ```bash
   sudo npx playwright install-deps
   ```

## Running Tests

### Run all tests
```bash
npm test
```

### Run tests in UI mode (recommended for exploration)
```bash
npm run test:ui
```

### Run exploration tests with browser visible
```bash
npm run test:explore
```

### View test report
```bash
npm run test:report
```

## MCP Integration

The project is configured to use Playwright MCP for AI-assisted test generation:

1. **MCP Configuration**: Located in `.vscode/mcp.json`
2. **Test Generation Prompt**: Located in `.github/generate_tests.prompt.md`

To use MCP for test generation in VS Code:
1. Open the command palette (Ctrl/Cmd + Shift + P)
2. Select "Agent Mode"
3. Use the prompt: `Explore http://localhost:5173`

## Test Structure

- `exploration.spec.ts` - Explores the site structure and generates test ideas
- `roboink-navigation.spec.ts` - Tests main navigation functionality
- `roboink-products.spec.ts` - Tests product display and interactions

## Writing New Tests

When writing new tests:
1. Use descriptive test names
2. Include proper assertions
3. Test both happy paths and edge cases
4. Add comments for complex scenarios
5. Use data-testid attributes when available

## Screenshots

Test screenshots are saved in `tests/screenshots/` directory during exploration tests.