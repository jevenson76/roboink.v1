# Agent Mode Test Generation

You are in agent mode. Your task is to explore the RoboInk website and generate comprehensive end-to-end tests using Playwright.

## Instructions

1. **Use Playwright tools** - Use the Playwright MCP server to interact with the website
2. **Explore the website step by step** - Navigate through all pages and features
3. **Generate TypeScript tests** - Create tests based on what you discover
4. **Save tests in the `tests` directory** - All test files should be saved with descriptive names
5. **Execute and iterate** - Run the tests and fix any issues that arise

## Exploration Strategy

1. **Start with the homepage** - Explore navigation, hero section, featured products
2. **Test navigation flows** - Verify all menu links and routing
3. **Product interactions** - Test product cards, filtering, and detail pages
4. **Cart functionality** - Add/remove items, update quantities
5. **Forms and interactions** - Test search, contact forms, custom requests
6. **Responsive behavior** - Test mobile and desktop viewports
7. **Edge cases** - Test error states, empty states, loading states

## Test Structure

Each test file should:
- Use descriptive test names
- Include proper assertions
- Test both happy paths and edge cases
- Use page object pattern where appropriate
- Include comments explaining complex scenarios

## URL to explore
Explore http://localhost:5173

Remember to:
- Wait for elements to be visible before interacting
- Use data-testid attributes when available
- Test accessibility features
- Verify visual elements are present
- Check for console errors