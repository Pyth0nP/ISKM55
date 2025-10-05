const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36');

  for (let pageNum = 1; pageNum <= 4; pageNum++) {
    const url = `https://mobilni-telefony.heureka.cz/?page=${pageNum}`;
    await page.goto(url, { waitUntil: 'networkidle2' });

    const phones = await page.evaluate(() => {
      const productLinks = document.querySelectorAll('.c-product__title .c-product__link');
      const names = Array.from(productLinks).map(link => link.textContent.trim());
      const priceElements = document.querySelectorAll('.c-product__price--bold, .c-product__price');
      const prices = Array.from(priceElements).map(price => price.textContent.trim());
      return names.map((name, index) => {
        const price = prices[index] || 'Cena nenalezena';
        return { name, price };
      });
    });

    phones.forEach(p => {
      console.log(`${p.name} - ${p.price}`);
    });

    let csv = 'Název;Cena\n';
    phones.forEach(p => {
      csv += `"${p.name}";"${p.price}"\n`;
    });

    fs.writeFileSync(`telefony-stranka-${pageNum}.csv`, csv, 'utf8');
    console.log(`Exportováno: ${phones.length} záznamů do telefony-stranka-${pageNum}.csv`);
  }

  await browser.close();
})();
