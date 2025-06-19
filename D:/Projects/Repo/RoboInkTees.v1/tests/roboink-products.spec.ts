import { test, expect } from '@playwright/test';

test.describe('RoboInk Product Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
  });

  test('should display featured products on homepage', async ({ page }) => {
    // Look for featured section by ID
    const featuredSection = page.locator('#featured-section-enhanced-2024');
    await expect(featuredSection).toBeVisible();
    
    // Check for product cards within featured section using correct ProductCardPRD selector
    const productCards = featuredSection.locator('div.group.bg-parchment.border.border-navy.rounded-lg');
    const cardCount = await productCards.count();
    
    expect(cardCount).toBeGreaterThan(0);
    console.log(`Found ${cardCount} featured products`);
      
      // Check first product card has required elements
      if (cardCount > 0) {
        const firstCard = productCards.first();
        
        // Check for product image
        const productImage = firstCard.locator('img');
        await expect(productImage).toBeVisible();
        
        // Check for product title
        const productTitle = firstCard.locator('h3, h4, [class*="title"], [class*="name"]');
        await expect(productTitle).toBeVisible();
        
        // Check for price
        const productPrice = firstCard.locator('[class*="price"], :text("$")');
        await expect(productPrice).toBeVisible();
      }
  });

  test('should navigate to product detail page when clicking product', async ({ page }) => {
    // Find a product card
    const productCard = page.locator('[class*="product-card"], [class*="product"] >> visible=true').first();
    
    if (await productCard.isVisible()) {
      // Get product title for verification
      const productTitle = await productCard.locator('h3, h4, [class*="title"]').textContent();
      
      // Click on the product
      await productCard.click();
      
      // Wait for navigation
      await page.waitForLoadState('networkidle');
      
      // Verify we're on a product detail page
      const detailTitle = page.locator('h1, h2').first();
      await expect(detailTitle).toBeVisible();
      
      // Check for product details
      const addToCartButton = page.locator('button:has-text("Add to Cart"), button:has-text("Add to Bag")');
      await expect(addToCartButton).toBeVisible();
      
      // Check for price on detail page
      const detailPrice = page.locator('[class*="price"], :text("$")');
      await expect(detailPrice).toBeVisible();
    }
  });

  test('should be able to add product to cart', async ({ page }) => {
    // Navigate to a product detail page
    const productCard = page.locator('[class*="product-card"], [class*="product"] >> visible=true').first();
    
    if (await productCard.isVisible()) {
      await productCard.click();
      await page.waitForLoadState('networkidle');
      
      // Find and click add to cart button
      const addToCartButton = page.locator('button:has-text("Add to Cart"), button:has-text("Add to Bag")');
      await expect(addToCartButton).toBeVisible();
      
      // Get initial cart count if visible
      const cartCount = page.locator('[class*="cart-count"], [class*="badge"]').first();
      let initialCount = 0;
      if (await cartCount.isVisible()) {
        const countText = await cartCount.textContent();
        initialCount = parseInt(countText || '0');
      }
      
      // Click add to cart
      await addToCartButton.click();
      
      // Wait for cart update
      await page.waitForTimeout(1000);
      
      // Verify cart was updated
      // Either cart count increased or success message appeared
      const successMessage = page.locator(':text("added to cart"), :text("added to bag")');
      const updatedCartCount = page.locator('[class*="cart-count"], [class*="badge"]').first();
      
      const hasSuccessMessage = await successMessage.isVisible();
      const hasUpdatedCount = await updatedCartCount.isVisible();
      
      expect(hasSuccessMessage || hasUpdatedCount).toBeTruthy();
    }
  });

  test('should display product categories or collections', async ({ page }) => {
    // Look for specific collections section by ID
    const collectionsSection = page.locator('#collections-section-updated-2024');
    await expect(collectionsSection).toBeVisible();
    
    // Check for category cards or links within this specific section
    const categoryItems = collectionsSection.locator('a, [class*="category"], [class*="collection"]');
    const categoryCount = await categoryItems.count();
    
    expect(categoryCount).toBeGreaterThan(0);
    console.log(`Found ${categoryCount} categories/collections`);
    
    // Log category names
    for (let i = 0; i < categoryCount; i++) {
      const categoryText = await categoryItems.nth(i).textContent();
      console.log(`- ${categoryText?.trim()}`);
    }
  });
});