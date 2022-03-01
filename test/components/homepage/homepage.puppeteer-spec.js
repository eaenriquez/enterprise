describe('Homepage Puppeteer Tests', () => {
  const baseUrl = 'http://localhost:4000/components/homepage';

  function checkPos(pos1, pos2) {
    expect(pos1.left).toEqual(pos2[0]);
    expect(pos1.top).toEqual(pos2[1]);
  }

  describe('Homepage example hero widget tests', () => {
    const url = `${baseUrl}/example-hero-widget.html?theme=classic`;

    beforeAll(async () => {
      await page.goto(url, { waitUntil: ['domcontentloaded', 'networkidle0'] });
    });

    it('should show the title', async () => {
      await expect(page.title()).resolves.toMatch('IDS Enterprise');
    });

    it('should show the homepage column', async () => {
      await page.waitForSelector('.homepage', { visible: true })
        .then(element => expect(element).toBeTruthy());
    });
  });

  describe('Homepage example editable tests', () => {
    const url = `${baseUrl}/example-editable.html?theme=classic`;

    beforeAll(async () => {
      await page.goto(url, { waitUntil: ['domcontentloaded', 'networkidle0'] });
    });

    it('should show the title', async () => {
      await expect(page.title()).resolves.toMatch('IDS Enterprise');
    });

    it('should show the homepage column', async () => {
      await page.waitForSelector('.homepage', { visible: true })
        .then(element => expect(element).toBeTruthy());
    });
  });

  describe('Homepage example five column tests', () => {
    const url = `${baseUrl}/example-five-column.html`;

    beforeAll(async () => {
      await page.goto(url, { waitUntil: ['domcontentloaded', 'networkidle0'] });
    });

    it('should show the title', async () => {
      await expect(page.title()).resolves.toMatch('IDS Enterprise');
    });

    it('should show the homepage column', async () => {
      await page.waitForSelector('.homepage', { visible: true })
        .then(element => expect(element).toBeTruthy());
    });

    it('should show the homepage widget properly at 1920x1080', async () => {
      const pos = [
        { left: '0px', top: '0px' },
        { left: '380px', top: '0px' },
        { left: '0px', top: '390px' },
        { left: '380px', top: '390px' },
        { left: '0px', top: '780px' },
        { left: '380px', top: '780px' },
        { left: '0px', top: '1170px' },
        { left: '380px', top: '1170px' },
        { left: '0px', top: '1560px' },
        { left: '380px', top: '1560px' },
        { left: '0px', top: '1950px' },
        { left: '380px', top: '1950px' },
        { left: '0px', top: '2340px' },
        { left: '380px', top: '2340px' },
        { left: '0px', top: '2730px' }
      ];

      await page.setViewport({ width: 1920, height: 1080 });
      const elPositions = await page.evaluate(() => {
        // eslint-disable-next-line
        const homepageEls = Array.from(document.querySelectorAll('.homepage .widget'));
        const positions = homepageEls.map(element => `${getComputedStyle(element).left},${getComputedStyle(element).top}`);

        return positions;
      });

      for (let i = 0; i < elPositions.length; i++) {
        const positionList = elPositions[i].split(',');
        checkPos(pos[i], positionList);
      }
    });

    it('should show the homepage widget properly at 1680x1050', async () => {
      const pos = [
        { left: '0px', top: '0px' },
        { left: '380px', top: '0px' },
        { left: '0px', top: '390px' },
        { left: '380px', top: '390px' },
        { left: '0px', top: '780px' },
        { left: '380px', top: '780px' },
        { left: '0px', top: '1170px' },
        { left: '380px', top: '1170px' },
        { left: '0px', top: '1560px' },
        { left: '380px', top: '1560px' },
        { left: '0px', top: '1950px' },
        { left: '380px', top: '1950px' },
        { left: '0px', top: '2340px' },
        { left: '380px', top: '2340px' },
        { left: '0px', top: '2730px' }
      ];

      await page.setViewport({ width: 1680, height: 1050 });
      const elPositions = await page.evaluate(() => {
        // eslint-disable-next-line
        const homepageEls = Array.from(document.querySelectorAll('.homepage .widget'));
        const positions = homepageEls.map(element => `${getComputedStyle(element).left},${getComputedStyle(element).top}`);

        return positions;
      });

      for (let i = 0; i < elPositions.length; i++) {
        const positionList = elPositions[i].split(',');
        checkPos(pos[i], positionList);
      }
    });

    it('should show the homepage widget properly at 1200x1600', async () => {
      const pos = [
        { left: '0px', top: '0px' },
        { left: '380px', top: '0px' },
        { left: '0px', top: '390px' },
        { left: '380px', top: '390px' },
        { left: '0px', top: '780px' },
        { left: '380px', top: '780px' },
        { left: '0px', top: '1170px' },
        { left: '380px', top: '1170px' },
        { left: '0px', top: '1560px' },
        { left: '380px', top: '1560px' },
        { left: '0px', top: '1950px' },
        { left: '380px', top: '1950px' },
        { left: '0px', top: '2340px' },
        { left: '380px', top: '2340px' },
        { left: '0px', top: '2730px' }
      ];

      await page.setViewport({ width: 1200, height: 1600 });
      const elPositions = await page.evaluate(() => {
        // eslint-disable-next-line
        const homepageEls = Array.from(document.querySelectorAll('.homepage .widget'));
        const positions = homepageEls.map(element => `${getComputedStyle(element).left},${getComputedStyle(element).top}`);

        return positions;
      });

      for (let i = 0; i < elPositions.length; i++) {
        const positionList = elPositions[i].split(',');
        checkPos(pos[i], positionList);
      }
    });

    it('should show the homepage widget properly at 768x1024', async () => {
      const pos = [
        { left: '0px', top: '0px' },
        { left: '380px', top: '0px' },
        { left: '0px', top: '390px' },
        { left: '380px', top: '390px' },
        { left: '0px', top: '780px' },
        { left: '380px', top: '780px' },
        { left: '0px', top: '1170px' },
        { left: '380px', top: '1170px' },
        { left: '0px', top: '1560px' },
        { left: '380px', top: '1560px' },
        { left: '0px', top: '1950px' },
        { left: '380px', top: '1950px' },
        { left: '0px', top: '2340px' },
        { left: '380px', top: '2340px' },
        { left: '0px', top: '2730px' }
      ];

      await page.setViewport({ width: 768, height: 1024 });
      const elPositions = await page.evaluate(() => {
        // eslint-disable-next-line
        const homepageEls = Array.from(document.querySelectorAll('.homepage .widget'));
        const positions = homepageEls.map(element => `${getComputedStyle(element).left},${getComputedStyle(element).top}`);

        return positions;
      });

      for (let i = 0; i < elPositions.length; i++) {
        const positionList = elPositions[i].split(',');
        checkPos(pos[i], positionList);
      }
    });

    it('should show the homepage widget properly at 320x480', async () => {
      const pos = [
        { left: '0px', top: '0px' },
        { left: '380px', top: '0px' },
        { left: '0px', top: '390px' },
        { left: '380px', top: '390px' },
        { left: '0px', top: '780px' },
        { left: '380px', top: '780px' },
        { left: '0px', top: '1170px' },
        { left: '380px', top: '1170px' },
        { left: '0px', top: '1560px' },
        { left: '380px', top: '1560px' },
        { left: '0px', top: '1950px' },
        { left: '380px', top: '1950px' },
        { left: '0px', top: '2340px' },
        { left: '380px', top: '2340px' },
        { left: '0px', top: '2730px' }
      ];

      await page.setViewport({ width: 320, height: 480 });
      const elPositions = await page.evaluate(() => {
        // eslint-disable-next-line
        const homepageEls = Array.from(document.querySelectorAll('.homepage .widget'));
        const positions = homepageEls.map(element => `${getComputedStyle(element).left},${getComputedStyle(element).top}`);

        return positions;
      });

      for (let i = 0; i < elPositions.length; i++) {
        const positionList = elPositions[i].split(',');
        checkPos(pos[i], positionList);
      }
    });
  });
});
