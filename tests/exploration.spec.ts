import { test, expect, Page } from '@playwright/test';

// Helper function to explore and log page structure
async function explorePage(page: Page, pageName: string) {
  console.log(`\n=== Exploring ${pageName} ===`);
  
  // Log all links found on the page
  const links = await page.locator('a').all();
  console.log(`Found ${links.length} links`);
  
  // Log all buttons
  const buttons = await page.locator('button').all();
  console.log(`Found ${buttons.length} buttons`);
  
  // Log all forms
  const forms = await page.locator('form').all();
  console.log(`Found ${forms.length} forms`);
  
  // Log all images
  const images = await page.locator('img').all();
  console.log(`Found ${images.length} images`);
  
  // Return discovered elements for test generation
  return {
    links: await Promise.all(links.map(async (link) => ({
      text: await link.textContent(),
      href: await link.getAttribute('href')
    }))),
    buttons: await Promise.all(buttons.map(async (button) => ({
      text: await button.textContent(),
      type: await button.getAttribute('type')
    }))),
    forms: forms.length,
    images: images.length
  };
}

test.describe('RoboInk Site Exploration', () => {
  test('explore homepage and generate test ideas', async ({ page }) => {
    // Navigate to the homepage
    await page.goto('/');
    
    // Wait for the page to load
    await page.waitForLoadState('networkidle');
    
    // Take a screenshot for reference
    await page.screenshot({ path: 'tests/screenshots/homepage.png', fullPage: true });
    
    // Explore the homepage structure
    const homePageData = await explorePage(page, 'Homepage');
    
    // Log navigation menu items
    const navItems = await page.locator('nav a').all();
    console.log('\nNavigation items:');
    for (const item of navItems) {
      const text = await item.textContent();
      const href = await item.getAttribute('href');
      console.log(`- ${text}: ${href}`);
    }
    
    // Check for hero section
    const heroSection = await page.locator('[class*="hero"], .hero-section, #hero').first();
    if (await heroSection.isVisible()) {
      console.log('\nHero section found');
    }
    
    // Check for product cards or featured items
    const productCards = await page.locator('[class*="card"], [class*="product"], [class*="featured"]').all();
    console.log(`\nFound ${productCards.length} product/featured cards`);
    
    // Check for featured sections
    const featuredSection = await page.locator('[class*="featured"], .featured-section').first();
    if (await featuredSection.isVisible()) {
      console.log('\nFeatured section found');
    }
    
    // Generate test ideas based on exploration
    console.log('\n=== Generated Test Ideas ===');
    console.log('1. Test navigation to all pages');
    console.log('2. Test product card interactions and navigation');
    console.log('3. Test cart functionality (add/remove items)');
    console.log('4. Test search functionality');
    console.log('5. Test responsive design on mobile/desktop');
    console.log('6. Test form submissions (contact, custom requests)');
    console.log('7. Test filtering and sorting products');
    console.log('8. Test accessibility features');
    
    // Basic assertions to ensure the page loads correctly
    await expect(page).toHaveTitle(/RoboInk/i);
    expect(navItems.length).toBeGreaterThan(0);
  });
  
  test('explore all navigation links', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // Get all navigation links
    const navLinks = await page.locator('nav a').all();
    const linkData = [];
    
    for (const link of navLinks) {
      const href = await link.getAttribute('href');
      const text = await link.textContent();
      if (href && href.startsWith('/')) {
        linkData.push({ href, text });
      }
    }
    
    // Visit each link and explore
    for (const { href, text } of linkData) {
      console.log(`\nVisiting: ${text} (${href})`);
      await page.goto(href);
      await page.waitForLoadState('networkidle');
      
      // Take screenshot
      const screenshotName = href.replace(/\//g, '-').substring(1) || 'home';
      await page.screenshot({ 
        path: `tests/screenshots/${screenshotName}.png`, 
        fullPage: true 
      });
      
      // Explore the page
      await explorePage(page, text || 'Unknown Page');
    }
  });
  
  test('identify interactive elements', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // Find all interactive elements
    const interactiveElements = {
      buttons: await page.locator('button').all(),
      links: await page.locator('a').all(),
      inputs: await page.locator('input').all(),
      selects: await page.locator('select').all(),
      textareas: await page.locator('textarea').all()
    };
    
    console.log('\n=== Interactive Elements Summary ===');
    console.log(`Buttons: ${interactiveElements.buttons.length}`);
    console.log(`Links: ${interactiveElements.links.length}`);
    console.log(`Inputs: ${interactiveElements.inputs.length}`);
    console.log(`Selects: ${interactiveElements.selects.length}`);
    console.log(`Textareas: ${interactiveElements.textareas.length}`);
    
    // Log button details
    console.log('\n=== Button Details ===');
    for (const button of interactiveElements.buttons) {
      const text = await button.textContent();
      const ariaLabel = await button.getAttribute('aria-label');
      console.log(`- "${text?.trim() || ariaLabel || 'No text'}"`);
    }
  });
});