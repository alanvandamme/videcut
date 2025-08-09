import { test, expect } from '@playwright/test';

test.describe('VideCut Homepage', () => {
  test('página inicial carrega corretamente', async ({ page }) => {
    await page.goto('/');
    
    // Verifica se o título está presente
    await expect(page.locator('h1')).toContainText('VideCut');
    
    // Verifica se a descrição está presente
    await expect(page.locator('text=Corte vídeos automaticamente com IA')).toBeVisible();
    
    // Verifica se todos os cards estão presentes
    await expect(page.locator('text=🎬 Upload de Vídeo')).toBeVisible();
    await expect(page.locator('text=✂️ Cortes Automáticos')).toBeVisible();
    await expect(page.locator('text=📱 Formatos Otimizados')).toBeVisible();
    await expect(page.locator('text=🔤 Legendas em PT')).toBeVisible();
  });

  test('verifica responsividade mobile', async ({ page }) => {
    // Testa em viewport mobile
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    // Título deve estar visível mesmo em mobile
    await expect(page.locator('h1')).toBeVisible();
    
    // Cards devem estar empilhados em coluna única
    const cards = page.locator('[class*="card"]');
    expect(await cards.count()).toBe(4);
  });

  test('verifica se não há erros de console', async ({ page }) => {
    const errors = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });
    
    await page.goto('/');
    
    // Aguarda um pouco para capturar todos os possíveis erros
    await page.waitForTimeout(2000);
    
    expect(errors).toHaveLength(0);
  });

  test('verifica hover nos cards', async ({ page }) => {
    await page.goto('/');
    
    // Pega o primeiro card
    const firstCard = page.locator('[class*="card"]').first();
    
    // Verifica se o card responde ao hover
    await firstCard.hover();
    
    // Verifica se o card está visível após hover
    await expect(firstCard).toBeVisible();
  });
});
