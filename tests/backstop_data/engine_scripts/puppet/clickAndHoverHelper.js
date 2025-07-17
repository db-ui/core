// eslint-disable-next-line unicorn/prefer-module, unicorn/no-anonymous-default-export
module.exports = async (page, scenario) => {
	const hoverSelector = scenario.hoverSelectors || scenario.hoverSelector;
	const clickSelector = scenario.clickSelectors || scenario.clickSelector;
	const keyPressSelector =
		scenario.keyPressSelectors || scenario.keyPressSelector;
	const {scrollToSelector} = scenario;
	const {postInteractionWait} = scenario; // Selector [str] | ms [int]

	if (keyPressSelector) {
		for (const keyPressSelectorItem of [keyPressSelector].flat()) {
			// eslint-disable-next-line no-await-in-loop
			await page.waitForSelector(keyPressSelectorItem.selector);
			// eslint-disable-next-line no-await-in-loop
			await page.type(
				keyPressSelectorItem.selector,
				keyPressSelectorItem.keyPress
			);
		}
	}

	if (hoverSelector) {
		for (const hoverSelectorIndex of [hoverSelector].flat()) {
			// eslint-disable-next-line no-await-in-loop
			await page.waitForSelector(hoverSelectorIndex);
			// eslint-disable-next-line no-await-in-loop
			await page.hover(hoverSelectorIndex);
		}
	}

	if (clickSelector) {
		for (const clickSelectorIndex of [clickSelector].flat()) {
			// eslint-disable-next-line no-await-in-loop
			await page.waitForSelector(clickSelectorIndex);
			// eslint-disable-next-line no-await-in-loop
			await page.click(clickSelectorIndex);
		}
	}

	if (postInteractionWait) {
		await page.waitForTimeout(postInteractionWait);
	}

	if (scrollToSelector) {
		await page.waitForSelector(scrollToSelector);
		await page.evaluate((scrollToSelector) => {
			globalThis.querySelector(scrollToSelector).scrollIntoView();
		}, scrollToSelector);
	}
};
