import { test, expect } from '@playwright/test';

test('has Alfredes title', async ({ page }) => {
  await page.goto('http://localhost:4321/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Alfredes/);
});

test('has booking button ', async ({ page }) => {
  await page.goto('http://localhost:4321/');

  await page.getAttribute('button', 'Book Your Stay Now');

});

test('get contacts link', async ({ page }) => {
  await page.goto('http://localhost:4321/');

  // Click the get started link.
   await page.getByRole('link', { name: 'Contacto' }).click();

  // Expects page to have a heading with the name of Installation.
   await expect(page.getByRole('heading', { name: 'Cabin Rental Inquiry' })).toBeVisible();
});



test('test', async ({ page }) => {
  await page.goto('https://alfredes.com.ar/test');
  await page.getByRole('link', { name: 'Servicios' }).click();
  await page.getByText('Ahora la cabaña esta').click();
  await page.getByRole('link', { name: 'Fotos' }).click();
  await page.getByRole('heading', { name: 'Fotos del Interior' }).click();
  await page.getByRole('heading', { name: 'Fotos del Exterior' }).click();
  await page.getByRole('img', { name: 'Foto desde dron', exact: true }).click();
  await page.getByAltText('imagen de la cabaña').click();
  await page.getByRole('img', { name: 'Foto del exterior de la cabaña', exact: true }).click();
  await page.getByAltText('imagen de la cabaña').click();
  await page.getByRole('link', { name: 'Como Llegar' }).click();
  await page.getByRole('heading', { name: '¿COMO LLEGAR?' }).click();
  await page.locator('[id="__next"] iframe').contentFrame().getByText('Cabaña AlfredesAboutThis map').click();
  await page.getByText('Coordenadas de la Cabañapara').click();
  await page.getByText('Coordenadas de la Cabañapara').click();
  await page.getByRole('link', { name: 'Contacto' }).click();
  await page.getByLabel('Nombre').click();
  await page.getByLabel('Nombre').fill('Test');
  await page.getByLabel('Nombre').press('Tab');
  await page.getByLabel('Email').fill('moonbe77@gmial.com');
  await page.getByLabel('Email').press('Tab');
  await page.getByLabel('Teléfono').fill('0481123456');
  await page.getByLabel('Teléfono').press('Tab');
  await page.getByLabel('Desde').fill('10/12/1982');
  await page.getByLabel('Desde').press('Tab');
  await page.getByLabel('Choose date, selected date is').press('Tab');
  await page.getByLabel('Hasta').fill('10/12/1982');
  await page.getByLabel('Hasta').press('Tab');
  await page.locator('div').filter({ hasText: /^Hasta$/ }).getByLabel('Choose date, selected date is').press('Tab');
  await page.getByLabel('Mensaje', { exact: true }).fill('test');
  await page.getByRole('button', { name: 'Enviar' }).click();
  await page.getByText('Envíanos un Mensaje Gracias,').click();
  await page.getByText('Envíanos un Mensaje').click();
  await page.getByText('Gracias, mensaje enviado').click();
  await page.getByText('Gracias, mensaje enviado').dblclick();
});